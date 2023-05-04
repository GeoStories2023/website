import React from "react";
import { useParams } from "react-router-dom";
import PopularTour from "@/components/country/PopularTour";
import PremiumAdBanner from "@/components/premium-advertisement/PremiumAdvertisementBanner";
import "@/style/Continent.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import Hamburg from "@/assets/img-dashboard-tours/hamburg.jpg";
import London from "@/assets/img-dashboard-tours/london.png";

function Continent() {
  const { continent } = useParams();
  // Fetch Continent Info (name, countries, popular tours)

  const continentInfo = {
    name: `${continent}`,
    countries: [{ name: "Country1" }, { name: "Country2" }],
    popularTours: [
      {
        image: Hamburg,
        name: "TourName",
        description:
          "Lorem impsum description. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
        duration: 60,
        city: "Syke",
        country: "Germany",
        premium: true,
      },
      {
        image: Hamburg,
        name: "TourName2",
        description:
          "Lorem impsum description. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
        duration: 60,
        city: "Bremen",
        country: "Germany",
        premium: false,
      },
      {
        image: Hamburg,
        name: "TourName3",
        description:
          "Lorem impsum description. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
        duration: 60,
        city: "Bremen",
        country: "Germany",
        premium: false,
      },
    ],
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="continent-container" style={{ color: "black" }}>
      <div className="continent-header">
        <div className="continent-headline">
          <h1>{continentInfo.name}</h1>
        </div>
        <img src={London} alt="london" className="continent-header-img" />
      </div>
      <section className="continent-country-carousel-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={true}
          className="continent-country-carousel"
        >
          <div className="single-item">
            <span className="fi fi-de country-img"></span>
            <span className="country-title">Germany</span>
          </div>
          <div className="single-item">
            <span className="fi fi-fr country-img"></span>
            <span className="country-title">France</span>
          </div>
          <div className="single-item">
            <span className="fi fi-es country-img"></span>
            <span className="country-title">Spain</span>
          </div>
          <div className="single-item">
            <span className="fi fi-se country-img"></span>
            <span className="country-title">Sweden</span>
          </div>
          <div className="single-item">
            <span className="fi fi-no country-img"></span>
            <span className="country-title">Norway</span>
          </div>
          <div className="single-item">
            <span className="fi fi-be country-img"></span>
            <span className="country-title">Belgium</span>
          </div>
        </Carousel>
      </section>
      <section className="continent-popular-tours-container">
        <span className="popular-tours-title">Die besten Touren</span>
        <div className="popular-tours">
          {continentInfo.popularTours.map((tour: any) => {
            return <PopularTour tour={tour} />;
          })}
        </div>
      </section>
      <PremiumAdBanner />
    </div>
  );
}

export default Continent;
