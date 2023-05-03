import React from "react";
import "@/style/TourItem.scss";
import premiumBadge from "@/assets/premium_globus.svg";

function TourItem({ tour }: { tour: any }) {
  return (
    <div className="touritem-container">
        <div className="row">
            <div className="col-md-4 col-lg-3">
                <div className="touritem-image"></div>
            </div>
            <div className="col-md-8 col-lg-6">
                <div className="touritem-about">
                    <div className="touritem-about-name">{tour.name}</div>
                    <div className="touritem-about-description">{tour.description}</div>
                </div>
            </div>
            <div className="col-md-8 offset-md-4 col-lg-3 offset-lg-0">
                <div className="touritem-info">
                    <div className="touritem-info-duration">Duration: {tour.duration} Minuten</div>
                    <div className="touritem-info-city">City: {tour.city}</div>
                </div>
                {tour.premium ? <div className="touritem-info-premium"><img src={premiumBadge} alt="premium-badge" className="premium-badge" /></div> : ""}
            </div>
        </div>
    </div>
  );
}

export default TourItem;
