import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "@/style/ContinentsOverview.scss";
import northAmerica from "@/assets/img-dashboard/continent-northamerica.svg";
import southAmerica from "@/assets/img-dashboard/continent-southamerica.svg";
import europe from "@/assets/img-dashboard/continent-europe.svg";
import africa from "@/assets/img-dashboard/continent-africa.svg";
import asia from "@/assets/img-dashboard/continent-asia.svg";
import oceania from "@/assets/img-dashboard/continent-oceania.svg";

function ContinentsOverview () {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    const continents = [
    {
      title: "Nordamerika",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/northamerica");
          }}
        >
          <img src={northAmerica} alt="Nordamerika" />
        </button>
      ),
    },
    {
      title: "Europa",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/europe");
          }}
        >
          <img src={europe} alt="Europa" />
        </button>
      ),
    },
    {
      title: "Asien",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/asia");
          }}
        >
          <img src={asia} alt="Asien" />
        </button>
      ),
    },
    {
      title: "Südamerika",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/southamerica");
          }}
        >
          <img src={southAmerica} alt="Südamerika" />
        </button>
      ),
    },
    {
      title: "Afrika",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/africa");
          }}
        >
          <img src={africa} alt="Afrika" />
        </button>
      ),
    },
    {
      title: "Ozeanien",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/oceania");
          }}
        >
          <img src={oceania} alt="Ozeanien" />
        </button>
      ),
    },
  ];

    return(
        <div className="continents-overview-container">
            <div className="continents-header">
                <span className="continents-title">Continents</span>
            </div>
            <div className="continents-content">
                <div className="continents-content-container">
                    <div className="continents">
                        <div className="continents-header">
                            <span>Choose your continent for the next adventure</span>
                        </div>
                        <div className="continents-button-container" id="continent-list">
                            <div className="row">
                                {continents.map((item, i) => (
                                    <div className="col-sm-6 col-lg-4" key={i}>
                                        <div className="continents-image">
                                            {item.navigate}
                                            <span className="continents-title">{item.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContinentsOverview;