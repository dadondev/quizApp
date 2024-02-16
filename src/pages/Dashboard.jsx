import React from "react";
import Main from "../layout/Main";
import Sidebar from "../layout/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="md:grid md:grid-cols-[230px_4fr] flex flex-col h-full mx-auto">
      <Sidebar />
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;
