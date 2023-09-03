if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

import "normalize.css";

import { render } from "preact";

import App from "./app/app";

import "./index.scss";

render(<App />, document.getElementById("root")!);

if (module.hot) {
  console.clear = () => {
    location.reload();
  };
}
