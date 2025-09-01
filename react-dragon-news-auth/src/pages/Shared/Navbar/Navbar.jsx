import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "b-2 bg-[#131313]" : "b-2")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "b-2 bg-[#131313]" : "b-2")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/career"}
          className={({ isActive }) => (isActive ? "b-2 bg-[#131313]" : "b-2")}
        >
          Career
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-sm mt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
      </div>
      <div className="navbar-end items-center gap-2">
        <div className="avatar avatar-offline">
          <div className="w-10 rounded-full">
            <img src="user.png" alt="user" />
          </div>
        </div>
        <Link to={"/"}>
          <button className="btn w-36">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
