import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(/*webpackChunkName: 'LazyLayout'*/ "../lazyload/layout/LazyLayout")
);

export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy Dashboard",
  },
  {
    to: "/nolazy",
    path: "/nolazy",
    Component: NoLazy,
    name: "No-Lazy",
  },
];
