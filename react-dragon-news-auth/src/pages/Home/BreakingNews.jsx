import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="p-2 bg-[#f3f3f3] flex mt-6">
      <button className="btn btn-secondary md:w-36 rounded-none">Latest</button>
      <Marquee pauseOnHover={true} speed={150} className="text-[#403f3f]">
        <Link to={'/'} className="mr-2">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to={'/'} className="mr-2">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to={'/'} className="mr-2">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
