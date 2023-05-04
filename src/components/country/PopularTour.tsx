import React from "react";
import "@/style/PopularTour.scss";
import Premium from "@/assets/premium_globus.svg";

function PopularTour({ tour }: { tour: any }) {
  return (
    <article className="popular-tour-container">
      <img src={tour.image} alt="tourImage" className="popular-tour-img" />
      <div className="popular-tour-name">{tour.name ?? "- Name Missing -"}</div>
      <div className="popular-tour-description">
        {tour.description ?? "- Description Missing -"}
      </div>
      <div className="popular-tour-duration">
        Duration: {tour.duration ?? "?"} minutes
      </div>
      <div className="popular-tour-country">
        Country: {tour.country ?? "- Country Missing -"}
      </div>
      <div className="popular-tour-premium-container">
        {tour.premium ? (
          <div className="popular-tour-premium">
            <img src={Premium} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}

export default PopularTour;
