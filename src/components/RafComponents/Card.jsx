// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Card = ({ card }) => {
//   return (
//     <div>
//       <div className="card w-full bg-[#ffd8dc] text-[#25000d] shadow-xl border border-gray-200">
//         <figure>
//           <img
//             src={card.photo}
//             alt={card.title}
//             className="h-52 w-full object-cover"
//           />
//         </figure>
//         <div className="card-body">
//           <div className="flex justify-between items-center">
//             <h2 className="card-title text-lg font-bold">{card.title}</h2>
//             <div className="flex items-center text-yellow-500">
//               <FaStar className="mr-1" />
//               <span className="font-semibold">{card.rating}/10</span>
//             </div>
//           </div>
//           <p className=" text-sm">{card.description}</p>
//           <div className="flex justify-between items-center">
//             <div className="">
//               <span className="badge bg-[#fe694b]">{card.genres}</span>
//             </div>
//             <div className="text-right  text-sm ">
//               Published: {card.date}
//             </div>
//           </div>
//         </div>
//         <div className="card-actions -mt-5 w-full mb-6 flex justify-center">
//           <Link to={`/reviewDetails/${card._id}`}>
//             <button className="btn w-full bg-gradient-to-r from-red-400 to-[#fd0259] hover:bg-rose-300">
//               Explore Details
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const truncateDescription = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };

  return (
    <div>
      <div className="card w-full bg-[#ffd8dc] text-[#25000d] shadow-xl border border-gray-200">
        <figure>
          <img
            src={card.photo}
            alt={card.title}
            className="h-52 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-lg font-bold">{card.title}</h2>
            <div className="flex items-center text-yellow-500">
              <FaStar className="mr-1" />
              <span className="font-semibold">{card.rating}/10</span>
            </div>
          </div>
          <p className="text-sm">{truncateDescription(card.description, 20)}</p>
          <div className="flex justify-between items-center">
            <div className="">
              <span className="badge bg-[#fe694b]">{card.genres}</span>
            </div>
            <div className="text-right text-sm">Published: {card.date}</div>
          </div>
        </div>
        <div className="card-actions -mt-5 w-full mb-6 flex justify-center">
          <Link to={`/reviewDetails/${card._id}`}>
            <button className="btn w-full bg-gradient-to-r from-red-400 to-[#fd0259] hover:bg-rose-300">
              Explore Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
