import React from "react";
import { FaGamepad, FaStar, FaUsers } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-base-200 py-10 px-4 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">About Us </h1>
        <p className="text-lg text-gray-600 mt-2">
          Welcome to <span className="text-secondary font-semibold">Game Review</span> – your ultimate gaming companion!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="card bg-base-100 shadow-md p-5 text-center">
          <FaGamepad className="text-5xl text-primary mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-secondary mb-2">Modern Design</h2>
          <p className="text-gray-600">
            Crafted with <span className="font-bold">React</span> and styled using <span className="font-bold">Tailwind CSS</span> for a seamless, modern experience.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="card bg-base-100 shadow-md p-5 text-center">
          <FaStar className="text-5xl text-primary mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-secondary mb-2">Top Reviews</h2>
          <p className="text-gray-600">
            Explore curated lists of top-rated games and detailed reviews for every genre.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="card bg-base-100 shadow-md p-5 text-center">
          <MdOutlineUpdate className="text-5xl text-primary mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-secondary mb-2">Latest Updates</h2>
          <p className="text-gray-600">
            Stay updated with the latest gaming news and trending titles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
