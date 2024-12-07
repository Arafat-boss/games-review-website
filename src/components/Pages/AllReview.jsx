
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../RafComponents/Card";
import Lottie from "lottie-react";
import animationData from "../../animation/animation.json";
import { IoMdArrowDropdown } from "react-icons/io";

const AllReview = () => {
  const allReviewData = useLoaderData(); // Original data
  const [sortedData, setSortedData] = useState(allReviewData); 
  
  const [sortOrder, setSortOrder] = useState("desc"); // 'asc' or 'desc'

  // Sorting Handler
  const handleSort = (criterion) => {
    const sorted = [...allReviewData].sort((a, b) => {
      if (criterion === "rating") {
        return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
      } else if (criterion === "date") {
        return sortOrder === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
    setSortedData(sorted);
  };

  return (
    <>
      <div className="text-center my-1">
        <Lottie animationData={animationData} loop className="w-60 h-32 mx-auto" />
        <h2 className="text-3xl font-bold text-yellow-500">
          Discover Every Game Review You Need!
        </h2>
      </div>

      {/* Dropdown Section */}
      <div className="w-11/12 mx-auto flex justify-center items-center gap-4">
      <h3 className="text-fuchsia-600 font-semibold">You can sort the review</h3>
        <details className="dropdown z-50">
          <summary className="btn m-1">Sort by<IoMdArrowDropdown /></summary>
          <ul className="menu dropdown-content bg-base-100 space-y-2 rounded-box shadow w-52">
            <li>
              <button onClick={() => handleSort("rating")}>Rating</button>
            </li>
            <li>
              <button onClick={() => handleSort("date")}>Year</button>
            </li>
          </ul>
        </details>
      </div>

      {/* Cards Section */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-10">
        {sortedData.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </>
  );
};

export default AllReview;
