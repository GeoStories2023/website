import React, { useRef, useEffect } from "react";
import logo from "@/assets/geo-stories_logo_3.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import { useNavigate } from "react-router-dom";
import { User } from "@/types/General";

function LoginForm({
  setUser,
}: {
  setUser: any; //React.Dispatch<React.SetStateAction<User>>;
}) {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        // Fetch User
        setUser({ ...user, username: "Test" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

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
        <form onSubmit={handleSubmit} className="login-form">
          <input ref={emailRef} type="text" placeholder="E-Mail" required />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
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
  );
}

export default LoginForm;
