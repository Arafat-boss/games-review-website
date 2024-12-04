import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border border-gray-200">
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
              <span className="font-semibold">{card.rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">{card.description}</p>
          <div className="mt-3">
            <span className="badge badge-primary">{card.genres}</span>
          </div>
          <div className="text-right text-gray-400 text-sm mt-1">
            Published: {card.date}
          </div>
        </div>
        <div className="card-actions flex justify-center mb-6">
          <Link to={`/reviewDetails/${card._id}`}><button className="btn border-2 btn-primary">Review Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
