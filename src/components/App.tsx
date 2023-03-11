import { useState } from "react";
import "@/style/App.css";
import Header from "@/components/header/Header";
import HeaderLoggedIn from "@/components/header/HeaderLoggedIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {loggedIn ? <HeaderLoggedIn /> : <Header />}

      <h1>Home</h1>
    </>
  );
}

export default App;
