import React, { useEffect, useState } from "react";
import "@/style/Statistics.scss";
import StatisticItem from "./StatisticItem";
import {
  IoEarth as Countries,
  IoPersonCircle as ProfilePicture,
} from "react-icons/io5";
import { FaCity as Cities } from "react-icons/fa";
import { MdPhotoCamera as Tours } from "react-icons/md";
import { FetchApi } from "@/FetchApi";
import { Tour } from "@prisma/client";

function Statistics() {
  const accessToken = localStorage.getItem("accessToken") ?? "";
  const [user, setUser] = useState < any > ();
  const [userStatistics, setUserStatistics] = useState < any > ([]);
  const [error, setError] = useState < any > (null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    FetchApi.get(`users`, accessToken)
      .then((response) => {
        setUser(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    FetchApi.get(`users/statistics`, accessToken)
      .then((response) => {
        setUserStatistics(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const statistics = [
    {
      name: "Countries",
      amount: userStatistics.visitedCountries
        ? Object.keys(userStatistics?.visitedCountries).length
        : 0,
      icon: <Countries size={90} />,
      id: 1,
    },
    {
      name: "Cities",
      amount: userStatistics.visitedCities
        ? Object.keys(userStatistics?.visitedCities).length
        : 0,
      icon: <Cities size={90} />,
      id: 2,
    },
    {
      name: "Tours",
      amount:
        user?.startedTours.filter((tour: Tour) => tour.isCompleted).length ?? 0,
      icon: <Tours size={90} />,
      id: 3,
    },
  ];

  return (
    <div className="statistics-container">
      <div className="">
        <span className="statistics-title">Statistics</span>
        <div className="statistics-items">
          <div className="statistics-items-container">
            <section className="statistic-cards">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="row ">
                    {statistics.map((statistics: any) => {
                      return (
                        <StatisticItem
                          key={statistics.id}
                          statistics={statistics}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="statistics-friends">
                    <div className="statistics-friends-container">
                      <table>
                        <tbody>
                          <tr>
                            <th>Place</th>
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
