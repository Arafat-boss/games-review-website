// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Card from "../RafComponents/Card";
// import Lottie from "lottie-react";
// import animationData from "../../animation/animation.json";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { Helmet } from "react-helmet";

// const AllReview = () => {
//   const allReviewData = useLoaderData(); // Original data
//   const [sortedData, setSortedData] = useState(allReviewData);

//   const [sortOrder, setSortOrder] = useState("desc"); // 'asc' or 'desc'

//   // Sorting Handler
//   const handleSort = (criterion) => {
//     const sorted = [...allReviewData].sort((a, b) => {
//       if (criterion === "rating") {
//         return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
//       } else if (criterion === "date") {
//         return sortOrder === "asc"
//           ? new Date(a.date) - new Date(b.date)
//           : new Date(b.date) - new Date(a.date);
//       }
//       return 0;
//     });
//     setSortedData(sorted);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>All Reviews</title>
//       </Helmet>
//       <div className="text-center my-1 text-[#25000d]">
//         <Lottie
//           animationData={animationData}
//           loop
//           className="w-60 h-32 mx-auto"
//         />
//         <h2 className="text-3xl font-bold">
//           Discover Every Game Review You Need!
//         </h2>
//       </div>

//       {/* Dropdown Section */}
//       <div className="w-11/12 mx-auto flex justify-between items-center gap-4 border-2 rounded-lg mt-5 text-[#25000d]">
//         <h3 className="font-semibold pl-10">You can sort the review</h3>
//         <div>
//           <details className="dropdown mr-2 z-50">
//             <summary className="btn btn-outline m-1">
//               Filter
//               <IoMdArrowDropdown />
//             </summary>
//             <ul className="menu dropdown-content bg-base-100 space-y-2 rounded-box shadow w-52">
//               <li>
//                 <button >Action</button>
//               </li>
//               <li>
//                 <button >RPG</button>
//               </li>
//               <li>
//                 <button >Adventure</button>
//               </li>
//             </ul>
//           </details>
//           <details className="dropdown mr-2 z-50">
//             <summary className="btn btn-outline m-1">
//               Sort by
//               <IoMdArrowDropdown />
//             </summary>
//             <ul className="menu dropdown-content bg-base-100 space-y-2 rounded-box shadow w-52">
//               <li>
//                 <button onClick={() => handleSort("rating")}>Rating</button>
//               </li>
//               <li>
//                 <button onClick={() => handleSort("date")}>Year</button>
//               </li>
//             </ul>
//           </details>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-10">
//         {sortedData.map((card) => (
//           <Card key={card._id} card={card} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default AllReview;



import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../RafComponents/Card";
import Lottie from "lottie-react";
import animationData from "../../animation/animation.json";
import { IoMdArrowDropdown } from "react-icons/io";
import { Helmet } from "react-helmet";

const AllReview = () => {
  const allReviewData = useLoaderData(); 
  const [filteredData, setFilteredData] = useState(allReviewData); // Filtered data state
  const [sortOrder, setSortOrder] = useState("desc");

  // Genre Filter Handler
  const handleFilter = (genre) => {
    console.log(genre);
    const filtered = genre
      ? allReviewData.filter((review) => review.genres === genre)
      : allReviewData; // Reset if no genre is selected
    setFilteredData(filtered);
  };

  // Sorting Handler
  const handleSort = (criterion) => {
    const sorted = [...filteredData].sort((a, b) => {
      if (criterion === "rating") {
        return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
      } else if (criterion === "date") {
        return sortOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      return 0;
    });
    setFilteredData(sorted);
  };

  return (
    <>
      <Helmet>
        <title>All Reviews</title>
      </Helmet>
      <div className="text-center my-1 text-[#25000d]">
        <Lottie
          animationData={animationData}
          loop
          className="w-60 h-32 mx-auto"
        />
        <h2 className="text-3xl font-bold">
          Discover Every Game Review You Need!
        </h2>
      </div>

      {/* Dropdown Section */}
      <div className="w-11/12 mx-auto flex justify-between items-center gap-4 border-2 rounded-lg mt-5 text-[#25000d]">
        <h3 className="font-semibold pl-10">You can sort the review</h3>
        <div>
          {/* Genre Filter */}
          <details className="dropdown mr-2 z-50">
            <summary className="btn btn-outline m-1">
              Filter by Genre
              <IoMdArrowDropdown />
            </summary>
            <ul className="menu dropdown-content bg-base-100 space-y-2 rounded-box shadow w-52">
              <li>
                <button onClick={() => handleFilter("")}>All Genres</button>
              </li>
              <li>
                <button onClick={() => handleFilter("Action")}>Action</button>
              </li>
              <li>
                <button onClick={() => handleFilter("RPG")}>RPG</button>
              </li>
              <li>
                <button onClick={() => handleFilter("Adventure")}>
                  Adventure
                </button>
              </li>
            </ul>
          </details>

          {/* Sorting Options */}
          <details className="dropdown mr-2 z-50">
            <summary className="btn btn-outline m-1">
              Sort by
              <IoMdArrowDropdown />
            </summary>
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
      </div>

      {/* Cards Section */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-10">
        {filteredData.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </>
  );
};

export default AllReview;

