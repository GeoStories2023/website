import { useState } from "react";
import "@/style/App.css";
import Header from "@/components/header/Header";
import HeaderLoggedIn from "@/components/header/HeaderLoggedIn";
import Homepage from "@/components/homepage/Homepage";
import Footer from "@/components/footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? <HeaderLoggedIn /> : <Header />}

      <Homepage></Homepage>
      <Footer></Footer>
    </>
  );
}

export default App;
