import { PrismLight } from "react-syntax-highlighter";
import {
  duotoneLight,
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * Import and register languages for highlighting as-needed.
 * (Importing individually for the purpose of keeping bundle size low)
 */

import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
PrismLight.registerLanguage("tsx", tsx);

import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
PrismLight.registerLanguage("json", scss);

import glsl from "react-syntax-highlighter/dist/esm/languages/prism/glsl";
PrismLight.registerLanguage("glsl", glsl);

export const SyntaxHighlighter = PrismLight;
export const styleLight = duotoneLight;
export const styleDark = duotoneDark;
