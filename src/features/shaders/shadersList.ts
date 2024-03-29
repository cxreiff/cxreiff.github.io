import { Procedure } from "src/common/shaderView/shaderView.component";
import { Excerpt } from "src/common/codeDemo/codeDemo.component";

import assorted1 from "./demos/assorted1";
import assorted2 from "./demos/assorted2";
import assorted3 from "./demos/assorted3";
import assorted4 from "./demos/assorted4";
import assorted5 from "./demos/assorted5";
import assorted6 from "./demos/assorted6";
import basic1 from "./demos/basic1";
import basic2 from "./demos/basic2";
import basic3 from "./demos/basic3";
import basic4 from "./demos/basic4";
import textures1 from "./demos/textures1";
import lighting1 from "./demos/lighting1";
import lighting2 from "./demos/lighting2";
import lighting3 from "./demos/lighting3";
import shadows1 from "./demos/shadows1";

export const CATEGORIES = [
  "assorted",
  "basic",
  "textures",
  "lighting",
  "shadows",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type ShaderDemo = { procedure: Procedure; code: Excerpt[] };

export const SHADERS_LIST: { [K in Category]: ShaderDemo[] } = {
  assorted: [assorted1, assorted2, assorted3, assorted4, assorted5, assorted6],
  basic: [basic1, basic2, basic3, basic4],
  textures: [textures1],
  lighting: [lighting1, lighting2, lighting3],
  shadows: [shadows1],
};
