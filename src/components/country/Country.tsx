import React from "react";
import { useParams } from "react-router-dom";
import TourItem from "@/components/tour/TourItem";
import "@/style/Country.scss";
import TourLayout from "../TourLayout";

function Country() {
  const { country } = useParams();
  // Fetching country (for name, tours)
  const countryInfo = {
    name: `CountryName (url: ${country})`,
    tours: [
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
    ],
  };

  return (
    <div className="country-container">
      <TourLayout title={countryInfo.name} tours={countryInfo.tours} />
    </div>
  );
}

export default Country;
