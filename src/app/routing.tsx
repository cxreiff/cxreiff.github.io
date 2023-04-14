import { FC, ReactNode, Suspense, useEffect, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Loader } from "~/src/common/loader/loader.component";
import { IFrame } from "~/src/common/iframe/iframe.component";
import {
  DOCUMENT_TITLE_ROOT,
  PIXIJS_URL,
  BABYLONJS_URL,
  BEVERAGE_URL,
} from "~/src/utilities/constants";

import Homepage from "~/src/features/homepage/homepage.component";
import Projects from "~/src/features/projects/projects.component";
import Photos from "~/src/features/photos/photos.component";
const Posts = lazy(() => import("~/src/features/posts/posts.component"));
const PostsContent = lazy(
  () => import("~/src/features/posts/postsContent.component")
);
const Shaders = lazy(() => import("~/src/features/shaders/shaders.component"));

const Pixijs = () => (
  <IFrame aspect={15.5 / 9} url={PIXIJS_URL} title={"pixijs"} />
);
const Babylonjs = () => (
  <IFrame aspect={3 / 2} url={BABYLONJS_URL} title={"babylonjs"} />
);
const Beverage = () => (
  <IFrame
    aspect={3 / 2}
    mobileAspect={2 / 3}
    url={BEVERAGE_URL}
    title={"beverage"}
  />
);

export type RouteDefinition = {
  path: string;
  Component: FC;
  children?: RouteDefinition[];
};

export const ROUTES: RouteDefinition[] = [
  {
    path: "",
    Component: Homepage,
  },
  {
    path: "projects",
    Component: Projects,
    children: [
      {
        path: "pixijs",
        Component: Pixijs,
        children: [
          {
            path: ":id",
            Component: Pixijs,
          },
        ],
      },
      {
        path: "babylonjs",
        Component: Babylonjs,
      },
      {
        path: "beverage",
        Component: Beverage,
      },
      {
        path: "shaders",
        Component: Shaders,
      },
    ],
  },
  {
    path: "photos",
    Component: Photos,
  },
  {
    path: "posts",
    Component: Posts,
    children: [
      {
        path: ":id",
        Component: PostsContent,
      },
    ],
  },
];

export const Routing: FC = () => {
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
