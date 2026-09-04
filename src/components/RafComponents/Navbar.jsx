import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaGamepad, FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { MdRateReview, MdBookmarkBorder } from "react-icons/md";
import logoImg from "../../assets/9618073-removebg-preview.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const location = useLocation();

  // Mobile menu open/close state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Mobile Menu Button & Dropdown */}
            <div className="relative lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="btn btn-ghost btn-circle btn-sm sm:btn-md text-base-content"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                title={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
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
                )}
              </button>

              {/* Mobile Menu Backdrop & Drawer */}
              {isMobileMenuOpen && (
                <>
                  {/* Backdrop: Clicking outside immediately closes the menu */}
                  <div
                    className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-[2px] lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                  />

                  {/* Menu Dropdown Container */}
                  <div className="absolute left-0 top-full mt-3 w-72 max-w-[85vw] bg-base-100 border border-base-content/15 rounded-2xl z-[100] p-3 shadow-2xl space-y-1 transition-all">
                    {/* Header with Title and Close 'X' Button */}
                    <div className="flex items-center justify-between px-2 py-1.5 mb-1 border-b border-base-content/10">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-base-content/70">
                        <FaGamepad className="text-primary" />
                        <span>Menu</span>
                      </div>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="btn btn-ghost btn-xs btn-circle text-base-content/70 hover:text-error hover:bg-error/10 transition-colors"
                        title="Close menu"
                        aria-label="Close menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <ul className="menu menu-md p-0 space-y-1">
                      <li>
                        <NavLink
                          to="/"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={navLinkClass}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/allReview"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={navLinkClass}
                        >
                          All Reviews
                        </NavLink>
                      </li>
                      {user && (
                        <>
                          <li>
                            <NavLink
                              to="/addreview"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={navLinkClass}
                            >
                              Add Review
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/myreviews"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={navLinkClass}
                            >
                              My Reviews
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/watchlist"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={navLinkClass}
                            >
                              Game WatchList
                            </NavLink>
                          </li>
                        </>
                      )}
                      <div className="divider my-1"></div>
                      <li>
                        <NavLink
                          to="/contact"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={navLinkClass}
                        >
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/support"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={navLinkClass}
                        >
                          Support Hub
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2.5 group">
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-tr from-primary to-accent p-0.5 shadow-lg group-hover:scale-105 transition-transform shrink-0">
                <div className="w-full h-full bg-base-100 rounded-[8px] sm:rounded-[10px] flex items-center justify-center">
                  <FaGamepad className="text-xl sm:text-2xl text-primary group-hover:text-accent transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-2xl tracking-tight leading-none text-base-content">
                  GAME<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">REVIEWS</span>
                </span>
                <span className="hidden sm:block text-[10px] uppercase font-semibold tracking-widest text-base-content/60">
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
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle btn-sm sm:btn-md text-base-content hover:bg-base-200 transition-colors"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FaSun className="text-lg sm:text-xl text-amber-400 animate-spin-slow" />
              ) : (
                <FaMoon className="text-base sm:text-lg text-slate-700" />
              )}
            </button>

            {/* Auth Section */}
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle btn-sm sm:btn-md avatar ring-2 ring-primary/40 hover:ring-primary transition-all"
                >
                  <div className="w-8 sm:w-10 rounded-full">
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
              <div className="flex items-center gap-1 sm:gap-2">
                <Link
                  to="/login"
                  className="btn btn-ghost btn-xs sm:btn-sm text-base-content font-semibold hover:text-primary px-2 sm:px-3"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary btn-xs sm:btn-sm text-white font-semibold shadow-md hover:shadow-glow-primary transition-all px-2.5 sm:px-3"
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
