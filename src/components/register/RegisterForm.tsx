import React, { LegacyRef, useRef } from "react";
import logo from "@/assets/geo-stories_logo_3.svg";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "@/firebase";

function RegisterForm() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   * - The password must be at least 8 characters long.
   * - The password must contain at least one lowercase letter.
   * - The password must contain at least one uppercase letter.
   * - The password must contain at least one number.
   * - The password must contain at least one special character (excluding whitespace).
   * @param password
   * @returns true if password is valid
   */
  function validatePassword(password: string): boolean {
    let errorMessage = "";
    if (password.length < 8) {
      errorMessage = "Your password must be at least 8 characters long.";
      return false;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      errorMessage =
        "Your password must contain at least one lowercase letter.";
      return false;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      errorMessage =
        "Your password must contain at least one uppercase letter.";
      return false;
    }

    if (!/(?=.*\d)/.test(password)) {
      errorMessage = "Your password must contain at least one number.";
      return false;
    }

    if (!/(?=.*[^\s])/.test(password)) {
      errorMessage =
        "Your password must contain at least one special character (excluding whitespace).";
      return false;
    }

    return true;
  }

  function handleSubmit() {
    // Validate inputs
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    if (validateEmail(email) && validatePassword(password)) {
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
        <div className="register-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Lastname" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postalcode" />
          <input ref={emailRef} type="email" placeholder="E-Mail" required />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
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
            <button onClick={handleSubmit}>REGISTER</button>
            <p>
              Already have an account? Login <a href="/login">here</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
