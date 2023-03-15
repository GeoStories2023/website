import { useState } from "react";
import "@/style/App.css";
import Header from "@/components/header/Header";
import HeaderLoggedIn from "@/components/header/HeaderLoggedIn";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";

function BasicLayout() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? <HeaderLoggedIn /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
}

export default BasicLayout;
