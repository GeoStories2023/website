import React from 'react'
import "@/style/PremiumAdvertisement.scss";
import PremiumAdvertisementBanner from "@/components/premium-advertisement/PremiumAdvertisementBanner";
import PremiumAdvertisementSmall from "@/components/premium-advertisement/PremiumAdvertisementSmall";

function PremiumAdvertisement() {
    return (
        <div className="premium-advertisement-container">
            <h1>Premium Ad</h1>
            <PremiumAdvertisementBanner />
            <PremiumAdvertisementSmall />
        </div>
    )
}

export default PremiumAdvertisement;