import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((result) => result.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="font-poppins text-[#403f3f] text-xl font-extrabold">
        All Category
      </h1>
      <h2 className="text-xl text-center mt-5 p-5 rounded-lg w-full bg-[#e7e7e7] font-poppins font-bold text-[#403f3f]">
        Nationals News
      </h2>
      <aside className="flex flex-col gap-3 mt-7 ml-7">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            {category.name}
          </Link>
        ))}
      </aside>
    </div>
  );
};

export default LeftNavbar;
