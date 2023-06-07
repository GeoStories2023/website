import React from "react";
import TourItem from "@/components/tour/TourItem";
import "@/style/TourLayout.scss";

function TourLayout({
  title,
  tours,
  header,
  image,
}: {
  title: string;
  tours: any;
  header?: any;
  image?: any;
}) {
  console.log("ToursLayout", tours)
  return (
    <div className="tour-layout-container">
      <div className="tour-layout-header">
        {image ? <img src={image} alt="" /> : ""}
        <h1 style={{ color: "white" }}>{title}</h1>
      </div>
      <div className="tour-list">
        {tours.length > 0 ? (
          tours.map((tour: any) => {
            if (tour.tour) {
              return <TourItem key={tour.tour.id} tour={tour.tour} />;
            }
            else {
              return <TourItem key={tour.id} tour={tour} />;
            }
          })
        ) : (
          <h1>No tours found</h1>
        )}
      </div>
    </div>
  );
}

export default TourLayout;
