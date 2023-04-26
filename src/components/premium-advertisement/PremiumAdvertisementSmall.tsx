import React from "react";
import "@/style/PremiumAdvertisementSmall.scss"
import premiumLogo from "@/assets/premium_globus.svg";
import { useNavigate } from "react-router-dom";

function PremiumAdvertisementSmall() {
    const navigate = useNavigate();
    return(
        <div className="premium-advertisement-small-container" 
        onClick={() => {
                      navigate("/premium");
                    }}>
            <span>Get</span>
            <img className="premium-logo" src={premiumLogo} alt="premiumLogo" />
            <span>Premium</span>
        </div>
    )
}

export default PremiumAdvertisementSmall;