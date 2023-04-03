import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
// import { Home } from "../pages";
import ErrorBoundary from "../utils/hoc/ErrorBoundary";
import { NotFound } from "../utils";

const Home = lazy(() => import("../pages/Home"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
