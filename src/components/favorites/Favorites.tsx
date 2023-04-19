import React from "react";
import "@/style/Favorites.scss";
import TourItem from "@/components/tour/TourItem";
import TourLayout from "../TourLayout";

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
      <TourLayout title="Favorites" tours={favorites} />
    </div>
  );
}

export default Favorites;
