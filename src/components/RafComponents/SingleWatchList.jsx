import React from "react";
import { FaStar, FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleWatchList = ({ wList, index }) => {
  // Handle existing or newly saved watch records safely
  const imageSrc =
    wList.photo && wList.photo.startsWith("http")
      ? wList.photo
      : wList.name && wList.name.startsWith("http")
      ? wList.name
      : "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=80";

  const gameTitle =
    wList.title || (wList.rating && isNaN(wList.rating) ? wList.rating : wList.name || "Featured Game");

  const ratingVal =
    !isNaN(parseFloat(wList.rating))
      ? wList.rating
      : !isNaN(parseFloat(wList.photo))
      ? wList.photo
      : "9.0";

  const genre = wList.genres || "Action";
  const releaseDate = wList.date || "2024";

  return (
    <tr className="hover:bg-base-200/50 transition-colors border-b border-base-content/10">
      <td className="font-bold text-base-content/50 text-xs">
        {index + 1}
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14 bg-base-300">
              <img
                src={imageSrc}
                alt={gameTitle}
                className="object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-base text-base-content line-clamp-1">
              {gameTitle}
            </div>
            <div className="text-xs text-base-content/60 flex items-center gap-1.5 mt-0.5">
              <span>{releaseDate}</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-primary badge-outline text-xs font-semibold">
          {genre}
        </span>
      </td>
      <td>
        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-extrabold text-xs">
          <FaStar className="text-amber-400 text-xs" />
          <span>{ratingVal}/10</span>
        </div>
      </td>
      <td className="text-right">
        {wList.reviewId ? (
          <Link
            to={`/reviewDetails/${wList.reviewId}`}
            className="btn btn-ghost btn-xs text-primary font-bold hover:bg-primary/10"
          >
            Details →
          </Link>
        ) : (
          <Link
            to="/allReview"
            className="btn btn-ghost btn-xs text-primary font-bold hover:bg-primary/10"
          >
            Explore
          </Link>
        )}
      </td>
    </tr>
  );
};

export default SingleWatchList;
