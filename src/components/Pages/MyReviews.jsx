import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyUserReview from "../RafComponents/MyUserReview";
import { Helmet } from "react-helmet";
import { FaUserEdit, FaPlus, FaGamepad } from "react-icons/fa";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const myUser = useLoaderData();
  const allReviews = Array.isArray(myUser) ? myUser : [];

  const findMyUsers = allReviews.filter(
    (item) => item.email === user?.email
  );
  const [deleteUser, setDeleteUser] = useState(findMyUsers);

  return (
    <div className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>My Reviews | Game Reviews</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <FaUserEdit />
            Author Dashboard
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
            My Published Reviews
          </h1>
          <p className="text-sm sm:text-base text-base-content/70 mt-1">
            Manage, edit, or update your game assessments and community ratings.
          </p>
        </div>

        <Link
          to="/addreview"
          className="btn btn-primary btn-sm text-white font-bold rounded-xl shadow-md flex items-center gap-1.5 self-start sm:self-auto"
        >
          <FaPlus />
          <span>Write New Review</span>
        </Link>
      </div>

      {/* Review Cards List */}
      {deleteUser.length > 0 ? (
        <div className="space-y-4">
          {deleteUser.map((findUser) => (
            <MyUserReview
              key={findUser._id}
              findUser={findUser}
              deleteUser={deleteUser}
              setDeleteUser={setDeleteUser}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-base-100 rounded-3xl border border-base-content/10 p-8 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-base-200 border border-base-content/10 flex items-center justify-center mx-auto mb-4 text-2xl text-primary">
            <FaGamepad />
          </div>
          <h3 className="font-display font-bold text-2xl text-base-content">
            No reviews published yet
          </h3>
          <p className="text-sm text-base-content/60 max-w-md mx-auto mt-2 mb-6">
            Share your voice with thousands of fellow gamers. Rate your favorite games and provide your verdict!
          </p>
          <Link
            to="/addreview"
            className="btn btn-primary text-white font-bold rounded-xl shadow-lg"
          >
            Create Your First Review
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
