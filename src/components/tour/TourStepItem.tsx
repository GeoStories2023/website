import react from "react";
import TourOverview from "./TourOverview";
import "@/style/TourStepItem.scss";
import { GiBinoculars as Sight } from "react-icons/gi";
import { IoFastFoodOutline as Food, IoEarth as Earth } from "react-icons/io5";
import { AiOutlineShopping as Shop } from "react-icons/ai";

function TourStepItem({ tourStep }: { tourStep: any}) {
    let icon = < ></>;

    function setIcon() {
        switch(tourStep.category) {
            case "sight": {
                icon = <Sight size={32} />;
                break;
            }
            case "food": {
                icon = <Food size={32} />;
                break;
            }
            case "shop": {
                icon = <Shop size={32} />;
                break;
            }
            default: {
                icon = <Earth size={32} />;
                break;
            }
        }
    }

    setIcon();

    return(
        <div className="tour-step-item">
            <div className="tour-step-icon">
                {icon}
            </div>
            <span className="tour-step-name">{tourStep.name}</span>
        </div>
    )
}

export default TourStepItem;