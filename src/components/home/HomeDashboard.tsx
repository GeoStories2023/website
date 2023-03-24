import React from "react";
import "@/style/HomeDashboard.scss";
import { User } from "@/types/General";

function HomeDashboard({ user }: { user: User }) {
  return (
    <div className="home-dashboard-container">
      <div className="home-dashboard-header">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default HomeDashboard;
