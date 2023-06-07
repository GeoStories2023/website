import React, { useEffect, useState } from "react";
import "@/style/TourOverview.scss";
import hamburg from "@/assets/img-dashboard-tours/hamburg.jpg";
import TourStepItem from "./TourStepItem";
import { useParams } from "react-router-dom";
import { FetchApi } from "@/FetchApi";
import Loading from "../utils/Loading/Loading";

function TourOverview() {
  const { tour } = useParams();
  const [tourInfo, setTourInfo] = useState < any > (null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState < any > (null);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    window.scrollTo(0, 0);
    FetchApi.get(`/tours/${tour}`, accessToken)
      .then((tour) => {
        setTourInfo(tour);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const tourSteps = [
    {
      name: "Hafen",
      category: "sight",
      id: 1,
    },
    {
      name: "Café",
      category: "food",
      id: 2,
    },
    {
      name: "Shop",
      category: "shop",
      id: 3,
    },
    {
      name: "Hafen 2",
      category: "sight",
      id: 4,
    },
    {
      name: "Café 2",
      category: "food",
      id: 5,
    },
    {
      name: "Shop 2",
      category: "shop",
      id: 6,
    },
    {
      name: "Hafen 3",
      category: "sight",
      id: 4,
    },
    {
      name: "Café 3",
      category: "food",
      id: 5,
    },
    {
      name: "Shop 3",
      category: "shop",
      id: 6,
    },
  ];

  function formatDate(date: any) {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }

    return [day, month, year].join(".");
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="tour-overview-container">
          {error || !tourInfo ? (
            <h2 className="error-message">{error ?? "No  tour found!"}</h2>
          ) : (
            <div className="tour-overview-container">
              <div className="tour-details">
                <div className="tour-details-container">
                  <img
                    src={hamburg}
                    alt="tourPicture"
                    className="tour-picture"
                  />
                  <span className="tour-title">{tourInfo.name}</span>
                  <div className="tour-description">
                    <span>Description: {tourInfo.description}</span>
                    <br />
                    <span>Duration: {tourInfo.duration} min</span>
                    <br />
                    <span>
                      Last updated: {formatDate(tourInfo.dateUpdated)}
                    </span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="tour-itinerary">
                <div className="tour-itinerary-container">
                  <span className="tour-itinerary-title">Tourverlauf</span>
                  <div className="tour-steps-list">
                    {tourSteps.map((tourStep: any, index) => {
                      return (
                        <TourStepItem
                          key={tourStep.id + index}
                          tourStep={tourStep}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default TourOverview;
