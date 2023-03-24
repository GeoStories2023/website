import React from "react";
import "@/style/Header.scss";
import logo from "@/assets/geo-stories_logo_3.svg";
import premiumBadge from "@/assets/premium_globus.svg";
import {
  IoReorderThreeOutline as BurgerMenu,
  IoPersonCircle as ProfilePicture,
  IoLogOutOutline as Logout,

} from "react-icons/io5";

function HeaderLoggedIn() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
        <div className="logo-title-container">
          <span className="logo-title">GeoStories</span>
          <span className="logo-subtitle">Write your story in the world!</span>
        </div>
      </div>
      <div className="header-actions">
        <img src={premiumBadge} alt="premium-badge" className="premium-badge" />
        <div className="level-container">
          <span className="level-title">Level: 33 - Geschichtenerzähler</span>
          <meter min="0" max="1000" value="600"></meter>
        </div>
        <BurgerMenu size={52} />
        <ProfilePicture size={52} />
        <Logout size={52} />
      </div>
    </header>
  );
}

export default HeaderLoggedIn;
