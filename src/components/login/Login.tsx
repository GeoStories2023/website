import React from "react";
import "@/style/Login.scss";
import logo from "@/assets/geo-stories_logo_3.svg";

function Login() {
  return (
    <div className="login-container">
      <div className="blob"></div>
      <section className="login-form-container">
        <div className="login-form-left">
          <div className="login-form-left-logo-container">
            <p>Welcome to</p>
            <div className="login-form-left-logo">
              <img src={logo} alt="Logo" width="60px" height="60px" />
              <h2>GeoStories</h2>
            </div>
          </div>
          <form action="" className="login-form">
            <input type="text" placeholder="E-Mail" />
            <input type="password" placeholder="Password" />
            <button>LOGIN</button>
            <p>
              Don't have an account? Register <a href="/register">here</a>
            </p>
          </form>
        </div>
        <div className="login-form-right">
          <img src={logo} alt="Logo" width="125px" height="125px" />
          <h1>GeoStories</h1>
        </div>
      </section>
    </div>
  );
}

export default Login;
