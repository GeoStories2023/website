import React from 'react'
import "@/style/PremiumAdvertisementBanner.scss";
import premiumLogo from "@/assets/premium_globus.svg";
import { useNavigate } from 'react-router-dom';

function PremiumAdvertisementBanner() {
    const navigate = useNavigate();
    return(
        <div className="premium-advertisement-banner-container"
        onClick={() => {
                      navigate("/premium");
                    }}>
            <img className="premium-logo" src={premiumLogo} alt="premiumLogo" />
            <span>Jetzt auf Premium upgraden.</span>
            <img className="premium-logo" src={premiumLogo} alt="premiumLogo" />
        </div>
    )
}

export default PremiumAdvertisementBanner;