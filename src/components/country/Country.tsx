import React from "react";
import { useParams } from "react-router-dom";

function Country() {
  const { country } = useParams();

  return <div style={{ color: "black" }}>Country: {country}</div>;
}

export default Country;
