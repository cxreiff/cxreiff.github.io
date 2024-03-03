import { FC, ReactNode, Suspense, useEffect, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Loader } from "src/common/loader/loader.component";
import { IFrame } from "src/common/iframe/iframe.component";
import {
  DOCUMENT_TITLE_ROOT,
  BREAKOUT_URL,
  PLATFORMER_URL,
  HEX_TILES_URL,
  PIXIJS_URL,
  BABYLONJS_URL,
  PLAIN_WEBGL_URL,
  BIGFOOT_MAP_URL,
} from "src/utilities/constants";

import Homepage from "src/features/homepage/homepage.component";
import Projects from "src/features/projects/projects.component";
import Photos from "src/features/photos/photos.component";
import Sketches from "src/features/sketches/sketches.component";
import ProjectsFigrid from "src/features/projects/projectsFigrid.component";

// const Posts = lazy(() => import("src/features/posts/posts.component"));
// const PostsContent = lazy(
//   () => import("src/features/posts/postsContent.component")
// );

const Shaders = lazy(() => import("src/features/shaders/shaders.component"));

const Pixijs = () => (
  <IFrame aspect={15.5 / 9} url={PIXIJS_URL} title={"pixijs"} canFullscreen />
);
const Babylonjs = () => (
  <IFrame
    aspect={3 / 2}
    url={BABYLONJS_URL}
    title={"babylonjs"}
    canFullscreen
  />
);
const Breakout = () => (
  <IFrame
    aspect={3 / 2}
    mobileAspect={2 / 3}
    url={BREAKOUT_URL}
    title={"breakout"}
    canFullscreen
  />
);
const Platformer = () => (
  <IFrame
    aspect={16 / 10}
    url={PLATFORMER_URL}
    title={"platformer"}
    canFullscreen
  />
);
const HexTiles = () => (
  <IFrame
    aspect={16 / 10}
    url={HEX_TILES_URL}
    title={"hex tiles"}
    canFullscreen
  />
);
const PlainWebGL = () => (
  <IFrame
    aspect={16 / 10}
    url={PLAIN_WEBGL_URL}
    title={"hex tiles"}
    canFullscreen
  />
);
const BigfootMap = () => (
  <IFrame aspect={16 / 10} url={BIGFOOT_MAP_URL} title={"bigfoot sightings"} />
);

export type RouteDefinition = {
  path: string;
  Component: FC;
  children?: RouteDefinition[];
};

export const ROUTES: RouteDefinition[] = [
  { path: "", Component: Homepage },
  {
    path: "projects",
    Component: Projects,
    children: [
      {
        path: "figrid",
        Component: ProjectsFigrid,
      },
      {
        path: "pixijs",
        Component: Pixijs,
        children: [{ path: ":id", Component: Pixijs }],
      },
      { path: "babylonjs", Component: Babylonjs },
      { path: "breakout", Component: Breakout },
      { path: "platformer", Component: Platformer },
      { path: "hex_tiles", Component: HexTiles },
      { path: "webgl", Component: PlainWebGL },
      { path: "bigfoot", Component: BigfootMap },
      {
        path: "shaders",
        Component: Shaders,
        children: [{ path: ":category", Component: Shaders }],
      },
      {
        path: "sketches",
        Component: Sketches,
        children: [{ path: ":id", Component: Sketches }],
      },
    ],
  },
  { path: "photos", Component: Photos },
  // {
  //   path: "posts",
  //   Component: Posts,
  //   children: [{ path: ":id", Component: PostsContent }],
  // },
];

export const Routing = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseRoute = pathname.split("/")[1];
    document.title = baseRoute
      ? `${DOCUMENT_TITLE_ROOT} — ${baseRoute}`
      : DOCUMENT_TITLE_ROOT;
  }, [pathname]);

  const renderRoutes = (routes: RouteDefinition[], prefix = "") =>
    routes.reduce((renderedRoutes, { path, Component, children }) => {
      const fullPath = `${prefix}/${path}`;

      if (children) {
        renderedRoutes.push(...renderRoutes(children, fullPath));
      }

      return renderedRoutes.concat(
        <Route path={fullPath} element={<Component />} />
      );
    }, [] as ReactNode[]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>{renderRoutes(ROUTES)}</Routes>
    </Suspense>
  );
};
