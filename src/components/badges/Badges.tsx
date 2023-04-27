import React from "react";
import "@/style/Badges.scss";
import citycopper from "@/assets/badges/achievement_city_copper.svg";
import citysilver from "@/assets/badges/achievement_city_silver.svg";
import citygold from "@/assets/badges/achievement_city_gold.svg";
import tourcopper from "@/assets/badges/achievement_tour_copper.svg";
import toursilver from "@/assets/badges/achievement_tour_silver.svg";
import tourgold from "@/assets/badges/achievement_tour_gold.svg";
import countrycopper from "@/assets/badges/achievement_world_copper.svg";
import countrysilver from "@/assets/badges/achievement_world_silver.svg";
import countrygold from "@/assets/badges/achievement_world_gold.svg";

function Badges() {
  return (
    <div className="badges-container">
      <span className="title">Badges</span>
      <section className="badges-collected-container">
        <span>Collected badges:</span>
        <div className="badges-collected">
          <img
            src={citycopper}
            alt="citycopper"
            className="single-badge-collected"
          />
          <img
            src={citysilver}
            alt="citysilver"
            className="single-badge-collected"
          />
          <img
            src={citygold}
            alt="citygold"
            className="single-badge-collected"
          />
          <img
            src={tourcopper}
            alt="tourcopper"
            className="single-badge-collected"
          />
          <img
            src={toursilver}
            alt="toursilver"
            className="single-badge-collected"
          />
          <img
            src={tourgold}
            alt="tourgold"
            className="single-badge-collected"
          />
          <img
            src={countrycopper}
            alt="countrycopper"
            className="single-badge-collected"
          />
          <img
            src={countrysilver}
            alt="countrysilver"
            className="single-badge-collected"
          />
          <img
            src={countrygold}
            alt="countrygold"
            className="single-badge-collected"
          />
        </div>
      </section>
      <section className="badges-available-container">
        <span>Available badges:</span>
        <div className="badges-available">
          <img
            src={citycopper}
            alt="citycopper"
            className="single-badge-available"
          />
          <img
            src={citysilver}
            alt="citysilver"
            className="single-badge-available"
          />
          <img
            src={citygold}
            alt="citygold"
            className="single-badge-available"
          />
          <img
            src={tourcopper}
            alt="tourcopper"
            className="single-badge-available"
          />
          <img
            src={toursilver}
            alt="toursilver"
            className="single-badge-available"
          />
          <img
            src={tourgold}
            alt="tourgold"
            className="single-badge-available"
          />
          <img
            src={countrycopper}
            alt="countrycopper"
            className="single-badge-available"
          />
          <img
            src={countrysilver}
            alt="countrysilver"
            className="single-badge-available"
          />
          <img
            src={countrygold}
            alt="countrygold"
            className="single-badge-available"
          />
        </div>
      </section>
    </div>
  );
}

export default Badges;
