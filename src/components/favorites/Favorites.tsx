import React from "react";
import "@/style/Favorites.scss";
import TourItem from "@/components/tour/TourItem";

function Favorites() {
  // Fetching favorites from current user
  const favorites = [
    {
      id: 1,
      name: "Bremer Altstadt-Tour",
      description:
        "Ganz viel Text kann dann hier hinkkommen. Lorem impsum dolor sit amet, consetetur sadipscing elitr.",
      duration: 45,
      city: "Bremen",
      premium: true,
    },
    {
      id: 2,
      name: "Bremer Altstadt-Tour",
      description:
        "Ganz viel Text kann dann hier hinkkommen. Lorem impsum dolor sit amet, consetetur sadipscing elitr.",
      duration: 45,
      city: "Bremen",
      premium: false,
    },
  ];

  return (
    <div className="favorites-container">
      <div className="favorites-header"><h1>Favorites</h1></div>
      <section className="tour-list">
        {favorites.map((favorite: any) => {
          return <TourItem key={favorite.id} tour={favorite} />
        })}
      </section>
    </div>
  )
}

export default Favorites;
