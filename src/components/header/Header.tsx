import React, { useEffect } from "react";
import "@/style/Header.scss";
import logo from "@/assets/geo-stories_logo_3.svg";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline as BurgerMenu } from "react-icons/io5";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  function open_menu() {
    const menu_open = document.querySelector(".menu_open");
    const nav = document.querySelector("#nav");
    if (menu_open.classList.contains("is-open")) {
      menu_open.classList.remove("is-open");
      nav.classList.remove("active");
    } else {
      menu_open.classList.add("is-open");
      nav.classList.add("active");
    }
  }

  return (
    <header className="header-container">
      <div className="row">
        <div className="col-md-6 col-lg-8">
          <div className="logo-container">
            <img
              src={logo}
              className="logo"
              alt="Logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <div
              className="logo-title-container"
              onClick={() => {
                navigate("/");
              }}
            >
              <span className="logo-title">GeoStories</span>
              <span className="logo-subtitle">
                Write your story in the world!
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="header-actions">
            <Link to={"/register"} className="header-actions-register">
              Register
            </Link>
            <Link to={"/login"} className="header-actions-login">
              Login
            </Link>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
<BurgerMenu size={64} />;
