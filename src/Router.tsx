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
import Features from "./components/features/Features";
import Tourhistory from "./components/tourhistory/Tourhistory";
import TravelDiary from "./components/traveldiary/TravelDiary";
import Imprint from "@/components/imprint/Imprint";
import PremiumAdvertisement from "@/components/premium-advertisement/PremiumAdvertisement";
import Statistics from "@/components/statistics/Statistics";
import TourOverview from "@/components/tour/TourOverview";
import Settings from "@/components/settings/Settings";
import LoginAdmin from "@/components/login/LoginAdmin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User as UserType } from "@prisma/client";
import { FetchApi } from "./FetchApi";

function Router() {
  const [user, setUser] = useState<UserType>();
  const auth = getAuth();
  onAuthStateChanged(auth, async (fUser) => {
    if (fUser && !user) {
      // fetch user from rest
      const accessToken = await fUser.getIdToken();
      console.log("ROUTER ON AUTH STATE CHANGE", accessToken);
      localStorage.setItem("accessToken", accessToken);
      FetchApi.get("/users", accessToken)
        .then((user) => {
          console.log(user);
          setUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
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
          path: "users/:uid",
          element: <User />,
        },
        {
          path: "friends",
          element: <Friends user={user} setUser={setUser} />,
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
          element: <Statistics />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "features",
          element: <Features />,
        },
        {
          path: "tourhistory",
          element: <Tourhistory />,
        },
        {
          path: "traveldiary",
          element: <TravelDiary />,
        },
        {
          path: "imprint",
          element: <Imprint />,
        },
        /* Just for testing */
        {
          path: "premium-ad",
          element: <PremiumAdvertisement />,
        },
        {
          path: "tour-overview",
          element: <TourOverview />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login setUser={setUser} />,
    },
    {
      path: "login/admin",
      element: <LoginAdmin setUser={setUser} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
