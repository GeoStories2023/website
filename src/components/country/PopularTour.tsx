import React from "react";
import "@/style/PopularTour.scss";

function PopularTour({ tour }: { tour: any }) {
  return (
    <article className="popular-tour-container">
      <div className="popular-tour-image"></div>
      <div className="popular-tour-name">{tour.name ?? "- Name Missing -"}</div>
      <div className="popular-tour-description">{tour.description ?? "- Description Missing -"}</div>
      <div className="popular-tour-duration">Duration: {tour.duration ?? "?"} minutes</div>
      <div className="popular-tour-country">Country: {tour.country ?? "- Country Missing -"}</div>
      <div className="popular-tour-premium-container">
        {tour.premium ? <div className="popular-tour-premium">Premium</div> : ""}
      </div>
    </article>
  );
}

export default PopularTour;
