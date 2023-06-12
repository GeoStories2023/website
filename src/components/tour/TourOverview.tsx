import React, { useEffect, useState } from "react";
import "@/style/TourOverview.scss";
import tourPicture from "@/assets/tourPicture.jpg";
import TourStepItem from "./TourStepItem";
import { useParams } from "react-router-dom";
import { FetchApi } from "@/FetchApi";
import Loading from "../utils/Loading/Loading";

function TourOverview() {
  const { tour } = useParams();
  const [tourInfo, setTourInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
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
      name: "Kirche St. Georg",
      category: "sight",
      id: 1,
    },
    {
      name: "See Brücke",
      category: "sight",
      id: 2,
    },
    {
      name: "Café Müller",
      category: "food",
      id: 3,
    },
    {
      name: "Bürger Denkmal",
      category: "sight",
      id: 4,
    },
    {
      name: "Sommerwiese",
      category: "sight",
      id: 5,
    },
    {
      name: "Touri Shop Mayer",
      category: "shop",
      id: 6,
    },
    {
      name: "Turm der Freiheit",
      category: "sight",
      id: 4,
    },
    {
      name: "Straße des Südens",
      category: "sight",
      id: 5,
    },
    {
      name: "Stadtrestaurant",
      category: "food",
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
                    src={tourPicture}
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
