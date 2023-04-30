import fs from "fs";
import { DefaultContext, Regl } from "regl";
import { mat4 } from "gl-matrix";
import normals from "angle-normals";
import bunny from "bunny";

import { ShaderViewProps } from "~src/common/shaderView/shaderView.component";

import square from "~src/assets/shaders/square.json";

import vertexBasic1 from "~src/assets/shaders/basic1.vert";
import fragmentBasic1 from "~src/assets/shaders/basic1.frag";
import vertexBasic2 from "~src/assets/shaders/basic2.vert";
import fragmentBasic2 from "~src/assets/shaders/basic2.frag";
import vertexBasic3 from "~src/assets/shaders/basic3.vert";
import fragmentBasic3 from "~src/assets/shaders/basic3.frag";
import vertexBasic4 from "~src/assets/shaders/basic4.vert";
import fragmentBasic4 from "~src/assets/shaders/basic4.frag";
import vertexTexture1 from "~src/assets/shaders/texture1.vert";
import fragmentTexture1 from "~src/assets/shaders/texture1.frag";
import vertexShading1 from "~src/assets/shaders/shading1.vert";
import fragmentShading1 from "~src/assets/shaders/shading1.frag";
import vertexShading2 from "~src/assets/shaders/shading2.vert";
import fragmentShading2 from "~src/assets/shaders/shading2.frag";
import vertexAssorted1 from "~src/assets/shaders/assorted1.vert";
import fragmentAssorted1 from "~src/assets/shaders/assorted1.frag";

const kitty = fs.readFileSync("src/assets/images/kitty.png");

export const CATEGORIES = ["basic", "textures", "shading", "other"] as const;

export type Category = (typeof CATEGORIES)[number];

export const SHADERS_LIST: { [K in Category]: ShaderViewProps[] } = {
  basic: [
    {
      vertexShader: vertexBasic1,
      fragmentShader: fragmentBasic1,
      primitive: "triangle strip",
      attributes: () => ({
        position: square.map(([x, y, z, h]) => [x * 0.7, y * 0.7, z, h]),
      }),
      elements: [0, 1, 2, 3],
    },
    {
      vertexShader: vertexBasic2,
      fragmentShader: fragmentBasic2,
      primitive: "triangle strip",
      elements: [0, 1, 2, 3],
      attributes: () => ({
        position: square.map(([x, y, z, h]) => [x * 0.7, y * 0.7, z, h]),
      }),
    },
    {
      vertexShader: vertexBasic3,
      fragmentShader: fragmentBasic3,
      primitive: "triangle strip",
      elements: [0, 1, 2, 3],
      attributes: () => ({
        position: square.map(([x, y, z, h]) => [x * 0.8, y * 0.8, z, h]),
      }),
    },
    {
      vertexShader: vertexBasic4,
      fragmentShader: fragmentBasic4,
      primitive: "triangle strip",
      elements: [0, 1, 2, 3],
      attributes: () => ({
        position: square.map(([x, y, z, h]) => [x * 0.8, y * 0.8, z, h]),
      }),
    },
  ],
  textures: [
    {
      vertexShader: vertexTexture1,
      fragmentShader: fragmentTexture1,
      primitive: "triangle strip",
      elements: [0, 1, 2, 3],
      attributes: () => ({
        position: square.map(([x, y, z, h]) => [x * 0.8, y * 0.8, z, h]),
      }),
      textures: {
        "textures[0]": kitty,
      },
    },
  ],
  shading: [
    {
      vertexShader: vertexShading1,
      fragmentShader: fragmentShading1,
      primitive: "triangles",
      elements: bunny.cells,
      attributes: () => ({
        position: bunny.positions,
      }),
      uniforms: (_: Regl) => ({
        model: rotatingInView,
        view: lookingFromOrigin,
        projection: standardProjection,
      }),
    },
    {
      vertexShader: vertexShading2,
      fragmentShader: fragmentShading2,
      primitive: "triangles",
      elements: bunny.cells,
      attributes: (_: Regl) => ({
        position: bunny.positions,
        normals: normals(bunny.cells, bunny.positions),
      }),
      uniforms: (_: Regl) => ({
        model: rotatingInView,
        view: lookingFromOrigin,
        projection: standardProjection,
      }),
    },
  ],
  other: [
    {
      vertexShader: vertexAssorted1,
      fragmentShader: fragmentAssorted1,
      primitive: "triangle strip",
      elements: [0, 1, 2, 3],
      attributes: (_: Regl) => ({
        position: square,
      }),
    },
  ],
};

const rotatingInView = ({ tick }: DefaultContext) => {
  const translate = mat4.translate(mat4.create(), mat4.create(), [0, -5, 20]);
  const rotateY = mat4.rotateY(
    mat4.create(),
    mat4.create(),
    (tick * Math.PI) / 200
  );
  return mat4.multiply(translate, translate, rotateY);
};

const lookingFromOrigin = () =>
  mat4.lookAt(mat4.create(), [0, 0, 0], [0, 0, 1], [0, 1, 0]);

const standardProjection = ({
  viewportWidth,
  viewportHeight,
}: DefaultContext) =>
  mat4.perspective(
    mat4.create(),
    Math.PI / 4,
    viewportWidth / viewportHeight,
    0.01,
    1000.0
  );
