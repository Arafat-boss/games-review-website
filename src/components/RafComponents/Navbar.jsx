import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaGamepad, FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { MdRateReview, MdBookmarkBorder } from "react-icons/md";
import logoImg from "../../assets/9618073-removebg-preview.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("gameReviewTheme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("gameReviewTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-bold bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5 transition-all shadow-sm"
      : "text-base-content/80 hover:text-primary hover:bg-base-200 rounded-lg px-3 py-1.5 font-medium transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-base-100/90 border-b border-base-content/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-3">
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-base-content"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                className="menu menu-md dropdown-content bg-base-100 border border-base-content/10 rounded-2xl z-[100] mt-3 w-64 p-3 shadow-2xl space-y-1"
              >
                <li>
                  <NavLink to="/" className={navLinkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/allReview" className={navLinkClass}>
                    All Reviews
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li>
                      <NavLink to="/addreview" className={navLinkClass}>
                        Add Review
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/myreviews" className={navLinkClass}>
                        My Reviews
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/watchlist" className={navLinkClass}>
                        Game WatchList
                      </NavLink>
                    </li>
                  </>
                )}
                <div className="divider my-1"></div>
                <li>
                  <NavLink to="/contact" className={navLinkClass}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/support" className={navLinkClass}>
                    Support Hub
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-primary to-accent p-0.5 shadow-lg group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-base-100 rounded-[10px] flex items-center justify-center">
                  <FaGamepad className="text-2xl text-primary group-hover:text-accent transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl tracking-tight leading-none text-base-content">
                  GAME<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">REVIEWS</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-base-content/60">
                  Gamer's Critique Hub
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/allReview" className={navLinkClass}>
              All Reviews
            </NavLink>
            {user && (
              <>
                <NavLink to="/addreview" className={navLinkClass}>
                  Add Review
                </NavLink>
                <NavLink to="/myreviews" className={navLinkClass}>
                  My Reviews
                </NavLink>
                <NavLink to="/watchlist" className={navLinkClass}>
                  WatchList
                </NavLink>
              </>
            )}
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <NavLink to="/support" className={navLinkClass}>
              Support
            </NavLink>
          </nav>

          {/* Right Actions: Theme Toggle & User Auth */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle text-base-content hover:bg-base-200 transition-colors"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FaSun className="text-xl text-amber-400 animate-spin-slow" />
              ) : (
                <FaMoon className="text-lg text-slate-700" />
              )}
            </button>

            {/* Auth Section */}
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar ring-2 ring-primary/40 hover:ring-primary transition-all"
                >
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.photoURL ||
                        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80"
                      }
                      alt={user.displayName || "User"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[100] p-3 shadow-2xl menu menu-sm dropdown-content bg-base-100 border border-base-content/10 rounded-2xl w-60 space-y-2"
                >
                  <li className="px-3 py-2 bg-base-200/60 rounded-xl">
                    <div className="flex flex-col p-0 hover:bg-transparent">
                      <span className="font-bold text-base-content">
                        {user.displayName || "Gamer"}
                      </span>
                      <span className="text-xs text-base-content/60 truncate max-w-[190px]">
                        {user.email}
                      </span>
                    </div>
                  </li>
                  <li>
                    <Link to="/myreviews" className="flex items-center gap-2 py-2">
                      <MdRateReview className="text-primary text-lg" />
                      <span>My Reviews</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/watchlist" className="flex items-center gap-2 py-2">
                      <MdBookmarkBorder className="text-secondary text-lg" />
                      <span>Game WatchList</span>
                    </Link>
                  </li>
                  <div className="divider my-0"></div>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="text-error hover:bg-error/10 flex items-center gap-2 py-2 font-medium"
                    >
                      <CiLogout className="text-lg font-bold" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="btn btn-ghost btn-sm text-base-content font-semibold hover:text-primary"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary btn-sm text-white font-semibold shadow-md hover:shadow-glow-primary transition-all"
                >
                  Join Free
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
