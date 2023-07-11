import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "~/src/common/card/card.component";
import teapot from "~/src/assets/svg/teapot.svg";
import breakout from "~/src/assets/svg/breakout.svg";
import platformer from "~/src/assets/svg/platformer.svg";
import hex_tiles from "~/src/assets/svg/hex_tiles.svg";
import waves from "~/src/assets/svg/waves.svg";
import pixijs from "~/src/assets/svg/pixijs.svg";
import babylonjs from "~/src/assets/svg/babylonjs.svg";

import styles from "./projects.module.scss";

const Projects: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.projects}>
      <Card
        image={teapot}
        primary={"shaders"}
        secondary={"webgl, regl.js, glsl"}
        onClick={() => navigate("/projects/shaders/basic")}
      />
      <Card
        image={breakout}
        primary={"breakout"}
        secondary={"rust, WASM, bevy"}
        onClick={() => navigate("/projects/breakout")}
      />
      <Card
        image={hex_tiles}
        primary={"hex tiles"}
        secondary={"rust, WASM, bevy"}
        onClick={() => navigate("/projects/hex_tiles")}
      />
      <Card
        image={waves}
        primary={"bevy misc"}
        secondary={"bevy, WGSL"}
        onClick={() => navigate("/projects/sketches/1")}
      />
      <Card
        image={platformer}
        primary={"platformer"}
        secondary={"rust, WASM, bevy"}
        onClick={() => navigate("/projects/platformer")}
      />
      <Card
        image={pixijs}
        primary={"asteroids"}
        secondary={"pixi.js, matter.js"}
        onClick={() => navigate("/projects/pixijs/asteroids")}
      />
      <Card
        image={babylonjs}
        primary={"babylon.js test"}
        secondary={"babylon.js"}
        onClick={() => navigate("/projects/babylonjs")}
      />
    </section>
  );
};

export default Projects;
