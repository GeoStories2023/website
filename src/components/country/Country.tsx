import React from "react";
import { useParams } from "react-router-dom";
import TourItem from "@/components/tour/TourItem";

function Country() {
  const { country } = useParams();

  const tours = [{
    id: 1,
    name: "Bremer Altstadt-Tour",
    description:
      "Ganz viel Text kann dann hier hinkkommen. Lorem impsum dolor sit amet, consetetur sadipscing elitr.",
    duration: 45,
    city: "Bremen",
    premium: true,
  }, {
    id: 2,
    name: "Bremer Altstadt-Tour",
    description:
      "Ganz viel Text kann dann hier hinkkommen. Lorem impsum dolor sit amet, consetetur sadipscing elitr.",
    duration: 45,
    city: "Bremen",
    premium: false,
  },]

  return (
    <div className="country-container" style={{ color: "black" }}>
      <div className="country-header">{country}</div>
      <div className="country-popular-tours">
        <div className="tour-list">
          {tours.map((tour: any) => {
            return <TourItem key={tour.id} tour={tour} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Country;
