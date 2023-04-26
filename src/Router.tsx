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
import TravelDiary from "./components/traveldiary/TravelDiary";
import Imprint from "@/components/imprint/Imprint";
import PremiumAdvertisement from "@/components/premium-advertisement/PremiumAdvertisement";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User as UserType } from "@prisma/client";

function Router() {
  const [user, setUser] = useState<UserType>();
  const [firebaseUser, setFirebaseUser] = useState<any>();
  const auth = getAuth();
  onAuthStateChanged(auth, async (fUser) => {
    if (fUser) {
      setFirebaseUser(fUser);
      // fetch user from rest
      const bearerToken = await fUser.getIdToken();
      // const response = await fetch("http://localhost:3000/users", {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${bearerToken}`,
      //   },
      // });
      // console.log("test");
      // console.log(response);
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
        {
          path: "features",
          element: <Features />,
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
        }
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
