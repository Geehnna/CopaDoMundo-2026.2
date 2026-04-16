import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Calendar } from "./pages/Calendar";
import { Groups } from "./pages/Groups";
import { Knockout } from "./pages/Knockout";
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
