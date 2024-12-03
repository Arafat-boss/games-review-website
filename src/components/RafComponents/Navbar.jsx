import React, { useContext } from "react";
import { FaChevronRight, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import logoImg from "../../assets/logo.jpg";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext)

  const handelSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };





  return (
    <div className="navbar bg-gradient-to-r from-indigo-200 to-purple-100 px-10">
      <div className="navbar-start ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">All Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/addreview">Add Review</NavLink>
            </li>
            <li>
              <NavLink to="/myreviews">My Review</NavLink>
            </li>
            <li>
              <NavLink to="/watchlist">Game WatchList</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className="text-xl  bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <img className="w-56" src={logoImg} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">All Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/addreview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/myreviews">My Review</NavLink>
          </li>
          <li>
            <NavLink to="/watchlist">Game WatchList</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
          <div>
            {user && user?.email ? (
              <div className="flex justify-center items-center gap-3">
                <img
                  className="w-10 rounded-full h-10"
                  src={user?.photoURL}
                  alt=""
                />
                <p className="font-bold">{user.displayName}</p>
              </div>
            ) : (
              <>
               
              </>
            )}
          </div>
          {user ? (
            <>
              <a onClick={handelSignOut} className="btn text-lg bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
              <CiLogout ></CiLogout> Sign Out
              </a>
            </>
          ) : (
            <div>
              <Link className="btn text-lg bg-gradient-to-r from-indigo-700 to-purple-600 text-white" to="/login">
              <IoLogInOutline></IoLogInOutline> Login
              </Link>
            </div>
          )}
        </div>
    </div>
  );
};

export default Navbar;
