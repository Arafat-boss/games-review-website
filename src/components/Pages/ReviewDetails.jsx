import React, { useContext } from "react";
import { MdHexagon } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ReviewDetails = () => {
  const details = useLoaderData();
  const { name, photo, rating, title, description, date, genres } = details;
  const { user } = useContext(AuthContext);
  const { email } = user;
  const handleWatchList = (
    email,
    name,
    photo,
    rating,
    title,
    description,
    date,
    genres
  ) => {
    const watchData = {
      email,
      name,
      photo,
      rating,
      title,
      description,
      date,
      genres,
    };
    // console.log(watchData);
    fetch("http://localhost:5000/watch", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(watchData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Successfully added your review to watch list",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-6 bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        {/* Left Section: Image and Rating */}
        <div className="relative w-full lg:w-3/5">
          <img
            src={photo}
            alt={title}
            className="rounded-lg w-full h-96 object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full flex items-center">
            <MdHexagon className="text-white text-2xl mr-2" />
            <span className="text-2xl font-bold">{details.rating}</span>
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="flex flex-col space-y-10 w-full lg:w-2/5">
          {/* Title */}
          <h1 className="text-3xl font-bold text-red-600 flex items-center gap-2">
            <MdHexagon className="text-red-500 text-xl" />
            Reviews
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-lg">{description}</p>

          {/* Info */}
          <div className="mt-4 text-sm text-gray-500">
            <span className="block">Genre: {genres}</span>
            <span className="block">Published: {date}</span>
            <span className="block">Author: {name}</span>
            <span className="block">Email: {email}</span>
          </div>

          {/* Button */}
          <div className="">
            <button
              onClick={() =>
                handleWatchList(
                  email,
                  photo,
                  rating,
                  title,
                  description,
                  date,
                  genres
                )
              }
              className="mt-6 text-white btn flex bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full"
            >
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
