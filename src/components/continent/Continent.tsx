import React from "react";
import { useParams } from "react-router-dom";

function Continent() {
  const { continent } = useParams();
  return <div style={{ color: "black" }}>Continent: {continent}</div>;
}

export default Continent;
