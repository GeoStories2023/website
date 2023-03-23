import React, { useRef } from "react";
import logo from "@/assets/geo-stories_logo_3.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";

function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  function handleSubmit() {
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    login(email, password);
  }
  function login(email: string, password: string) {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
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
    <section className="login-form-container">
      <div className="login-form-left">
        <div className="login-form-left-logo-container">
          <p>Welcome to</p>
          <div className="login-form-left-logo">
            <img src={logo} alt="Logo" width="80px" height="80px" />
            <h2>GeoStories</h2>
          </div>
        </div>
        <div className="login-form">
          <input type="text" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <button onClick={handleSubmit}>LOGIN</button>
          <p>
            Don't have an account? Register <a href="/register">here</a>
          </p>
        </div>
      </div>
      <div className="login-form-right">
        <img src={logo} alt="Logo" width="125px" height="125px" />
        <h1>GeoStories</h1>
      </div>
    </section>
  );
}

export default LoginForm;
