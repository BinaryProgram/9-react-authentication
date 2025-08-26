import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
