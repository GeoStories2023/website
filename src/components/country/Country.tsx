import React from "react";
import { useParams } from "react-router-dom";
import TourItem from "@/components/tour/TourItem";

function Country() {
  const { country } = useParams();

  return (
    <div className="country-container" style={{ color: "black" }}>
      <div className="country-header">{country}</div>
      <div className="country-popular-tours">
        <div className="tour-list">
          <TourItem />
        </div>
      </div>
    </div>
  );
}

export default Country;
