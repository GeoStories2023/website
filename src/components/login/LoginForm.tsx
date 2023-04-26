import React, { useRef, useEffect } from "react";
import logo from "@/assets/geo-stories_logo_3.svg";
import googleLogo from "@/assets/google_logo.svg";
import githubLogo from "@/assets/github_logo_black.svg";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "@/firebase";
import { useNavigate } from "react-router-dom";

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

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // const user = result.user;
        // navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }


  function login(email: string, password: string) {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const accessToken = await user.getIdToken();
        console.log("ACCESS TOKEN:", accessToken);
        console.log("USER:", user);
        // Fetch User
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log("RESPONSE:", this.responseText);
            const user = JSON.parse(this.responseText);
            setUser(user);
            navigate("/");
          }
        };
        xhttp.open("GET", "http://thiering.org:3000/api/v1/users", true);
        xhttp.setRequestHeader("Authorization", `Bearer ${accessToken}`);
        xhttp.send();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2">
            <div className="login-form-container">
              <div className="row">
                <div className="col-12 d-lg-none">
                  <div className="login-form-right">
                    <img src={logo} alt="Logo" width="125px" height="125px" />
                    <h1>GeoStories</h1>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="login-form-left">
                    <div className="login-form-left-logo-container">
                      <p>Welcome to</p>
                      <div className="login-form-left-logo">
                        <img src={logo} alt="Logo" />
                        <h2>GeoStories</h2>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit} className="login-form">
                      <input
                        ref={emailRef}
                        type="text"
                        placeholder="E-Mail"
                        required
                      />
                      <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        required
                      />
                      <button>LOGIN</button>
                      <button
                        onClick={signInWithGoogle}
                        className="login-extern-button"
                      >
                        <img src={googleLogo} alt="Google Logo" />
                        Sign in with Google
                      </button>
                      <p>
                        Don't have an account? Register{" "}
                        <a href="/register">here</a>
                      </p>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="login-form-right">
                    <img src={logo} alt="Logo" width="125px" height="125px" />
                    <h1>GeoStories</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
