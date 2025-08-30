import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="mt-10 flex w-full mx-3 md:w-1/3 items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
