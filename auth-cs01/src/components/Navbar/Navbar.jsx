import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("user signout"))
      .catch((error) => alert(error.message));
  };
  const navList = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "rounded-lg bg-[#1313138c] p-2" : "p-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          isActive ? "rounded-lg bg-[#1313138c] p-2" : "p-2"
        }
      >
        Login
      </NavLink>
      <NavLink
        to={"/register"}
        className={({ isActive }) =>
          isActive ? "rounded-lg bg-[#1313138c] p-2" : "p-2"
        }
      >
        Register
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? "rounded-lg bg-[#1313138c] p-2" : "p-2"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/order"}
        className={({ isActive }) =>
          isActive ? "rounded-lg bg-[#1313138c] p-2" : "p-2"
        }
      >
        Order
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Authentication</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <a className="btn">{user.email}</a>
            <a onClick={handleSignOut} className="btn">
              Logout
            </a>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
