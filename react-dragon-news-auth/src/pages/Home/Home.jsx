import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import RightNavbar from "../RightNavbar/RightNavbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews/>
      <Navbar />
      <div className="grid md:grid-cols-4 gap-5">
        <div className="border">
          <LeftNavbar />
        </div>
        <div className="md:col-span-2 border">
          <h1>middle part</h1>
        </div>
        <div className="border">
          <RightNavbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
