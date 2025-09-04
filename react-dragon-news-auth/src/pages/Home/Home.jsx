import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftNavbar from "../LeftNavbar/LeftNavbar";
import RightNavbar from "../RightNavbar/RightNavbar";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import News from "../News/News";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-5">
        <div>
          <LeftNavbar />
        </div>
        <div className="md:col-span-2">
          <h1 className="font-poppins text-[#403f3f] text-xl font-extrabold">
            Dragon News Home
          </h1>
          {allNews.map((news) => (
            <News key={news._id} news={news} />
          ))}
        </div>
        <div>
          <RightNavbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
