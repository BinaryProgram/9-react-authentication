import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNavbar from "../RightNavbar/RightNavbar";
import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { SlEye } from "react-icons/sl";

 const  NewsCard = () => {
  const newsCardData = useLoaderData();
 if(!newsCardData) return;
  const {title, author, details,image_url,rating,total_view} = newsCardData;
  const CustomRating = styled(Rating)({
    "& .MuiRating-iconEmpty": {
      color: "#d3d3d3",
    },
    "& .MuiRating-iconFilled": {
      color: "#ffe234",
    },
  });
  return (
    <section>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-3 gap-5">
        {/* news card */}
        <div className="md:col-span-2">
         <h1 className="text-xl text-[#403f3f] font-poppins font-extrabold">
          Dragon News
        </h1>
          <section className="mt-5 border border-[#e7e7e784]">
            <div className="flex justify-between items-center bg-[#f3f3f3] p-4">
              <div className="flex gap-2">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={author.img} />
                  </div>
                </div>
                <div>
                  <p className="text-[#403f3f] font-poppins font-semibold">
                    {author.name}
                  </p>
                  <p className="text-[#706f6f] font-poppins">
                    {author.published_date}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#706f6f]">
                  <CiBookmark size={20} />
                </span>
                <span className="text-[#131313]">
                  <CiShare2 size={20} />
                </span>
              </div>
            </div>
            <div className="p-4 space-y-7 mt-4">
              <h1>{title}</h1>
              <img src={image_url} alt="news image" />
              <p>{details}</p>
              <div className="border border-[#e7e7e79f]"></div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <CustomRating
                    name="half-rating"
                    defaultValue={rating.number}
                    precision={0.5}
                    readOnly
                  />
                  <span>{rating.number}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <SlEye size={20} />
                  </span>
                  <span>{total_view}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <RightNavbar />
        </div>
      </div>
    </section>
  );
};

export default NewsCard;