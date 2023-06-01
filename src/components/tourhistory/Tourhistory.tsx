import React, { useEffect, useState } from "react";
import "@/style/Tourhistory.scss";
import TourLayout from "../TourLayout";
import tourhistoryImg from "@/assets/tourhistory.jpg";
import { FetchApi } from "@/FetchApi";

function Tourhistory() {
  const [user, setUser] = useState < any > (null);
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    FetchApi.get(`/users`, accessToken)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="tourhistory-container">
      <TourLayout
        title="Tour History"
        image={tourhistoryImg}
        tours={user?.startedTours ?? []}
      />
    </div>
  );
}

export default Tourhistory;
