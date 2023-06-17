import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './i18n';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Test from "./pages/test";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/test",
    element: <Test />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
