import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Nav = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => console.log("user logout successfully"))
      .catch((error) => console.log(error.message));
  };
  console.log(user);

  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-neutral-200 p-2 font-semibold text-[#131313]"
              : "bg-none p-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "bg-neutral-200 p-2 font-semibold text-[#131313]"
              : "bg-none p-2"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "bg-neutral-200 p-2 font-semibold text-[#131313]"
              : "bg-none p-2"
          }
        >
          Register
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive
              ? "bg-neutral-200 p-2 font-semibold text-[#131313]"
              : "bg-none p-2"
          }
        >
          Orders
        </NavLink>
      </li>

      {/* only will visible when uses login */}
      {user && (
        <>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "bg-neutral-200 p-2 font-semibold text-[#131313]"
                  : "bg-none p-2"
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-neutral-200 p-2 font-semibold text-[#131313]"
                  : "bg-none p-2"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navList}
          </ul>
        </div>
        <a className="btn btn-ghost">Auth-private-Router</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
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

export default Nav;
