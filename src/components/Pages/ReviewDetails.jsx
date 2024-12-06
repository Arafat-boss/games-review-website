import React from "react";
import { MdHexagon } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const details = useLoaderData();
  console.log(details);

  const handleWatchList =(watchList)=>{
    console.log(watchList);
    const {email, name, photo, rating, title, description, date, genres} = watchList;
    const watchData = {email, name, photo, rating, title, description, date, genres}
    fetch('http://localhost:5000/watch',{
      method:"POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(watchData),
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Successfully added your review to watch list',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }



  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        {/* Left Section: Image and Rating */}
        <div className="relative w-full lg:w-3/5">
          <img
            src={details.photo}
            alt={details.title}
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
          <p className="mt-4 text-gray-600 text-lg">{details.description}</p>

          {/* Info */}
          <div className="mt-4 text-sm text-gray-500">
            <span className="block">Genre: {details.genres}</span>
            <span className="block">Published: {details.date}</span>
            <span className="block">Author: {details.name}</span>
            <span className="block">Email: {details.email}</span>
          </div>

          {/* Button */}
         <div className="">
         <button onClick={()=>handleWatchList(details)} className="mt-6 text-white btn flex bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full">Add to WatchList</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
