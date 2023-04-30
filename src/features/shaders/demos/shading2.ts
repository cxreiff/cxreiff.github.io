import bunny from "bunny";

import { Procedure } from "~src/common/shaderView/shaderView.component";
import { ShaderDemo } from "../shadersList";
import {
  lookingFromOrigin,
  rotatingInView,
  standardProjection,
} from "../shadersShared";

import vertexShader from "~src/assets/shaders/shading2.vert";
import fragmentShader from "~src/assets/shaders/shading2.frag";
import angleNormals from "angle-normals";

const procedure: Procedure = (regl) => {
  const drawBunny = regl({
    primitive: "triangles",
    vert: vertexShader,
    frag: fragmentShader,
    elements: bunny.cells,
    uniforms: {
      u_time: ({ time }) => time,
      u_resolution: ({ viewportWidth, viewportHeight }) => [
        viewportWidth,
        viewportHeight,
      ],
      model: rotatingInView,
      view: lookingFromOrigin,
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
    { language: "glsl", code: vertexShader },
    { language: "glsl", code: fragmentShader },
  ],
};

export default demo;
