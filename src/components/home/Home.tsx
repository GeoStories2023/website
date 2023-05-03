import React from "react";
import HomeDefault from "./HomeDefault";
import HomeDashboard from "./HomeDashboard";
import { User } from "@prisma/client";

function Home({ user }: { user: User | undefined }) {
  return <>{user ? <HomeDashboard user={user} /> : <HomeDefault />}</>;
}

export default Home;
