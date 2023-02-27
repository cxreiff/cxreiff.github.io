if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

import "normalize.css";

import { render } from "preact";

import App from "~/src/app/app";

import "./index.scss";

render(<App />, document.getElementById("root")!);
