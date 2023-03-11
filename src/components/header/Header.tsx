import React from "react";
import "@/style/Header.scss";
import logo from "@/assets/geo-stories_logo_3.svg";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline as BurgerMenu } from "react-icons/io5";

function Header() {
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
        <Link to={"/register"} className="header-actions-register">
          Register
        </Link>
        <Link to={"/login"} className="header-actions-login">
          Login
        </Link>
        <BurgerMenu size={64} />
      </div>
    </header>
  );
}

export default Header;
