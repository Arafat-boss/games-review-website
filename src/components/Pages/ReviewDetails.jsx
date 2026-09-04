import React, { useContext } from "react";
import { useLoaderData, useNavigate, useLocation, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import {
  FaStar,
  FaCalendarAlt,
  FaUserEdit,
  FaGamepad,
  FaBookmark,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const ReviewDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (!details || !details._id) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-base-200 text-base-content">
        <h2 className="text-2xl font-bold">
          Review Not Found
        </h2>
        <Link to="/allReview" className="btn btn-primary mt-4 text-white">
          Back to All Reviews
        </Link>
      </div>
    );
  }

  const {
    _id,
    name,
    photo,
    rating,
    title,
    description,
    date,
    genres,
    email: authorEmail,
  } = details;

  const ratingNum = parseFloat(rating) || 0;

  const getVerdict = (score) => {
    if (score >= 9) return { label: "Masterpiece", color: "text-emerald-400" };
    if (score >= 8) return { label: "Amazing", color: "text-cyan-400" };
    if (score >= 7) return { label: "Great", color: "text-blue-400" };
    if (score >= 6) return { label: "Good", color: "text-amber-400" };
    return { label: "Mediocre", color: "text-rose-400" };
  };

  const verdict = getVerdict(ratingNum);

  const handleAddToWatchList = () => {
    if (!user || !user.email) {
      Swal.fire({
        title: "Sign in Required! 🔒",
        text: "You must be logged in to save games to your personal WatchList.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Log In Now",
        confirmButtonColor: "#8b5cf6",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
      return;
    }

    const watchData = {
      email: user.email,
      name: user.displayName || name || "Gamer",
      title: title,
      photo: photo,
      rating: rating,
      description: description,
      date: date,
      genres: genres,
      reviewId: _id,
    };

    fetch("https://game-review-server.vercel.app/watch", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(watchData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added to WatchList! 🎮",
            text: `"${title}" has been saved to your personal library.`,
            icon: "success",
            confirmButtonColor: "#8b5cf6",
          });
        }
      })
      .catch((err) => {
        console.error("Failed to add to watchlist:", err);
        Swal.fire({
          title: "Oops!",
          text: "Failed to add game to watchlist. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{title ? `${title} Review | Game Reviews` : "Game Review Details"}</title>
      </Helmet>

      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/allReview"
          className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 hover:text-primary transition-colors"
        >
          <FaArrowLeft />
          <span>Back to All Reviews</span>
        </Link>
      </div>

      {/* Main Review Card */}
      <div className="bg-base-100 border border-base-content/10 rounded-3xl overflow-hidden shadow-xl">
        {/* Top Hero Media Container */}
        <div className="relative h-80 sm:h-[440px] w-full overflow-hidden bg-slate-950">
          <img
            src={
              photo ||
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80"
            }
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80";
            }}
          />
          {/* Dark Cinematic Vignette - Never washes out to white */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"></div>

          {/* Floating Category & Date */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg">
              {genres || "Action"}
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
              <FaCalendarAlt className="text-primary text-xs" />
              Released: {date || "2024"}
            </span>
          </div>

          {/* Floating Score Gauge on dark backdrop */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/75 backdrop-blur-md border border-white/25 rounded-2xl p-3 sm:p-4 shadow-2xl text-white">
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase font-bold text-gray-300 tracking-wider">
                Critic Score
              </span>
              <span className={`text-sm font-black uppercase ${verdict.color}`}>
                {verdict.label}
              </span>
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-tr from-primary to-accent text-white font-display font-black text-2xl shadow-lg">
              {rating}
            </div>
          </div>
        </div>

        {/* Article Body Section */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-8 bg-base-100">
          {/* Game Title & Reviewer Bar */}
          <div className="border-b border-base-content/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-base-content tracking-tight">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-base-content/70">
                <span className="flex items-center gap-1.5 font-medium">
                  <FaUserEdit className="text-primary text-sm" />
                  Reviewed by{" "}
                  <strong className="text-base-content font-bold">{name || "Anonymous Gamer"}</strong>
                </span>
                {authorEmail && (
                  <>
                    <span>•</span>
                    <span className="text-base-content/60">{authorEmail}</span>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddToWatchList}
                className="btn btn-primary text-white font-bold rounded-xl shadow-lg hover:shadow-glow-primary transition-all flex items-center gap-2"
              >
                <FaBookmark />
                <span>Add to WatchList</span>
              </button>
            </div>
          </div>

          {/* Review Text */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-base-content">
              Full Review & Evaluation
            </h2>
            <div className="text-base text-base-content/85 leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {description}
            </div>
          </div>

          {/* Quick Specs / Verdict Summary Box */}
          <div className="bg-base-200/70 border border-base-content/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <MdOutlineRateReview className="text-2xl text-primary" />
              <h3 className="font-display font-bold text-xl text-base-content">
                Review Summary & Verdict
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-base-100 p-4 rounded-xl border border-base-content/15 text-center shadow-sm">
                <span className="text-xs text-base-content/60 font-semibold uppercase">Rating</span>
                <p className="font-display font-black text-2xl text-primary mt-1">{rating} / 10</p>
              </div>
              <div className="bg-base-100 p-4 rounded-xl border border-base-content/15 text-center shadow-sm">
                <span className="text-xs text-base-content/60 font-semibold uppercase">Genre</span>
                <p className="font-bold text-sm text-base-content mt-2 truncate">{genres || "Action"}</p>
              </div>
              <div className="bg-base-100 p-4 rounded-xl border border-base-content/15 text-center shadow-sm">
                <span className="text-xs text-base-content/60 font-semibold uppercase">Release</span>
                <p className="font-bold text-sm text-base-content mt-2">{date || "2024"}</p>
              </div>
              <div className="bg-base-100 p-4 rounded-xl border border-base-content/15 text-center shadow-sm">
                <span className="text-xs text-base-content/60 font-semibold uppercase">Status</span>
                <p className="font-bold text-sm mt-2 text-primary">{verdict.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
