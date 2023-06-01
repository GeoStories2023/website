import React from "react";
import "@/style/Settings.scss";
import { User } from "@prisma/client";
import { FetchApi } from "@/FetchApi";

function Settings({ user, setUser }: { user: User; setUser: any }) {
  const accessToken = localStorage.getItem("accessToken") ?? "";

  // refs for all input fields
  const firstNameRef = React.useRef < HTMLInputElement > (null);
  const lastNameRef = React.useRef < HTMLInputElement > (null);
  const usernameRef = React.useRef < HTMLInputElement > (null);
  const emailRef = React.useRef < HTMLInputElement > (null);
  const passwordRef = React.useRef < HTMLInputElement > (null);
  const confirmPasswordRef = React.useRef < HTMLInputElement > (null);

  function showIt(elementId: any) {
    var el = document.getElementById(elementId);
    if (el != null) {
      el.scrollIntoView(true);
    }
  }

  function saveUser() {
    FetchApi.put("/users", accessToken, {
      user: {
        username: usernameRef.current?.value,
      },
    }).then((data) => {
      setUser(data);
    });
  }

  return (
    <div className="settings-container">
      <div className="settings-header">
        <span className="settings-title">Settings</span>
      </div>
      <div className="settings-content">
        <div className="settings-content-container">
          <div className="settings-navigation">
            <div className="settings-nav-item">
              <span
                className="settings-nav-paragraph"
                onClick={() => showIt("general")}
              >
                General
              </span>
            </div>
            <div className="settings-nav-item">
              <span
                className="settings-nav-paragraph"
                onClick={() => showIt("profile")}
              >
                Profile
              </span>
            </div>
          </div>
          <div className="settings-sections">
            <div className="settings-sections-container">
              <div className="settings-general" id="general">
                <div className="settings-general-container">
                  <span className="settings-general-header">General</span>
                  <div className="settings-general-language">
                    <span>Langauge:</span>
                    <select id="language" name="language">
                      <option value="german">English</option>
                      <option value="english">Deutsch</option>
                      <option value="french">Français</option>
                      <option value="spanish">Español</option>
                    </select>
                  </div>
                  <div className="settings-general-currency">
                    <span>Currency:</span>
                    <select id="currency" name="currency">
                      <option value="euro">Euro</option>
                      <option value="pound">Pound</option>
                      <option value="us-dollar">US-Dollar</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="settings-profile" id="profile">
                <div className="settings-profile-container">
                  <span className="settings-profile-header">Profile</span>
                  <div className="settings-profile-firstname">
                    <span>Name:</span>
                    <input
                      ref={firstNameRef}
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Name"
                    />
                  </div>
                  <div className="settings-profile-lastname">
                    <span>Lastname:</span>
                    <input
                      ref={lastNameRef}
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Lastname"
                    />
                  </div>
                  <div className="settings-profile-username">
                    <span>Username:</span>
                    <input
                      ref={usernameRef}
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      defaultValue={user?.username ?? ""}
                    />
                  </div>
                  <div className="settings-profile-email">
                    <span>E-Mail:</span>
                    <input
                      ref={emailRef}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="settings-profile-password">
                    <span>Password:</span>
                    <input
                      ref={passwordRef}
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                  <div className="settings-profile-password-confirm">
                    <span>Retype password</span>
                    <input
                      ref={confirmPasswordRef}
                      type="password"
                      name="password-confirm"
                      id="password-confirm"
                    />
                  </div>
                </div>
              </div>
              <div className="settings-buttons">
                <div className="settings-buttons-container">
                  <button className="save" onClick={saveUser}>
                    Save
                  </button>
                  <button className="close">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
