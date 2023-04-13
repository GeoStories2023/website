import React from "react";
import TourItem from "@/components/tour/TourItem";
import "@/style/TourLayout.scss";

function TourLayout({
  title,
  tours,
  header,
}: {
  title: string;
  tours: any;
  header?: any;
}) {
  return (
    <div className="tour-layout-container">
      <div className="tour-layout-header">
        {header ? header : null}
        <h1>{title}</h1>
      </div>
      <div className="tour-list">
        {tours.map((tour: any) => {
          return <TourItem key={tour.id} tour={tour} />;
        })}
      </div>
    </div>
  );
}

export default TourLayout;
