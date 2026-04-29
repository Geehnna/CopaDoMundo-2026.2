import { createBrowserRouter } from "react-router";
import { Home } from "../app/pages/Home";
import { Calendar } from "../app/pages/Calendar";
import { Groups } from "../app/pages/Groups";
import { Knockout } from "../app/pages/Knockout";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "calendario", Component: Calendar },
      { path: "grupos", Component: Groups },
      { path: "eliminatorias", Component: Knockout },
    ],
  },
]);
