import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { Home } from "../pages";
import { ErrorBoundary, NotFound } from "../utils/hoc";

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
