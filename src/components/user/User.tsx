import React, { useEffect, useState } from "react";
import "@/style/User.scss";
import { useParams } from "react-router-dom";
import StatisticItem from "../statistics/StatisticItem";
import { IoEarth as Countries } from "react-icons/io5";
import { FaCity as Cities } from "react-icons/fa";
import { MdPhotoCamera as Tours } from "react-icons/md";
import testProfilePicture from "@/assets/profilePicture/avatar.png";
import { FetchApi } from "@/FetchApi";
import { User } from "@prisma/client";

function User() {
  const { uid } = useParams();
  const [user, setUser] = useState < User > ();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState < string | undefined > ();
  const accessToken = localStorage.getItem("accessToken") ?? "";

  useEffect(() => {
    if (!uid) return;
    FetchApi.get(`/users/${uid}`, accessToken)
      .then((res) => {
        setUser(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  // Fetch user info

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

  const friends = [
    {
      profilePicture: `${testProfilePicture}`,
      name: "Lena123",
      id: 1,
    },
    {
      profilePicture: `${testProfilePicture}`,
      name: "Julius123",
      id: 2,
    },
    {
      profilePicture: `${testProfilePicture}`,
      name: "Noah123",
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
            <img src={testProfilePicture} alt="profilePictureUser" />
            <div className="user-name-status">
              <span className="user-title">Username: '{user?.username}'</span>
              <span className="user-status">Status: On an adventure</span>
            </div>
          </div>
          <div className="user-statistics-and-friends">
            <div className="user-statistics-and-friends-container">
              <div className="user-statistics">
                <section className="statistic-cards">
                  {statistics.map((statistics: any) => {
                    return (
                      <StatisticItem
                        key={statistics.id}
                        statistics={statistics}
                      />
                    );
                  })}
                </section>
              </div>
              <div className="user-friends">
                <div className="user-friends-container">
                  <span className="friends-title">Freunde</span>
                  {friends.map((item, i) => (
                    <div className="friends-single" key={i}>
                      <img
                        className="friends-profile-picture"
                        src={item.profilePicture}
                        alt="profilePicture"
                      />
                      <span className="friends-name">{item.name}</span>
                    </div>
                  ))}
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
