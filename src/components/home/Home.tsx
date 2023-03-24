import React from "react";
import { User } from "@/types/General";
import HomeDefault from "./HomeDefault";
import HomeDashboard from "./HomeDashboard";

function Home({ user }: { user: User }) {
  return (
    <>
      {user?.username ? (
        <HomeDashboard user={user} />
      ) : (
        <HomeDefault user={user} />
      )}
    </>
  );
}

export default Home;
