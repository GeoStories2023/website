import React from "react";
import { useParams } from "react-router-dom";
import PopularTour from "@/components/country/PopularTour";
import "@/style/Continent.scss";

function Continent() {
  const { continent } = useParams();
  // Fetch Continent Info (name, countries, popular tours)

  const continentInfo = {
    name: `ContinentName (url: '${continent}')`,
    countries: [
      { name: "Country1" },
      { name: "Country2" },
    ],
    popularTours: [
      {
        name: "TourName",
        description: "Lorem impsum description.",
        duration: 60,
        city: "Syke",
        country: "Germany",
        premium: true,
      },
      {
        name: "TourName2",
        description: "Lorem impsum description.",
        duration: 60,
        city: "Bremen",
        country: "Germany",
        premium: false,
      },
    ],
  };

  return (
    <div className="continent-container" style={{ color: "black" }}>
      <div className="continent-header"><h1>{continentInfo.name}</h1></div>
      <section className="continent-country-carousel-container"></section>
      <section className="continent-popular-tours-container">
        {continentInfo.popularTours.map((tour: any) => {
          return <PopularTour tour={tour} />
        })}
      </section>
    </div>
  );
}

export default Continent;
