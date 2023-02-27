if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

import "normalize.css";

import h, { render } from "preact";

import App from "~/src/app/app";

import styles from "./index.scss";

document.fonts.ready
  .then(() => {
    document.body.className = styles.font_loaded;
  })
  .catch(() => {
    document.body.className = styles.font_failed;
  });

render(<App />, document.getElementById("root")!);
