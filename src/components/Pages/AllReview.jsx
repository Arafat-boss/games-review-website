import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../RafComponents/Card";
import Lottie from "lottie-react";
import animationData from "../../animation/animation.json";
import { Helmet } from "react-helmet";
import { FaSearch, FaFilter, FaSortAmountDown, FaGamepad, FaRedo } from "react-icons/fa";

const genresList = [
  "All Genres",
  "Action",
  "RPG",
  "Adventure",
  "Shooter",
  "Strategy",
  "Sports",
  "Horror",
];

const AllReview = () => {
  const allReviewData = useLoaderData();
  const rawReviews = Array.isArray(allReviewData) ? allReviewData : [];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [sortBy, setSortBy] = useState("rating-desc"); // rating-desc, rating-asc, date-desc, date-asc

  // Memoized filter and sort
  const filteredAndSortedReviews = useMemo(() => {
    let result = [...rawReviews];

    // 1. Search Filter (by title)
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter((item) =>
        item.title?.toLowerCase().includes(term)
      );
    }

    // 2. Genre Filter
    if (selectedGenre !== "All Genres") {
      result = result.filter(
        (item) =>
          item.genres?.toLowerCase() === selectedGenre.toLowerCase()
      );
    }

    // 3. Sorting
    result.sort((a, b) => {
      const ratingA = parseFloat(a.rating) || 0;
      const ratingB = parseFloat(b.rating) || 0;
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();

      switch (sortBy) {
        case "rating-desc":
          return ratingB - ratingA;
        case "rating-asc":
          return ratingA - ratingB;
        case "date-desc":
          return dateB - dateA;
        case "date-asc":
          return dateA - dateB;
        default:
          return 0;
      }
    });

    return result;
  }, [rawReviews, searchTerm, selectedGenre, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedGenre("All Genres");
    setSortBy("rating-desc");
  };

  return (
    <div className="py-10">
      <Helmet>
        <title>All Game Reviews | Complete Critique Library</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner & Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Lottie
            animationData={animationData}
            loop
            className="w-48 h-28 mx-auto"
          />
          <h1 className="font-display font-black text-3xl sm:text-5xl text-base-content tracking-tight">
            Discover Every Game Review
          </h1>
          <p className="text-sm sm:text-base text-base-content/70 mt-2">
            Explore community critiques, filter by your favorite genre, or search any title in our database.
          </p>
        </div>

        {/* Filter, Search & Controls Bar */}
        <div className="bg-base-100 border border-base-content/10 rounded-2xl p-4 sm:p-6 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-3.5 text-base-content/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search games by title (e.g. Cyberpunk, Elden Ring)..."
                className="w-full pl-11 pr-4 py-2.5 bg-base-200 border border-base-content/15 rounded-xl text-sm focus:outline-none focus:border-primary text-base-content"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-2.5 text-xs text-base-content/50 hover:text-base-content px-2 py-1 bg-base-300 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-base-content/70 uppercase whitespace-nowrap">
                <FaSortAmountDown className="text-primary" />
                <span>Sort By:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-bordered select-sm bg-base-200 rounded-xl text-xs font-semibold focus:border-primary text-base-content"
              >
                <option value="rating-desc">Rating: Highest First</option>
                <option value="rating-asc">Rating: Lowest First</option>
                <option value="date-desc">Release: Newest First</option>
                <option value="date-asc">Release: Oldest First</option>
              </select>

              {(searchTerm || selectedGenre !== "All Genres") && (
                <button
                  onClick={handleResetFilters}
                  className="btn btn-ghost btn-sm text-xs flex items-center gap-1 text-base-content/70 hover:text-primary"
                  title="Reset all filters"
                >
                  <FaRedo className="text-xs" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Genre Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
            <span className="text-xs font-bold text-base-content/60 uppercase tracking-wider mr-1 flex items-center gap-1">
              <FaFilter className="text-xs text-primary" /> Genres:
            </span>
            {genresList.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedGenre === genre
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-base-200 hover:bg-base-300 text-base-content/80 border border-base-content/10"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-base-content/70 font-semibold px-1">
          <span>
            Showing{" "}
            <strong className="text-primary">
              {filteredAndSortedReviews.length}
            </strong>{" "}
            of {rawReviews.length} Reviews
          </span>
          {selectedGenre !== "All Genres" && (
            <span className="badge badge-primary badge-outline text-[11px]">
              Filtered by: {selectedGenre}
            </span>
          )}
        </div>

        {/* Cards Grid */}
        {filteredAndSortedReviews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedReviews.map((card) => (
              <Card key={card._id} card={card} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-base-100 rounded-3xl border border-base-content/10 p-8">
            <div className="w-16 h-16 rounded-2xl bg-base-200 border border-base-content/10 flex items-center justify-center mx-auto mb-4 text-2xl text-primary">
              <FaGamepad />
            </div>
            <h3 className="font-display font-bold text-2xl text-base-content">
              No matching game reviews
            </h3>
            <p className="text-sm text-base-content/60 max-w-md mx-auto mt-2 mb-6">
              We couldn't find any reviews matching "{searchTerm}" in the{" "}
              {selectedGenre} category.
            </p>
            <button
              onClick={handleResetFilters}
              className="btn btn-primary btn-sm text-white font-bold rounded-xl"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReview;
