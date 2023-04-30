import React from "react";
import "@/style/StatisticItem.scss";
import Statistics from "./Statistics";

function StatisticItem({ statistics }: { statistics: any})  {
    return (
        <div className="statistic-item-container">
            <span className="statistic-item-title">{ statistics.name }</span>
            <span className="statistic-item-amount">{ statistics.amount }</span>
            <div className="statistic-item-icon">
                { statistics.icon } 
            </div>
        </div>
    );
}

export default StatisticItem;