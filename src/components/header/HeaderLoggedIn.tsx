import React from "react";
import "@/style/Header.scss";
import logo from "@/assets/geo-stories_logo_3.svg";
import {
  IoReorderThreeOutline as BurgerMenu,
  IoLogOutOutline as LogOut,
  IoPersonCircle as ProfilePicture,
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
        <BurgerMenu size={52} />
        <LogOut size={52} />
        <ProfilePicture size={52} />
      </div>
    </header>
  );
}

export default HeaderLoggedIn;
