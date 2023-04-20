import { ShaderViewProps } from "~src/common/shaderView/shaderView.component";

import square from "~src/assets/shaders/square.json";

import vertexAssorted1 from "~src/assets/shaders/assorted1.vert";
import fragmentAssorted1 from "~src/assets/shaders/assorted1.frag";
import vertexBasic1 from "~src/assets/shaders/basic1.vert";
import fragmentBasic1 from "~src/assets/shaders/basic1.frag";
import vertexBasic2 from "~src/assets/shaders/basic2.vert";
import fragmentBasic2 from "~src/assets/shaders/basic2.frag";
import vertexBasic3 from "~src/assets/shaders/basic3.vert";
import fragmentBasic3 from "~src/assets/shaders/basic3.frag";
import vertexBasic4 from "~src/assets/shaders/basic4.vert";
import fragmentBasic4 from "~src/assets/shaders/basic4.frag";

export const CATEGORIES = ["basic", "textures", "shading", "other"] as const;

export type Category = (typeof CATEGORIES)[number];

export const SHADERS_LIST: { [K in Category]: ShaderViewProps[] } = {
  basic: [
    {
      vertexShader: vertexBasic1,
      fragmentShader: fragmentBasic1,
      primitive: "triangle strip",
      position: square.map(([x, y, z, h]) => [x * 0.7, y * 0.7, z, h]),
    },
    {
      vertexShader: vertexBasic2,
      fragmentShader: fragmentBasic2,
      primitive: "triangle strip",
      position: square.map(([x, y, z, h]) => [x * 0.7, y * 0.7, z, h]),
    },
    {
      vertexShader: vertexBasic3,
      fragmentShader: fragmentBasic3,
      primitive: "triangle strip",
      position: square.map(([x, y, z, h]) => [x * 0.8, y * 0.8, z, h]),
    },
    {
      vertexShader: vertexBasic4,
      fragmentShader: fragmentBasic4,
      primitive: "triangle strip",
      position: square.map(([x, y, z, h]) => [x * 0.8, y * 0.8, z, h]),
    },
  ],
  textures: [],
  shading: [],
  other: [
    {
      vertexShader: vertexAssorted1,
      fragmentShader: fragmentAssorted1,
      primitive: "triangle strip",
      position: square,
    },
  ],
};
