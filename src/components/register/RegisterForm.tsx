import React, { useRef } from "react";
import logo from "@/assets/geo-stories_logo_3.svg";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "@/firebase";

interface PasswordInfo {
  status: boolean;
  message: string;
}

function RegisterForm() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [passwordInfo, setPasswordInfo] = React.useState<PasswordInfo[]>([
    { status: false, message: "8 characters long" },
    {
      status: false,
      message: "At least one lowercase letter",
    },
    {
      status: false,
      message: "At least one uppercase letter",
    },
    { status: false, message: "At least one number" },
    {
      status: false,
      message: "At least one special character",
    },
  ]);
  let passwordOk = useRef<boolean>(false);

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   * - The password must be at least 8 characters long.
   * - The password must contain at least one lowercase letter.
   * - The password must contain at least one uppercase letter.
   * - The password must contain at least one number.
   * - The password must contain at least one special character (excluding whitespace).
   */
  function validatePassword() {
    const password = passwordRef.current?.value ?? "";
    const passwordInfo = [
      { status: password.length > 8, message: "8 characters long" },
      {
        status: /(?=.*[a-z])/.test(password),
        message: "At least one lowercase letter",
      },
      {
        status: /(?=.*[A-Z])/.test(password),
        message: "At least one uppercase letter",
      },
      { status: /(?=.*\d)/.test(password), message: "At least one number" },
      {
        status: /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password),
        message: "At least one special character",
      },
    ];

    setPasswordInfo(passwordInfo);

    const isPasswordValid = passwordInfo.every((info) => info.status);
    passwordOk.current = isPasswordValid;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Validate inputs
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    if (validateEmail(email) && passwordOk.current) {
      register(email, password);
    }
  }

  function register(email: string, password: string) {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="register-form-container">
      <div className="register-form-logo-container">
        <p>Welcome to</p>
        <div className="register-form-logo">
          <img src={logo} alt="Logo" width="80px" height="80px" />
          <h2>GeoStories</h2>
        </div>
      </div>
      <div className="register-form-inner-container">
        <form onSubmit={handleSubmit} className="register-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Lastname" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postalcode" />
          <input ref={emailRef} type="email" placeholder="E-Mail" required />
          <div className="register-password-container">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              onChange={validatePassword}
              required
            />
            <div className="register-password-info">
              {passwordInfo.map((info: PasswordInfo) => {
                return (
                  <div
                    className="register-password-info-item"
                    key={info.message}
                  >
                    <div
                      className={
                        info.status
                          ? "register-password-info-item-icon"
                          : "register-password-info-item-icon insufficient"
                      }
                    >
                      {info.status ? "✔" : "✖"}
                    </div>
                    <p>{info.message}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <input type="password" placeholder="Confirm Password" />
          <div className="register-form-checkbox-container">
            <div className="register-form-checkbox">
              <input type="checkbox" id="register-form-agb" />
              <label htmlFor="register-form-agb">Accept our AGBs</label>
            </div>
            <div className="register-form-checkbox">
              <input type="checkbox" id="register-form-privacy-policy" />
              <label htmlFor="register-form-privacy-policy">
                Accept our privacy policy
              </label>
            </div>
          </div>
          <div className="register-form-button">
            <button>REGISTER</button>
            <p>
              Already have an account? Login <a href="/login">here</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
