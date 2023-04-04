import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { About, Home } from "../pages/landingpage";
import { ErrorBoundary, NotFound } from "../utils";
import { DashboardLayout } from "../components/layouts/dashboardlayout";
import { DashboardAbout, DashboardHome } from "../pages";
import { fetchDictionary } from "../utils/api";

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
        //must load before fetchign the page
        loader: fetchDictionary,
      },
      {
        path: "about",
        element: <DashboardAbout />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
