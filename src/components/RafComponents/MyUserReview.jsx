import React from "react";
import { FaStar } from "react-icons/fa";

const MyUserReview = ({findUser}) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl p-4">
        {/* Image Section */}
        <figure className="w-72">
          <img
            src={findUser.photo}
            alt={findUser.title}
            className="rounded-lg object-cover h-full"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body w-full lg:w-2/3">
          {/* Title */}
          <h2 className="card-title text-3xl font-bold">{findUser.title}</h2>

          {/* Description */}
          <p className="text-gray-600">{findUser.description}</p>

          {/* Rating */}
          <div className="flex items-center mt-4">
            <div className="flex items-center bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="font-bold">{findUser.rating}/10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyUserReview;
