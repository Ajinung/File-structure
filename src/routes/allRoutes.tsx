import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import { HomeLayout } from "../components";

export const element = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
