import { readFileSync } from "fs";
import { mat4, vec3 } from "gl-matrix";
import bunny from "bunny";

import { Procedure } from "~src/common/shaderView/shaderView.component";
import { ShaderDemo } from "../shadersList";
import { Mesh } from "../mesh";

import vertexShaderMain from "~src/assets/shaders/shadows1_main.vert";
import fragmentShaderMain from "~src/assets/shaders/shadows1_main.frag";
import vertexShaderDepth from "~src/assets/shaders/shadows1_depth.vert";
import fragmentShaderDepth from "~src/assets/shaders/shadows1_depth.frag";
const markdown = readFileSync("src/assets/shaders/shadows1.md", "utf-8");

const procedure: Procedure = (regl) => {
  const drawPlane = new Mesh(
    [
      [-0.5, +0.0, -0.5],
      [+0.5, +0.0, -0.5],
      [-0.5, +0.0, +0.5],
      [+0.5, +0.0, +0.5],
    ],
    [
      [3, 1, 0],
      [0, 2, 3],
    ],
    [
      [+0.0, +1.0, +0.0],
      [+0.0, +1.0, +0.0],
      [+0.0, +1.0, +0.0],
      [+0.0, +1.0, +0.0],
    ]
  ).drawable(regl);

  const drawBunny = new Mesh(bunny.positions, bunny.cells).drawable(regl);

  const fbo = regl.framebuffer({
    color: regl.texture({
      width: 2048,
      height: 2048,
      wrap: "clamp",
      type: "float",
    }),
    depth: true,
  });

  const drawGlobal = regl({
    context: {
      light_direction: [0.8, -1.0, 0.6],
    },
    uniforms: {
      view: mat4.lookAt(mat4.create(), [0, 15, 0], [0, -3, -20], [0, 1, 0]),
      light_direction: ({ light_direction }) => light_direction,
      light_view: ({ light_direction }) =>
        mat4.lookAt(
          mat4.create(),
          light_direction.map((e) => e * -1) as vec3,
          [0, 0, 0],
          [0, 1, 0]
        ),
      light_projection: mat4.ortho(mat4.create(), -30, 30, -30, 30, -30, 30),
    },
  });
  const drawDepth = regl({
    vert: vertexShaderDepth,
    frag: fragmentShaderDepth,
    framebuffer: fbo,
  });
  const drawMain = regl({
    vert: vertexShaderMain,
    frag: fragmentShaderMain,
    uniforms: {
      min_bias: 0.005,
      max_bias: 0.05,
      shadow_map: fbo,
    },
  });

  regl.frame(({ tick }) => {
    const drawMeshes = () => {
      regl.clear({ depth: 1, color: [0, 0, 0, 1] });
      drawBunny({
        translation: [0, -3, -20],
        rotation: [0.0, (tick * Math.PI) / 800.0, 0.0],
      });
      drawPlane({
        translation: [0.0, -5.0, -20.0],
        scale: [20.0, 20.0, 20.0],
      });
    };
    drawGlobal(() => {
      drawDepth(drawMeshes);
      drawMain(drawMeshes);
    });
  });
};

const demo: ShaderDemo = {
  procedure,
  code: [
    { language: "markdown", code: markdown },
    { language: "glsl", code: vertexShaderMain },
    { language: "glsl", code: fragmentShaderMain },
  ],
};

export default demo;
