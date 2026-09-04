import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaGamepad, FaHome } from "react-icons/fa";
import errorImg from "../../assets/error.jpg";

const ErrorPages = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content flex items-center justify-center p-6">
      <Helmet>
        <title>404 | Mission Failed - Game Reviews</title>
      </Helmet>

      <div className="max-w-4xl w-full bg-base-100 border border-base-content/10 rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="space-y-4 text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error/10 border border-error/20 text-error text-xs font-black uppercase tracking-widest">
            <span>Critical Error • 404</span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-base-content tracking-tight">
            GAME OVER
          </h1>
          <p className="text-base text-base-content/70 leading-relaxed max-w-md">
            You've ventured beyond the playable zone. The requested level, review, or page does not exist or has been relocated.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <Link
              to="/"
              className="btn btn-primary text-white font-bold rounded-xl shadow-lg hover:shadow-glow-primary transition-all flex items-center gap-2"
            >
              <FaHome />
              <span>Respawn at Home</span>
            </Link>
            <Link
              to="/allReview"
              className="btn btn-outline border-base-content/20 hover:bg-base-200 text-base-content font-bold rounded-xl"
            >
              Browse Reviews
            </Link>
          </div>
        </div>

        {/* Visual Section */}
        <div className="w-64 sm:w-80 shrink-0">
          <img
            src={errorImg}
            alt="404 Error"
            className="w-full h-auto rounded-2xl shadow-md border border-base-content/10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;