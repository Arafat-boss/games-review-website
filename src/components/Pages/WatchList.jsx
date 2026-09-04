import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleWatchList from "../RafComponents/SingleWatchList";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { FaBookmark, FaGamepad } from "react-icons/fa";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const allWatchListData = useLoaderData();
  const rawList = Array.isArray(allWatchListData) ? allWatchListData : [];

  const findWatchUsers = rawList.filter(
    (item) => item.email === user?.email
  );

  return (
    <div className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>My Game WatchList | Game Reviews</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <FaBookmark />
            Saved Games
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
            Personal WatchList
          </h1>
          <p className="text-sm sm:text-base text-base-content/70 mt-1">
            Titles you've saved to play, monitor, or review in the future.
          </p>
        </div>

        <Link
          to="/allReview"
          className="btn btn-outline btn-sm border-base-content/20 hover:bg-primary hover:border-primary hover:text-white rounded-xl self-start sm:self-auto"
        >
          Add More Games
        </Link>
      </div>

      {/* Table Container */}
      {findWatchUsers.length > 0 ? (
        <div className="bg-base-100 border border-base-content/10 rounded-3xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* Head */}
              <thead className="bg-base-200/70 text-base-content/70 text-xs uppercase tracking-wider border-b border-base-content/10">
                <tr>
                  <th className="w-12">#</th>
                  <th>Game</th>
                  <th>Genre</th>
                  <th>Score</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {findWatchUsers.map((wList, index) => (
                  <SingleWatchList
                    key={wList._id}
                    wList={wList}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-base-100 rounded-3xl border border-base-content/10 p-8 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-base-200 border border-base-content/10 flex items-center justify-center mx-auto mb-4 text-2xl text-primary">
            <FaBookmark />
          </div>
          <h3 className="font-display font-bold text-2xl text-base-content">
            Your WatchList is Empty
          </h3>
          <p className="text-sm text-base-content/60 max-w-md mx-auto mt-2 mb-6">
            You haven't saved any games to your watchlist yet. Browse through our review library and click "Add to WatchList".
          </p>
          <Link to="/allReview" className="btn btn-primary text-white font-bold rounded-xl shadow-lg">
            Explore Reviews
          </Link>
        </div>
      )}
    </div>
  );
};

export default WatchList;
