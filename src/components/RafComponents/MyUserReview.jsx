import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
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
        fetch(`http://localhost:5000/reviews/${id}`, {
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
              const remainingCards = deleteUser.filter(card =>card._id !==id);
              setDeleteUser(remainingCards)
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="card mb-3 lg:card-side bg-base-100 shadow-xl p-4">
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
        <div className="flex flex-col">
          <button className="btn mb-7">
            <CiEdit size={30} className="text-blue-400"></CiEdit>Update
          </button>
          <button onClick={() => handleDelete(findUser._id)} className="btn">
            <TiDelete size={30} className="text-red-500"></TiDelete> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyUserReview;
