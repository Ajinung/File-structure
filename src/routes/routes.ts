import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
