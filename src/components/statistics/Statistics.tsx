import React from "react";
import "@/style/Statistics.scss";
import StatisticItem from "./StatisticItem";
import { IoEarth as Countries, IoPersonCircle as ProfilePicture } from "react-icons/io5";
import { FaCity as Cities } from "react-icons/fa";
import { MdPhotoCamera as Tours } from "react-icons/md";

function Statistics(){

    const statistics = [
        {
            name: "Länder",
            amount: 5,     
            icon: <Countries size={90} />,
            id: 1,   
        },
        {
            name: "Städte",
            amount: 15,     
            icon: <Cities size={90} />,
            id: 2,
        },
        {
            name: "Touren",
            amount: 30,     
            icon: <Tours size={90} />,
            id: 3,
        },
        {
            name: "Länder",
            amount: 5,     
            icon: <Countries size={90} />,
            id: 4,   
        },
        {
            name: "Städte",
            amount: 15,     
            icon: <Cities size={90} />,
            id: 5,
        },
        {
            name: "Touren",
            amount: 30,     
            icon: <Tours size={90} />,
            id: 6,
        },
    ];

    return (
        <div className="statistics-container">
            <span className="statistics-title">Statistiken</span>
            <div className="statistics-items">
                <div className="statistics-items-container">
                    <section className="statistic-cards">
                    {statistics.map((statistics: any) => {
                        return <StatisticItem key={statistics.id} statistics={statistics} />;
                    })}
                    </section>
                    <div className="statistics-friends">
                        <div className="statistics-friends-container">
                            <table>
                                <tr>
                                    <th>Platz</th>
                                    <th>Name</th>
                                    <th>Story-Points</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Lena</td>
                                    <td>40.000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Noah</td>
                                    <td>30.000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Nils</td>
                                    <td>25.000</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Statistics;