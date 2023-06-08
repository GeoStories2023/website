import React, { useEffect, useState } from "react";
import "@/style/Header.scss";
import logo from "@/assets/geo-stories_logo_3.svg";
import premiumBadge from "@/assets/premium_globus.svg";
import {
  IoPersonCircle as ProfilePicture,
  IoLogOutOutline as Logout,
} from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { User } from "@prisma/client";
import { FetchApi } from "@/FetchApi";

function HeaderLoggedIn({ user, setUser }: { user: User; setUser: any }) {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const level: number = Math.floor(user.xp / 1000);
  const minLevelValue = level * 1000;
  const maxLevelValue = (level + 1) * 1000;
  const [levelName, setLevelName] = useState("Beginner");

  const meter = document.getElementById("meter-level");
  const meterCurrentValue = meter?.getAttribute("value");
  const meterMinValue = meter?.getAttribute("min");
  const meterMaxValue = meter?.getAttribute("max");

  useEffect(() => {
    async function fetching() {
      await getLevelName();
    }
    fetching();
  }, []);

  async function getLevelName() {
    FetchApi.get(`/levels/byXp/${user.xp + 1}`, accessToken)
      .then((res) => {
        if (res) {
          setLevelName(res.name); // Set level name
        } else {
          setLevelName("Beginner");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful
        setUser(null);
        localStorage.removeItem("accessToken");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function open_menu() {
    const menu_open = document.querySelector(".menu_open");
    const nav = document.querySelector("#nav");
    if (menu_open?.classList.contains("is-open")) {
      menu_open.classList.remove("is-open");
      nav?.classList.remove("active");
    } else {
      menu_open?.classList.add("is-open");
      nav?.classList.add("active");
    }
  }
  return (
    <header className="header-logged-in-container">
      <div
        className="logo-container"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} className="logo" alt="Logo" />
        <div className="logo-title-container">
          <span className="logo-title">GeoStories</span>
          <span className="logo-subtitle">Write your story in the world!</span>
        </div>
      </div>
      <div className="header-actions">
        {user.isPremium && (
          <img
            src={premiumBadge}
            alt="premium-badge"
            className="premium-badge"
          />
        )}
        <div className="header-username-container">
          <ProfilePicture
            onClick={() => {
              navigate(`/users/${user.uid}`);
            }}
          />
          <div className="header-username">{user.username}</div>
        </div>
        <div className="level-container">
          <span className="level-title">
            Level: {level} - {levelName}
          </span>
          <div className="meter-level-score">
            <meter
              id="meter-level"
              min={minLevelValue}
              max={maxLevelValue}
              value={user.xp}
            ></meter>
            <span className="meter-score">
              {meterCurrentValue}/{meterMaxValue}
            </span>
            <span className="meter-score">
              {meterCurrentValue}/{meterMaxValue}
            </span>
          </div>
        </div>
        <div className="icons">
          <Logout onClick={handleSignOut} />
        </div>
        <div className="navigation">
          <a
            href="#"
            id="nav"
            onClick={open_menu}
            className="mobile_nav_handler hamburger-icon-container"
          >
            <span className="hamburger-icon"></span>
          </a>
          <div className="menu_open">
            <ul>
              <Link to={"/settings"}>
                <li>Einstellungen</li>
              </Link>
              <Link to={"/statistics"}>
                <li>Statistiken</li>
              </Link>
              <Link to={"/features"}>
                <li>Features</li>
              </Link>
              <Link to={"/premium"}>
                <li>Premium</li>
              </Link>
              <Link to={"/about"}>
                <li>Über uns</li>
              </Link>
              <Link to={"/imprint"}>
                <li>Impressum</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLoggedIn;
