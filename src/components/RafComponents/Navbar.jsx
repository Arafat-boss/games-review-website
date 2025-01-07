import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import logoImg from "../../assets/9618073-removebg-preview.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isTooltip, setIsTooltip] = useState(false);

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
    <div className="navbar  px-10">
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
              <NavLink to="/allReview">All Reviews</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/addreview">Add Review</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/myreviews">My Review</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/watchlist">Game WatchList</NavLink>
              </li>
            )}

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl flex items-center ">
          <img className="w-16" src={logoImg} alt="" />
          <p className="font-semibold text-[#fd0259]">Game Reviews</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allReview">All Reviews</NavLink>
          </li>

          {user && (
            <li>
              <NavLink to="/addreview">Add Review</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/myreviews">My Review</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/watchlist">Game WatchList</NavLink>
            </li>
          )}

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div>
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        <div>
          {user && user?.email ? (
            <div
              className="flex justify-center items-center gap-3 z-50 relative"
              onMouseEnter={() => setIsTooltip(true)}
              onMouseLeave={() => setIsTooltip(false)}
            >
              <img
                className="w-10 rounded-full h-10"
                src={user?.photoURL}
                alt=""
              />
              {isTooltip && (
                <div className="font-bold absolute top-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sky-200 to-indigo-2 w-32 py-2 px-4 text-black rounded-xl ">
                  {user.displayName}
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        {user ? (
          <>
            <a
              onClick={handelSignOut}
              className="btn btn-sm bg-gradient-to-r from-red-400 to-[#fd0259] text-white"
            >
              <CiLogout></CiLogout> Sign Out
            </a>
          </>
        ) : (
          <div>
            <Link
              className="btn btn-sm bg-gradient-to-r from-red-400 to-[#fd0259] text-white"
              to="/login"
            >
              <IoLogInOutline></IoLogInOutline> Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
