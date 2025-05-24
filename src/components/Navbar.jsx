import React, { use } from "react";
import { Link, NavLink } from "react-router";
import navImg from "../assets/logo3.1.PNG";
import AuthContext from "../provider/AuthContext";
import profilePic from "../assets/profile.png";
import { toast } from "react-toastify";
import { useDarkMode } from "../provider/ThemeContext";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { user, setUser, logOut } = use(AuthContext);
  const { darkMode, setDarkMode } = useDarkMode();

  const logOutUser = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.error("User Logged Out");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const links = (
    <>
      <NavLink className="text-base md:text-xl font-medium md:mr-4 p-2" to="/">
        Home
      </NavLink>
      <NavLink
        className="text-base md:text-xl font-medium md:mr-2 p-2"
        to="/findRoommates"
      >
        Find Roommates
      </NavLink>
      <NavLink
        className="text-base md:text-xl font-medium md:mr-2 p-2"
        to="/browseListing"
      >
        Browse Listing
      </NavLink>
      <NavLink
        className="text-base md:text-xl font-medium md:mr-2 p-2"
        to="/myListing"
      >
        My Listing
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-l border-r border-b border-white shadow-sm rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="md:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="md:text-xl font-bold flex gap-3 cursor-pointer" to="/">
          <img className="h-10 rounded-lg bg-black" src={navImg} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 bg-base-300 rounded-full mr-2"
          >
            {darkMode ? <IoIosSunny size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                title={user.displayName}
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            ) : (
              <img
                src={profilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            )}
            <Link onClick={logOutUser} className="btn bg-black text-white">
              Log Out
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link className="btn bg-black text-white" to="/login">
              Login
            </Link>
            <Link className="btn bg-black text-white" to="/register">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
