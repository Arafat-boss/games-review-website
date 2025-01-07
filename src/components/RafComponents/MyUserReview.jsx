import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyUserReview = ({ findUser, deleteUser, setDeleteUser }) => {
  // const [remaining, setRemaining] = useState(findUser)

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-review-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //update the loaded coffee state
              const remainingCards = deleteUser.filter(
                (card) => card._id !== id
              );
              setDeleteUser(remainingCards);
            }
          });
      }
    });
  };


  return (
    <div className="w-11/12 mx-auto">
      <div className="lg:flex mb:flex mb-3 justify-between bg-base-100 border rounded-lg p-4">
        {/* Content Section */}
        <div className="">
          {/* Title */}
          <h2 className="card-title text-3xl font-bold">{findUser.title}</h2>

          {/* Description */}
          <p className="text-gray-600">{findUser.description}</p>
          <span className="text-sm text-gray-400">
            published date of {findUser.date}
          </span>
          {/* Rating */}
          <div className="flex items-center mt-4">
            <div className="flex items-center bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="font-bold">{findUser.rating}/10</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
        <Link to={`/updateReview/${findUser._id}`}>
            <button className="btn mb-7">
              <CiEdit size={30} className="text-blue-400"></CiEdit>Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(findUser._id)}
            className="btn ml-2"
          >
            <TiDelete size={30} className="text-red-500"></TiDelete> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyUserReview;
