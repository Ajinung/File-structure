import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { Children } from "react";
import { About, Home } from "../pages";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>error, page not found</h1>,
  },
]);
