import { Procedure } from "src/common/shaderView/shaderView.component";
import { ShaderDemo } from "../shadersList";

import vertexShader from "src/assets/shaders/assorted6.vert";
import fragmentShader from "src/assets/shaders/assorted6.frag";
import square from "src/assets/shaders/square.json";

const procedure: Procedure = (regl) => {
  const drawSquare = regl({
    primitive: "triangle strip",
    vert: vertexShader,
    frag: fragmentShader,
    elements: [0, 1, 2, 3],
    uniforms: {
      u_time: ({ time }) => time,
      u_resolution: ({ viewportWidth, viewportHeight }) => [
        viewportWidth,
        viewportHeight,
      ],
    },
    attributes: {
      position: square.map(([x, y, z, h]) => [x, y, z, h]),
    },
  });
  regl.frame(() => {
    regl.clear({ depth: 1, color: [0, 0, 0, 1] });
    drawSquare();
  });
};

const demo: ShaderDemo = {
  procedure,
  code: [{ language: "glsl", code: fragmentShader }],
};

export default demo;
