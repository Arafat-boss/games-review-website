import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaDiscord, FaTwitter, FaYoutube, FaTwitch, FaEnvelope, FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      Swal.fire({
        title: "Subscribed! 🎮",
        text: "You're now on the VIP list for weekly curated game reviews!",
        icon: "success",
        confirmButtonColor: "#8b5cf6",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-base-100 border-t border-base-content/10 text-base-content/80 mt-20 transition-colors duration-200">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio (2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent p-0.5 shadow-lg">
                <div className="w-full h-full bg-base-100 rounded-[10px] flex items-center justify-center">
                  <FaGamepad className="text-xl text-primary" />
                </div>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-base-content">
                GAME<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">REVIEWS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-base-content/70 max-w-sm">
              Your ultimate hub for authentic game reviews, deep breakdowns, community ratings, and curated recommendations across PC, PlayStation, Xbox, and Nintendo.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-base-200 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm text-base-content"
                title="Discord Community"
              >
                <FaDiscord size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-base-200 hover:bg-secondary hover:text-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm text-base-content"
                title="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-base-200 hover:bg-error hover:text-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm text-base-content"
                title="YouTube"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://twitch.tv"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-base-200 hover:bg-purple-600 hover:text-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-sm text-base-content"
                title="Twitch"
              >
                <FaTwitch size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-base-content tracking-wide uppercase">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/allReview" className="hover:text-primary transition-colors">All Reviews</Link>
              </li>
              <li>
                <Link to="/addreview" className="hover:text-primary transition-colors">Post a Review</Link>
              </li>
              <li>
                <Link to="/watchlist" className="hover:text-primary transition-colors">My WatchList</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Genres */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-base-content tracking-wide uppercase">
              Popular Genres
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/allReview" className="hover:text-primary transition-colors">Action & Adventure</Link>
              </li>
              <li>
                <Link to="/allReview" className="hover:text-primary transition-colors">RPG & Souls-like</Link>
              </li>
              <li>
                <Link to="/allReview" className="hover:text-primary transition-colors">Strategy & Sci-Fi</Link>
              </li>
              <li>
                <Link to="/allReview" className="hover:text-primary transition-colors">Survival Horror</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-base-content tracking-wide uppercase">
              Gaming Digest
            </h3>
            <p className="text-xs text-base-content/70">
              Get the freshest reviews and curated game deals delivered weekly.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="gamer@domain.com"
                  required
                  className="w-full pl-9 pr-3 py-2 text-sm bg-base-200 border border-base-content/15 rounded-xl focus:outline-none focus:border-primary text-base-content"
                />
                <FaEnvelope className="absolute left-3 top-3 text-base-content/40 text-xs" />
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary btn-sm text-white font-semibold rounded-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-content/10 bg-base-200/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/60">
          <p>© {new Date().getFullYear()} Game Reviews Portal. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with passion for gamers worldwide</span>
            <FaHeart className="text-accent inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
