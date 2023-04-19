import React from "react";
import "@/style/Header.scss";
import logo from "@/assets/geo-stories_logo_3.svg";
import premiumBadge from "@/assets/premium_globus.svg";
import {
  IoPersonCircle as ProfilePicture,
  IoLogOutOutline as Logout,
} from "react-icons/io5";
import { User } from "@/types/General";
import { getAuth, signOut } from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";

function HeaderLoggedIn({ user, setUser }: { user: User; setUser: any }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const level = 33;
  const levelName = "Storyteller";
  const minLevelValue = level * 1000;
  const maxLevelValue = (level + 1) * 1000;
  const meter = document.getElementById("meter-level");
  const meterCurrentValue = meter?.getAttribute("value");
  const meterMinValue = meter?.getAttribute("min");
  const meterMaxValue = meter?.getAttribute("max");
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        // Error
      });
  }

  function open_menu() {
    const menu_open = document.querySelector('.menu_open');
    const nav = document.querySelector('#nav');
    if (menu_open.classList.contains('is-open')) {
      menu_open.classList.remove('is-open');
      nav.classList.remove('active');
    } else {
      menu_open.classList.add('is-open');
      nav.classList.add('active');
    }
  }
  return (
    <header className="header-logged-in-container">
      <div className="logo-container" onClick={() => {
                  navigate("/");
                }}>
        <img src={logo} className="logo" alt="Logo" />
        <div className="logo-title-container">
          <span className="logo-title">GeoStories</span>
          <span className="logo-subtitle">Write your story in the world!</span>
        </div>
      </div>
      <div className="header-actions">
        <img src={premiumBadge} alt="premium-badge" className="premium-badge" />
        <div className="level-container">
          <span className="level-title">Level: {level} - {levelName}</span>
          <div className="meter-level-score">
            <meter id="meter-level" min={minLevelValue} max={maxLevelValue} value="33600"></meter>
            <span className="meter-score">{meterCurrentValue}/{meterMaxValue}</span>
          </div>
        </div>
        <div className="icons">
          <ProfilePicture  />
          <Logout onClick={handleSignOut} />
        </div>
        <div className="navigation">
          <a href="#" id="nav"  onClick={open_menu} className="mobile_nav_handler hamburger-icon-container">
            <span className="hamburger-icon"></span>
          </a>
          <div className="menu_open">
            <ul>
              <Link to={"/login"}><li>Login</li></Link>
              <Link to={"/register"}><li>Register</li></Link>
              <Link to={"/continent"}><li>Kontinente</li></Link>
              <Link to={"/continent/country"}><li>Länder</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLoggedIn;
