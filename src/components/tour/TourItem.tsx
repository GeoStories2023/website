import React from "react";
import "@/style/TourItem.scss";

function TourItem() {
  const tour = {
    name: "Bremer Altstadt-Tour",
    description:
      "Ganz viel Text kann dann hier hinkkommen. Lorem impsum dolor sit amet, consetetur sadipscing elitr.",
    duration: 45,
    city: "Bremen",
    premium: true,
  };
  return (
    <div className="touritem-container">
      <div className="touritem-image"></div>
      <div className="touritem-about">
        <div className="touritem-about-name">{tour.name}</div>
        <div className="touritem-about-description">{tour.description}</div>
      </div>
      <div className="touritem-info">
        <div className="touritem-info-duration">Duration: {tour.duration} Minuten</div>
        <div className="touritem-info-city">City: {tour.city}</div>
      </div>
      {tour.premium ? <div className="touritem-info-premium"></div> : ""}
    </div>
  );
}

export default TourItem;
