import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicLayout from "@/components/BasicLayout";
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
import { User as UserType } from "./types/General";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Router() {
  const [user, setUser] = useState<any /*UserType*/>();
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser({ ...user, username: "TestRefresh" });
    }
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicLayout user={user} setUser={setUser} />,
      children: [
        {
          path: "",
          element: <Home user={user} />,
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
        },
      ],
    },
    {
      path: "/login",
      element: <Login setUser={setUser} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
