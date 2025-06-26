import React from "react";
import Sidebar from "./Sidebar";
import MainContentDashboard from "./MainContentDashboard";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar></Sidebar>
      <div className="flex-1">
        <MainContentDashboard></MainContentDashboard>
      </div>
    </div>
  );
};

export default Dashboard;
