import { useState } from "react";
import "@/style/BasicLayout.scss";
import Header from "@/components/header/Header";
import HeaderLoggedIn from "@/components/header/HeaderLoggedIn";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";
import { User } from "@/types/General";

function BasicLayout({ user, setUser }: { user: User; setUser: any }) {
  return (
    <>
      {user?.username ? (
        <HeaderLoggedIn user={user} setUser={setUser} />
      ) : (
        <Header />
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default BasicLayout;
