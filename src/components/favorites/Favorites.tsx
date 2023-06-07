import React, { useEffect, useState } from "react";
import "@/style/Favorites.scss";
import favoritesImg from "@/assets/favorites.jpg";
import TourLayout from "../TourLayout";
import { FetchApi } from "@/FetchApi";

function Favorites() {
  // Fetching favorites from current user
  const [favoriteTours, setFavoriteTours] = useState<any>(null);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    FetchApi.get(`/users`, accessToken)
      .then((response) => {
        setFavoriteTours(response.favoriteTours);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="favorites-container">
      <TourLayout title="Favorites" image={favoritesImg} tours={favoriteTours ?? []} />
    </div>
  );
}

export default Favorites;
