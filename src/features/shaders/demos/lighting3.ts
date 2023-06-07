import { readFileSync } from "fs";
import bunny from "bunny";
import angleNormals from "angle-normals";

import { Procedure } from "~src/common/shaderView/shaderView.component";
import { ShaderDemo } from "../shadersList";
import {
  lookingFromOrigin,
  mvMatrix,
  standardProjection,
} from "../shadersShared";

import vertexShader from "~src/assets/shaders/lighting3.vert";
import fragmentShader from "~src/assets/shaders/lighting3.frag";
const markdown = readFileSync("src/assets/shaders/lighting3.md", "utf-8");

const procedure: Procedure = (regl) => {
  const drawBunny = regl({
    primitive: "triangles",
    vert: vertexShader,
    frag: fragmentShader,
    elements: bunny.cells,
    uniforms: {
      view: lookingFromOrigin,
      mv_matrix: mvMatrix,
      projection: standardProjection,
    },
    attributes: {
      position: bunny.positions,
      normal: angleNormals(bunny.cells, bunny.positions),
    },
  });
  regl.frame(() => {
    regl.clear({ depth: 1, color: [0, 0, 0, 1] });
    drawBunny();
  });
};

const demo: ShaderDemo = {
  procedure,
  code: [
    { language: "markdown", code: markdown },
    { language: "glsl", code: vertexShader },
    { language: "glsl", code: fragmentShader },
  ],
};

export default demo;
