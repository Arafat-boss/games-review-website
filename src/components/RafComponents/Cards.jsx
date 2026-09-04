import React from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import { FaFire, FaTrophy } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Cards = () => {
  const allData = useLoaderData();
  const reviews = Array.isArray(allData) ? allData : [];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade triggerOnce>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <FaTrophy className="text-amber-400" />
                <span>Hall of Fame</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
                Highest Rated Games
              </h2>
              <p className="text-sm sm:text-base text-base-content/70 mt-1 max-w-xl">
                The most critically acclaimed masterpieces evaluated and reviewed by our gaming community.
              </p>
            </div>

            <Link
              to="/allReview"
              className="btn btn-outline btn-sm sm:btn-md border-base-content/20 hover:bg-primary hover:border-primary hover:text-white rounded-xl flex items-center gap-2 self-start sm:self-auto"
            >
              <span>View All Reviews</span>
              <BsArrowRight />
            </Link>
          </div>

          {/* Cards Grid */}
          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((card) => (
                <Card key={card._id} card={card} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-base-100 rounded-2xl border border-base-content/10">
              <FaFire className="text-4xl text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-xl text-base-content">
                No reviews found yet
              </h3>
              <p className="text-sm text-base-content/60 mt-1 mb-4">
                Be the first to share an epic review with our community!
              </p>
              <Link to="/addreview" className="btn btn-primary btn-sm text-white">
                Add Review
              </Link>
            </div>
          )}
        </Fade>
      </div>
    </section>
  );
};

export default Cards;
