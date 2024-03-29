import React, { useRef, useEffect } from "react";
import logo from "@/assets/geo-stories_logo_3.svg";
import githubLogo from "@/assets/github_logo_black.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import { useNavigate } from "react-router-dom";
import { FetchApi } from "@/FetchApi";

function LoginFormAdmin({
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
  function fetchUser(accessToken: string) {
    console.log("Fetching user with accessToken: ", accessToken);
    FetchApi.get("/users", accessToken)
      .then((response) => {
        console.log("RESPONSE:", response);
        setUser(response);
        console.log("accessToken SIGN IN WITH GOOGLE:", accessToken);
        localStorage.setItem("accessToken", accessToken);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  function login(email: string, password: string) {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const accessToken = await userCredential.user.getIdToken();
        console.log("ACCESS TOKEN:", accessToken);
        fetchUser(accessToken);
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
                      <p>Admin View</p>
                      <div className="login-form-left-logo">
                        <img
                          src={logo}
                          alt="Logo"
                          onClick={() => {
                            navigate("/");
                          }}
                        />
                        <h2
                          onClick={() => {
                            navigate("/");
                          }}
                        >
                          GeoStories
                        </h2>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit} className="login-form">
                      <input
                        ref={emailRef}
                        type="text"
                        placeholder="Username"
                        required
                      />
                      <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Key"
                        required
                      />
                      <button>LOGIN</button>
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

export default LoginFormAdmin;
