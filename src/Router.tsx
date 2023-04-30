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
import Statistics from "@/components/statistics/Statistics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User as UserType } from "@prisma/client";

function Router() {
  const [user, setUser] = useState < UserType > ();
  const auth = getAuth();
  onAuthStateChanged(auth, async (fUser) => {
    if (fUser) {
      // fetch user from rest
      const accessToken = await fUser.getIdToken();
      console.log(accessToken)
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log("RESPONSE:", this.responseText);
          const user = JSON.parse(this.responseText);
          setUser(user);
        }
      };
      xhttp.open("GET", "http://thiering.org:3000/api/v1/users", true);
      xhttp.setRequestHeader("Authorization", `Bearer ${accessToken}}`);
      xhttp.send();
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
          element: <Statistics />
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
