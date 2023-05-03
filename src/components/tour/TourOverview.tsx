import React from "react";
import "@/style/TourOverview.scss";
import hamburg from "@/assets/img-dashboard-tours/hamburg.jpg";
import TourStepItem from "./TourStepItem";

function TourOverview() {
    const tourSteps = [
        {
            name: "Hafen",
            category: "sight",
            id: 1,
        },
        {
            name: "Café",
            category: "food",
            id: 2,
        },
        {
            name: "Shop",
            category: "shop",
            id: 3,
        },
        {
            name: "Hafen 2",
            category: "sight",
            id: 4,
        },
        {
            name: "Café 2",
            category: "food",
            id: 5,
        },
        {
            name: "Shop 2",
            category: "shop",
            id: 6,
        },
        {
            name: "Hafen 3",
            category: "sight",
            id: 4,
        },
        {
            name: "Café 3",
            category: "food",
            id: 5,
        },
        {
            name: "Shop 3",
            category: "shop",
            id: 6,
        },
    ]

    return(
        <div className="tour-overview-container">
            <div className="tour-details">
                <div className="tour-details-container">
                    <img src={hamburg} alt="tourPicture" className="tour-picture" />
                    <span className="tour-title">Hamburger Speicherstadt Tour</span>
                    <div className="tour-description">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero fugit ratione, 
                            ullam officia eum minima labore reiciendis veniam, 
                            at maiores! Commodi itaque eaque ipsam minima. Odio natus optio magni. Lorem ipsum 
                            dolor sit amet consectetur, adipisicing elit. Quas unde accusamus repellendus? Praesentium 
                            tenetur ut amet exercitationem maxime repudiandae sapiente, quidem nisi recusandae quasi modi 
                            et illum iusto numquam non. <br />
                            Dauer: ca. 2 Stunden</span>
                    </div>
                </div>
            </div>
            <div className="tour-itinerary">
                <div className="tour-itinerary-container">
                    <span className="tour-itinerary-title">Tourverlauf</span>
                    <div className="tour-steps-list">
                        {tourSteps.map((tourStep: any) => {
                            return <TourStepItem key={tourStep.id} tourStep={tourStep} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourOverview;