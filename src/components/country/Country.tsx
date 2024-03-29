import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import defaultImage from "@/assets/default_country.jpg";
import "@/style/Country.scss";
import TourLayout from "../TourLayout";
import { FetchApi } from "@/FetchApi";
import { Country, Tour } from "@prisma/client";

function Country() {
  const { continent, country } = useParams();
  const accessToken = localStorage.getItem("accessToken") ?? "";
  const [countryInfo, setCountryInfo] = React.useState < Country > ();
  const [tours, setTours] = React.useState < Tour[] > ([]);
  const [error, setError] = React.useState < string > ("");
  useEffect(() => {
    FetchApi.get(`/countries/name/${country}`, accessToken)
      .then((res) => {
        if (res == null) {
          setError("Country not found");
        } else {
          setCountryInfo(res);
        }
      })
      .catch((err) => {
        console.log(error);
        setError(err.statusText);
      });
    FetchApi.get(`/tours/path/name/${continent}/${country}`, accessToken)
      .then((res) => {
        if (res == null) {
          setError("No tours found");
        } else {
          console.log(res);
          setTours(res);
        }
      })
      .catch((err) => {
        setError(err.statusText);
      });
  }, [country]);

  return (
    <div className="country-container">
      {countryInfo && tours && (
        <TourLayout
          title={countryInfo.name}
          image={defaultImage}
          tours={tours ?? []}
        />
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default Country;
