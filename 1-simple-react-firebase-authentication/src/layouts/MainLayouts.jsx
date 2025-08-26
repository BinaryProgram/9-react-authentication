import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex justify-center fixed mb-24">
        <Header />
      </div>
      <div className="flex justify-center mt-10">
        <div className="max-h-1/2 flex justify-center max-w-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
