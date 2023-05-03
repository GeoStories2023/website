import { useState } from "react";
import "@/style/BasicLayout.scss";
import Header from "@/components/header/Header";
import HeaderLoggedIn from "@/components/header/HeaderLoggedIn";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";
import { User } from "@prisma/client";

function BasicLayout({
  user,
  setUser,
}: {
  user: User | undefined;
  setUser: any;
}) {
  return (
    <div className="basiclayout-container">
      {user ? <HeaderLoggedIn user={user} setUser={setUser} /> : <Header />}
      <div className="basiclayout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default BasicLayout;
