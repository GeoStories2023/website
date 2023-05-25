import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PopularTour from "@/components/country/PopularTour";
import PremiumAdBanner from "@/components/premium-advertisement/PremiumAdvertisementBanner";
import "@/style/Continent.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import Hamburg from "@/assets/img-dashboard-tours/hamburg.jpg";
import WorldMap from "@/assets/worldMap.jpg";

function Continent() {
  const { continent } = useParams();
  const navigate = useNavigate();

  const countrySearchRef = useRef<HTMLInputElement>(null);
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
        id: 1,
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
        id: 2,
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
        id: 3,
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

  function handleSearchSubmit(e: any) {
    e.preventDefault();
    if (!countrySearchRef.current?.value) {
      return;
    }
    // TODO: If search country is not in continent

    // TODO: Suggestions for search (autocomplete)
    navigate(`/tours/${continent}/${countrySearchRef.current?.value ?? ""}`);
  }

  function handleCountryFlags() {
    let arr: any = [];
    switch (continent) {
      case "europe":
        arr = [
          {
            name: "Germany",
            flag: "de",
          },
          {
            name: "Norway",
            flag: "no",
          },
          {
            name: "Belgium",
            flag: "be",
          },
          {
            name: "Netherlands",
            flag: "nl",
          },
          {
            name: "Spain",
            flag: "es",
          },
          {
            name: "Sweden",
            flag: "se",
          },
          {
            name: "Austria",
            flag: "at",
          },
        ];
        break;
      case "northamerica":
        console.log("Nordamerika");
        break;
      case "southamerica":
        console.log("Südamerika");
        break;
      case "oceania":
        console.log("Ozeanien/Australien");
        break;
      case "africa":
        console.log("Afrika");
        break;
      case "asia":
        console.log("Asien");
        break;
      default:
        console.log("No valid continent.");
        // Direct to a page with all contients like in the dashboard
        break;
    }
    return arr;
  }

  const countryFlags = handleCountryFlags();

  return (
    <div className="continent-container" style={{ color: "black" }}>
      <div className="continent-header">
        <div className="continent-headline">
          <h1>{continentInfo.name}</h1>
        </div>
        <img src={WorldMap} alt="london" className="continent-header-img" />
      </div>
      <section className="continent-country-carousel-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          className="continent-country-carousel"
        >
          {countryFlags.map((item: any) => (
            <div className="single-item">
              <span
                className={`fi fi-${item.flag} country-img`}
                onClick={() => {
                  navigate(`/tours/${continent}/${item.name}`);
                }}
              ></span>
              <span className="country-title">{item.name}</span>
            </div>
          ))}
        </Carousel>
        <section className="continent-country-search-container">
          <h3 className="continent-country-search-title">Search country</h3>
          <div className="continent-country-search">
            <form onSubmit={handleSearchSubmit}>
              <div className="continent-country-search-input">
                <input
                  ref={countrySearchRef}
                  type="text"
                  placeholder="Search for country"
                />
              </div>
              <div className="continent-country-search-button">
                <button>Search</button>
              </div>
            </form>
          </div>
        </section>
      </section>

      <section className="continent-popular-tours-container">
        <span className="popular-tours-title">Die besten Touren</span>
        <div className="popular-tours">
          {continentInfo.popularTours.map((tour: any) => {
            return <PopularTour tour={tour} key={tour.id} />;
          })}
        </div>
      </section>
      <PremiumAdBanner />
    </div>
  );
}

export default Continent;
