import { Procedure } from "~src/common/shaderView/shaderView.component";
import { Excerpt } from "~src/common/codeDemo/codeDemo.component";

import basic1 from "./demos/basic1";
import basic2 from "./demos/basic2";
import basic3 from "./demos/basic3";
import basic4 from "./demos/basic4";
import textures1 from "./demos/textures1";
import shading1 from "./demos/shading1";
import shading2 from "./demos/shading2";
import assorted1 from "./demos/assorted1";

export const CATEGORIES = ["basic", "textures", "shading", "assorted"] as const;

export type Category = (typeof CATEGORIES)[number];

export type ShaderDemo = { procedure: Procedure; code: Excerpt[] };

export const SHADERS_LIST: { [K in Category]: ShaderDemo[] } = {
  basic: [basic1, basic2, basic3, basic4],
  textures: [textures1],
  shading: [shading1, shading2],
  assorted: [assorted1],
};
