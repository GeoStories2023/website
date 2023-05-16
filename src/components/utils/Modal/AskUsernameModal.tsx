import { FetchApi } from "@/FetchApi";
import "@/style/AskUsernameModal.scss";
import React, { useEffect } from "react";

function AskUsernameModal({
  closeModal,
  setUser,
}: {
  closeModal: any;
  setUser: any;
}) {
  const accessToken = localStorage.getItem("accessToken") ?? "";
  const usernameInputRef = React.useRef < HTMLInputElement > (null);
  const [errorMessage, setErrorMessage] = React.useState < string > ("");
  useEffect(() => {
    usernameInputRef.current?.focus();
  }, []);
  return (
    <div className="username-modal-container">
      <div className="username-modal-content">
        <div className="username-modal-title">
          <h3>Choose a username</h3>
        </div>
        <div className="username-modal-input">
          <input
            type="text"
            placeholder="Username"
            ref={usernameInputRef}
            onChange={(e) => {
              if (e.target.value === "") {
                setErrorMessage("Username cannot be empty");
              } else {
                setErrorMessage("");
              }
            }}
          />
          <div className="username-modal-error-message">{errorMessage}</div>
        </div>
        <div className="username-modal-button">
          <button
            onClick={() => {
              if (usernameInputRef.current?.value === "") {
                setErrorMessage("Username cannot be empty");
                return;
              }
              FetchApi.put("/users/setUsername", accessToken, {
                username: usernameInputRef.current?.value,
              })
                .then((res) => {
                  setUser(res);
                  closeModal();
                })
                .catch((err) => {
                  console.log(err);
                  setErrorMessage(err.responseText ?? err.statusText);
                });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AskUsernameModal;
