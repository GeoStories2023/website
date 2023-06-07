import React from "react";
import "@/style/TravelDiary.scss";
import { BsFillImageFill as Image } from "react-icons/bs";

function TravelDiary() {
  const tourName = "Bremer Altstadt Tour";
  let count = 0

  return (
    <div className="travel-diary-container">
      <div className="travel-diary-header">
        <span className="travel-diary-title">Reisetagebuch</span>
        <span className="travel-diary-tour">{tourName}</span>
      </div>
      <div className="travel-diary-text-container">
        <textarea
          className="travel-diary-text"
          name="tourText"
          id="tourText"
          placeholder="Trage hier deinen Eintrag ein."
        />
        <div className="seperator"></div>
      </div>
      <div className="travel-diary-image-container">
        {Array.from(Array(8), (i) => {
          count++;
          return <Image size={250} key={count} />;
        })}
      </div>
      <div className="travel-diary-buttons">
        <div className="travel-diary-buttons-container">
          <button className="save">Save</button>
          <button className="close">Close</button>
        </div>
      </div>
    </div>
  );
}

export default TravelDiary;
