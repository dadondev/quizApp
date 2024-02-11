import React from "react";
import Sidebar from "../layout/Sidebar";
import Main from "../layout/Main";

function Dashboard() {
  return (
    <div className="md:grid md:grid-cols-[230px_4fr] flex flex-col-reverse h-full mx-auto">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Dashboard;
