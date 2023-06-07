import angleNormals from "angle-normals";
import { mat4, vec3 } from "gl-matrix";
import { Regl } from "regl";
import { standardProjection } from "./shadersShared";

type DrawableProps = {
  translation: vec3;
  rotation: vec3;
  scale: vec3;
  view: mat4;
};

export class Mesh {
  positions: number[][];
  elements: number[][];
  normals: number[][];

  constructor(
    positions: number[][],
    elements: number[][],
    normals?: number[][]
  ) {
    this.positions = positions;
    this.elements = elements;
    this.normals = normals || angleNormals(elements, positions);
  }

  drawable = (regl: Regl) =>
    regl({
      primitive: "triangles",
      elements: this.elements,
      uniforms: {
        model: (_, { translation, rotation, scale }: DrawableProps) => {
          const m = mat4.identity(mat4.create());
          mat4.translate(m, m, translation);
          mat4.rotateX(m, m, rotation[0]);
          mat4.rotateY(m, m, rotation[1]);
          mat4.rotateZ(m, m, rotation[2]);
          mat4.scale(m, m, scale);
          return m;
        },
        view: (_, { view }: DrawableProps) => view,
        projection: standardProjection,
      },
      attributes: {
        position: this.positions,
        normal: this.normals,
      },
      cull: {
        enable: true,
      },
    });
}
