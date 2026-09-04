import React from "react";
import { FaEdit, FaTrashAlt, FaStar, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyUserReview = ({ findUser, deleteUser, setDeleteUser }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this review?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-review-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your game review has been removed.",
                icon: "success",
                confirmButtonColor: "#8b5cf6",
              });
              const remainingReviews = deleteUser.filter(
                (item) => item._id !== id
              );
              setDeleteUser(remainingReviews);
            }
          })
          .catch((err) => {
            console.error("Failed to delete review:", err);
            Swal.fire({
              title: "Error!",
              text: "Could not delete the review. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left Side: Thumbnail & Content */}
        <div className="flex items-start gap-4 flex-1">
          {findUser.photo && (
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-base-300 shrink-0">
              <img
                src={findUser.photo}
                alt={findUser.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          )}

          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-primary badge-outline text-[11px] font-bold">
                {findUser.genres || "Action"}
              </span>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-md">
                <FaStar className="text-amber-400 text-xs" />
                <span>{findUser.rating}/10</span>
              </div>
            </div>

            <h3 className="font-display font-bold text-xl text-base-content line-clamp-1">
              {findUser.title}
            </h3>

            <p className="text-xs sm:text-sm text-base-content/70 line-clamp-2 leading-relaxed">
              {findUser.description}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-base-content/50 pt-1">
              <FaCalendarAlt className="text-primary text-[10px]" />
              <span>Published on {findUser.date || "2024"}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex sm:flex-col items-center gap-2.5 self-end sm:self-center w-full sm:w-auto justify-end">
          <Link
            to={`/updateReview/${findUser._id}`}
            className="btn btn-outline btn-sm rounded-xl flex items-center gap-1.5 text-xs font-bold border-base-content/20 hover:bg-primary hover:border-primary hover:text-white flex-1 sm:flex-initial"
          >
            <FaEdit className="text-primary" />
            <span>Edit</span>
          </Link>
          <button
            onClick={() => handleDelete(findUser._id)}
            className="btn btn-outline btn-error btn-sm rounded-xl flex items-center gap-1.5 text-xs font-bold flex-1 sm:flex-initial"
          >
            <FaTrashAlt />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyUserReview;
