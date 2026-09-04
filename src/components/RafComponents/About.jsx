import React from "react";
import { FaGamepad, FaStar, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";
import { MdOutlineSecurity, MdSpeed } from "react-icons/md";
import animationData from "../../animation/star.json";
import animationData2 from "../../animation/update.json";
import animationData3 from "../../animation/design.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <FaShieldAlt />
            Trusted Platform
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
            Why Gamers Trust Us
          </h2>
          <p className="text-sm sm:text-base text-base-content/70 mt-2">
            Built by gamers, for gamers. We provide authentic, community-driven reviews and comprehensive score evaluations.
          </p>
        </div>

        {/* Features 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <div className="w-48 h-32 flex items-center justify-center">
              <Lottie
                animationData={animationData3}
                loop={true}
                className="w-40 h-32"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-base-content mb-2 mt-2">
              Modern Gamer Interface
            </h3>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Designed with sleek dark/light mode, responsive grids, and instant navigation so you find gaming insights with zero friction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <div className="w-48 h-32 flex items-center justify-center">
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-44 h-32"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-base-content mb-2 mt-2">
              Unbiased Ratings (1-10)
            </h3>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Explore authentic critiques spanning storylines, graphics, gameplay mechanics, and replay value rated transparently by actual players.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <div className="w-48 h-32 flex items-center justify-center">
              <Lottie
                animationData={animationData2}
                loop={true}
                className="w-44 h-32"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-base-content mb-2 mt-2">
              Personal Watchlist & Library
            </h3>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Never lose track of titles you want to play. Bookmark games directly to your personalized cloud WatchList in a single click.
            </p>
          </div>
        </div>

        {/* Static Gaming Platform Stats Banner */}
        <div className="mt-14 bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 border border-primary/20 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl text-primary">
                500+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-base-content/70 mt-1 uppercase tracking-wider">
                Games Reviewed
              </div>
            </div>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl text-secondary">
                25K+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-base-content/70 mt-1 uppercase tracking-wider">
                Active Gamers
              </div>
            </div>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl text-accent">
                98%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-base-content/70 mt-1 uppercase tracking-wider">
                Positive Feedback
              </div>
            </div>
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl text-amber-400">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-base-content/70 mt-1 uppercase tracking-wider">
                Unbiased Critiques
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
