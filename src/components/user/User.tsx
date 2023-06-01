import React, { useEffect, useState } from "react";
import "@/style/User.scss";
import { useNavigate, useParams } from "react-router-dom";
import StatisticItem from "../statistics/StatisticItem";
import { IoEarth as Countries } from "react-icons/io5";
import { FaCity as Cities } from "react-icons/fa";
import { MdPhotoCamera as Tours } from "react-icons/md";
import testProfilePicture from "@/assets/profilePicture/avatar.png";
import { FetchApi } from "@/FetchApi";
import { Tour, User } from "@prisma/client";

function User() {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState < User > ();
  const [statistics, setStatistics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState < string | undefined > ();
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    if (!uid) {
      return;
    }
    FetchApi.get(`/users/${uid}`, accessToken)
      .then((res) => {
        console.log(res);
        setUser(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
    FetchApi.get(`/users/statistics/${uid}`, accessToken)
      .then((res) => {
        console.log("stats", res);
        console.log(Object.keys(res.visitedCities).length);
        setStatistics(res);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  function navigateToFriend(friend: User) {
    navigate(`/users/${friend.uid}`);
    navigate(0);
  }

  const stats = [
    {
      name: "Countries",
      amount: statistics.visitedCountries
        ? Object.keys(statistics?.visitedCountries).length
        : 0,
      icon: <Countries size={90} />,
      id: 1,
    },
    {
      name: "Cities",
      amount: statistics.visitedCities
        ? Object.keys(statistics?.visitedCities).length
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
    <div className="user-container">
      {isLoading ? (
        <>{error ? <h3>{error}</h3> : <h2>Loading...</h2>}</>
      ) : (
        <>
          <div className="user-header">
            <div className="row">
              <div className="col-md-4 col-xl-2">
                <img src={testProfilePicture} alt="profilePictureUser" />
              </div>
              <div className="col-md-8 col-xl-10">
                <div className="user-name-status">
                  <span className="user-title">
                    {user?.username ?? "No user found"}
                  </span>
                  <span className="user-status">Status: On an adventure</span>
                </div>
              </div>
            </div>
          </div>
          <div className="user-statistics-and-friends">
            <div className="user-statistics-and-friends-container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="user-statistics">
                    <section className="statistic-cards">
                      <div className="row">
                        {stats.map((statistics: any) => {
                          return (
                            <StatisticItem
                              key={statistics.id}
                              statistics={statistics}
                            />
                          );
                        })}
                      </div>
                    </section>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="user-friends">
                    <div className="user-friends-container">
                      <span className="friends-title">Friends</span>
                      {user?.friends?.map((friendItem: any, i: number) => {
                        const friend: User = friendItem.friendUser;
                        return (
                          <div
                            className="friends-single"
                            key={i}
                            onClick={() => {
                              navigateToFriend(friend);
                            }}
                          >
                            <img
                              className="friends-profile-picture"
                              src={friend.profileImageId ?? testProfilePicture}
                              alt="profilePicture"
                            />
                            <span className="friends-name">
                              {friend.username}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default User;
