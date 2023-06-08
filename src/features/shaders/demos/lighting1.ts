import { readFileSync } from "fs";
import { mat4 } from "gl-matrix";
import bunny from "bunny";

import { Procedure } from "~src/common/shaderView/shaderView.component";
import { ShaderDemo } from "../shadersList";
import { Mesh } from "../mesh";

import vertexShader from "~src/assets/shaders/lighting1.vert";
import fragmentShader from "~src/assets/shaders/lighting1.frag";
const markdown = readFileSync("src/assets/shaders/lighting1.md", "utf-8");

const procedure: Procedure = (regl) => {
  const drawBunny = new Mesh(bunny.positions, bunny.cells).drawable(regl);
  const drawMain = regl({
    vert: vertexShader,
    frag: fragmentShader,
    uniforms: {
      view: mat4.lookAt(mat4.create(), [0, 5, 20], [0, 5, 0], [0, 1, 0]),
    },
  });

  regl.frame(({ tick }) => {
    regl.clear({ depth: 1, color: [0, 0, 0, 1] });
    drawMain(() =>
      drawBunny({
        rotation: [0.0, (tick * Math.PI) / 800.0, 0.0],
      })
    );
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
