import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PopularTour from "@/components/country/PopularTour";
import PremiumAdBanner from "@/components/premium-advertisement/PremiumAdvertisementBanner";
import "@/style/Continent.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import Hamburg from "@/assets/img-dashboard-tours/hamburg.jpg";
import Europe from "@/assets/img-dashboard-tours/london.png";
import NorthAmerica from "@/assets/img-continents/northamerica.jpg";
import SouthAmerica from "@/assets/img-continents/southamerica.jpg";
import Oceania from "@/assets/img-continents/oceania.jpg";
import Africa from "@/assets/img-continents/africa.jpg";
import Asia from "@/assets/img-continents/asia.jpg";

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
            name: "Austria",
            flag: "at",
          },
          {
            name: "Switzerland",
            flag: "ch",
          },
          {
            name: "Belgium",
            flag: "be",
          },
          {
            name: "France",
            flag: "fr",
          },
          {
            name: "Spain",
            flag: "es",
          },
          {
            name: "Portugal",
            flag: "pt",
          },
          {
            name: "Italy",
            flag: "it",
          },
          {
            name: "Denmark",
            flag: "dk",
          },
          {
            name: "Sweden",
            flag: "se",
          },
          {
            name: "Norway",
            flag: "no",
          },
          {
            name: "Poland",
            flag: "pl",
          },
          {
            name: "Croatia",
            flag: "hr",
          },
          {
            name: "Bulgaria",
            flag: "bg",
          },
        ];
        break;
      case "north-america":
        arr = [
          {
            name: "Canada",
            flag: "ca",
          },
          {
            name: "USA",
            flag: "us",
          },
          {
            name: "Mexico",
            flag: "mx",
          },
          {
            name: "Costa Rica",
            flag: "cr",
          },
          {
            name: "Jamaica",
            flag: "jm",
          },
        ];
        break;
      case "south-america":
        arr = [
          {
            name: "Venezuela",
            flag: "ve",
          },
          {
            name: "Peru",
            flag: "pe",
          },
          {
            name: "Ecuador",
            flag: "ec",
          },
          {
            name: "Brazil",
            flag: "br",
          },
          {
            name: "Argentina",
            flag: "ar",
          },
        ];
        break;
      case "oceania":
        arr = [
          {
            name: "Australia",
            flag: "au",
          },
          {
            name: "New Zealand",
            flag: "nz",
          },
        ];
        break;
      case "africa":
        arr = [
          {
            name: "Egypt",
            flag: "eg",
          },
          {
            name: "Morocco",
            flag: "ma",
          },
          {
            name: "Kenya",
            flag: "ke",
          },
          {
            name: "Uganda",
            flag: "ug",
          },
          {
            name: "South Africa",
            flag: "za",
          },
        ];
        break;
      case "asia":
        arr = [
          {
            name: "Japan",
            flag: "jp",
          },
          {
            name: "China",
            flag: "cn",
          },
          {
            name: "Bhutan",
            flag: "bt",
          },
          {
            name: "Hong Kong",
            flag: "hk",
          },
          {
            name: "India",
            flag: "in",
          },
        ];
        break;
      default:
        useEffect(() => {
          navigate("/continents");
          window.scrollTo(0, 0);
        });
        break;
    }
    return arr;
  }

  function handleContinentImage() {
    let continentImage;

    switch (continent) {
      case "europe":
        continentImage = Europe;
        break;
      case "north-america":
        continentImage = NorthAmerica;
        break;
      case "south-america":
        continentImage = SouthAmerica;
        break;
      case "oceania":
        continentImage = Oceania;
        break;
      case "africa":
        continentImage = Africa;
        break;
      case "asia":
        continentImage = Asia;
        break;
    }

    return continentImage;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const countryFlags = handleCountryFlags();
  const continentImage = handleContinentImage();

  return (
    <div className="continent-container" style={{ color: "black" }}>
      <div className="continent-header">
        <div className="continent-headline">
          <h1>{continentInfo.name}</h1>
        </div>
        <img
          src={continentImage}
          alt="continentImage"
          className="continent-header-img"
        />
      </div>
      <section className="continent-country-carousel-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          className="continent-country-carousel"
        >
          {countryFlags.map((item: any, index: number) => (
            <div className="single-item" key={item.name + index}>
              <span
                className={`fi fi-${item.flag} country-img`}
                onClick={() => {
                  navigate(`/tours/${continent}/${item.name}`);
                  window.scrollTo(0, 0);
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
