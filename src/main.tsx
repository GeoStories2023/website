import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicLayout from "@/components/App";
import "@/style/index.scss";
import Login from "@/components/login/Login";
import Continent from "@/components/continent/Continent";
import Country from "@/components/country/Country";
import Home from "./components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/tours",
        children: [
          {
            path: ":continent",
            element: <Continent />,
          },
          {
            path: ":continent/:country",
            element: <Country />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
