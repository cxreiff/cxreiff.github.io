import fs from "fs";

import { Procedure } from "src/common/shaderView/shaderView.component";
import { ShaderDemo } from "../shadersList";
import { importTextures } from "../shadersShared";

import vertexShader from "src/assets/shaders/textures1.vert";
import fragmentShader from "src/assets/shaders/textures1.frag";
import square from "src/assets/shaders/square.json";

const kitty = fs.readFileSync("src/assets/images/kitty.png");

const procedure: Procedure = (regl) =>
  (async () => {
    const textures = await importTextures(
      {
        "textures[0]": kitty,
      },
      regl
    );
    const drawSquare = regl({
      primitive: "triangle strip",
      vert: vertexShader,
      frag: fragmentShader,
      elements: [0, 1, 2, 3],
      uniforms: {
        ...textures,
        u_time: ({ time }) => time,
        u_resolution: ({ viewportWidth, viewportHeight }) => [
          viewportWidth,
          viewportHeight,
        ],
      },
      attributes: {
        position: square.map(([x, y, z, h]) => [x * 0.8, y * 0.8, z, h]),
      },
    });
    regl.frame(() => {
      regl.clear({ depth: 1, color: [0, 0, 0, 1] });
      drawSquare();
    });
  })();

const demo: ShaderDemo = {
  procedure,
  code: [
    { language: "glsl", code: vertexShader },
    { language: "glsl", code: fragmentShader },
  ],
};

export default demo;
