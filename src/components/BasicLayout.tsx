import { useEffect, useState } from "react";
import "@/style/BasicLayout.scss";
import Header from "@/components/header/Header";
import HeaderLoggedIn from "@/components/header/HeaderLoggedIn";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";
import { User } from "@prisma/client";
import AskUsernameModal from "./utils/Modal/AskUsernameModal";

function BasicLayout({
  user,
  setUser,
}: {
  user: User | undefined;
  setUser: any;
}) {
  const [usernameModal, setUsernameModal] = useState(false);
  useEffect(() => {
    if (user?.askUsername) {
      setUsernameModal(true);
    }
  }, [user]);
  return (
    <div className="basiclayout-container">
      {user ? <HeaderLoggedIn user={user} setUser={setUser} /> : <Header />}
      {usernameModal && (
        <AskUsernameModal setUser={setUser} closeModal={() => { setUsernameModal(false) }} />
      )}

      <div className="basiclayout-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default BasicLayout;
