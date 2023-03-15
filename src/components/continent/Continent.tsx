import React from "react";
import { useParams } from "react-router-dom";

function Continent() {
  const { continent } = useParams();
  // Fetch Continent

  return (
    <div className="continent-container" style={{ color: "black" }}>
      {continent}
    </div>
  );
}

export default Continent;
