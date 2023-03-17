import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicLayout from "@/components/App";
import "@/style/index.scss";
import Login from "@/components/login/Login";
import Continent from "@/components/continent/Continent";
import Country from "@/components/country/Country";
import Home from "@/components/home/Home";
import Register from "@/components/register/Register";
import Friends from "@/components/friends/Friends";
import User from "@/components/user/User";
import Badges from "@/components/badges/Badges";
import Favorites from "@/components/favorites/Favorites";
import Premium from "./components/premium/Premium";
import About from "./components/about/About";

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
        path: "tours",
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
      {
        path: "users/:user",
        element: <User />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "premium",
        element: <Premium />,
      },
      {
        path: "statistics",
      },
      {
        path: "about",
        element: <About />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
