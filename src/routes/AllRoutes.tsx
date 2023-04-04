import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { About, Home } from "../pages/landingpage";
import { ErrorBoundary, NotFound } from "../utils";
import { DashboardLayout } from "../components/layouts/dashboardlayout";
import { DashboardHome } from "../pages";

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
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
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
