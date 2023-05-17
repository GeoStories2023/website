import React from "react";
import "@/style/TravelDiary.scss";
import { BsFillImageFill as Image } from "react-icons/bs";

function TravelDiary() {
  const tourName = "Bremer Altstadt Tour";

  return (
    <div className="travel-diary-container">
      <div className="travel-diary-header">
        <span className="travel-diary-title">Reisetagebuch</span>
        <span className="travel-diary-tour">{tourName}</span>
      </div>
      <div className="travel-diary-text-container">
        <textarea className="travel-diary-text" name="tourText" id="tourText" placeholder="Trage hier deinen Eintrag ein."/>
        <div className="seperator"></div>
      </div>
      <div className="travel-diary-image-container">
        {Array.from(Array(8), (i) => {
          return <Image size={250} key={i} />
        })}
      </div>
    </div>
  );
}

export default TravelDiary;
