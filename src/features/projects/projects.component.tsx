import { FC } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { Card, CardProps } from "~/src/common/card/card.component";
import teapot from "~/src/assets/svg/teapot.svg";
import breakout from "~/src/assets/svg/breakout.svg";
import platformer from "~/src/assets/svg/platformer.svg";
import hex_tiles from "~/src/assets/svg/hex_tiles.svg";
import waves from "~/src/assets/svg/waves.svg";
import pixijs from "~/src/assets/svg/pixijs.svg";
import babylonjs from "~/src/assets/svg/babylonjs.svg";
import arrow from "~/src/assets/svg/arrow.svg";

import styles from "./projects.module.scss";

type ProjectCard = CardProps & { route: string };

const PROJECTS: ProjectCard[] = [
  {
    svg: teapot,
    primary: "shaders",
    secondary: "webgl, regl.js, glsl",
    route: "/projects/shaders/assorted",
  },
  {
    svg: breakout,
    primary: "breakout",
    secondary: "rust, WASM, bevy",
    route: "/projects/breakout",
  },
  {
    svg: hex_tiles,
    primary: "hex tiles",
    secondary: "rust, WASM, bevy",
    route: "/projects/hex_tiles",
  },
  {
    svg: waves,
    primary: "bevy misc",
    secondary: "bevy, WGSL",
    route: "/projects/sketches/1",
  },
  {
    svg: platformer,
    primary: "platformer",
    secondary: "rust, WASM, bevy",
    route: "/projects/platformer",
  },
  {
    svg: pixijs,
    primary: "asteroids",
    secondary: "pixi.js, matter.js",
    route: "/projects/pixijs/asteroids",
  },
  {
    svg: babylonjs,
    primary: "babylon.js test",
    secondary: "babylon.js",
    route: "/projects/babylonjs",
  },
];

const MORE_PROJECTS: ProjectCard = {
  svg: arrow,
  primary: "see all projects...",
  route: "/projects",
};

const ProjectList = (projects: ProjectCard[]) => {
  const navigate = useNavigate();

  return (
    <section className={styles.projects}>
      {projects.map(({ route, ...props }, index) => (
        <Card
          key={index}
          className={cn({ [styles.see_more]: route === "/projects" })}
          onClick={() => navigate(route)}
          {...props}
        />
      ))}
    </section>
  );
};

export const MiniProjects: FC = () =>
  ProjectList([...PROJECTS.slice(0, 3), MORE_PROJECTS]);

const Projects: FC = () => ProjectList(PROJECTS);

export default Projects;
