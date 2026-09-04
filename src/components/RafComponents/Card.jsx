import React from "react";
import { FaStar, FaGamepad, FaCalendarAlt, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ card }) => {
  const ratingNum = parseFloat(card.rating) || 0;

  // Rating badge color coding for authentic gamer vibe
  const getRatingBadge = (rating) => {
    if (rating >= 9) {
      return {
        bg: "bg-emerald-500 text-white border-emerald-400/60",
        text: "Masterpiece",
      };
    } else if (rating >= 7.5) {
      return {
        bg: "bg-cyan-600 text-white border-cyan-400/60",
        text: "Great",
      };
    } else if (rating >= 6) {
      return {
        bg: "bg-amber-500 text-white border-amber-400/60",
        text: "Good",
      };
    }
    return {
      bg: "bg-rose-500 text-white border-rose-400/60",
      text: "Mixed",
    };
  };

  const ratingInfo = getRatingBadge(ratingNum);

  return (
    <div className="group relative bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Section with floating dark badges */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={
            card.photo ||
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80"
          }
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80";
          }}
        />

        {/* Dark Vignette Overlay - Never washes out to white */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40"></div>

        {/* Floating Rating Pill */}
        <div className="absolute top-3 right-3 shadow-lg">
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl border backdrop-blur-md ${ratingInfo.bg}`}
          >
            <FaStar className="text-amber-300 text-xs" />
            <span className="font-extrabold text-sm">{card.rating}</span>
            <span className="text-[10px] opacity-90">/10</span>
          </div>
        </div>

        {/* Genre Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-lg bg-black/65 border border-white/20 text-white text-xs font-bold tracking-wide backdrop-blur-md">
            {card.genres || "Action"}
          </span>
        </div>

        {/* Release Date overlay badge with dark backdrop for 100% legibility */}
        <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold">
          <FaCalendarAlt className="text-primary text-[10px]" />
          <span>{card.date || "2024"}</span>
        </div>
      </div>

      {/* Body Content - High contrast in both light and dark mode */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-3 bg-base-100">
        <div>
          <h3 className="font-display font-bold text-xl text-base-content group-hover:text-primary transition-colors line-clamp-1">
            {card.title}
          </h3>

          <p className="text-sm text-base-content/75 line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {card.description}
          </p>
        </div>

        {/* Reviewer signature and Action */}
        <div className="pt-3 border-t border-base-content/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-base-content/70 font-medium">
            <FaUserEdit className="text-primary/80 text-xs" />
            <span className="truncate max-w-[120px]">
              {card.name || "Gamer Critique"}
            </span>
          </div>

          <Link
            to={`/reviewDetails/${card._id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent group-hover:translate-x-1 transition-all"
          >
            <span>Read Review</span>
            <BsArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
