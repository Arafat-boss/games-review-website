import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaCheckCircle, FaTimesCircle, FaStar, FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";
import mini1 from "../../assets/mini1.jpg";
import mini2 from "../../assets/mini2.jpg";
import mini3 from "../../assets/mini3.jpg";
import mini4 from "../../assets/mini4.jpg";

const spotlightGames = [
  {
    image: mini2,
    badge: "Editor's Masterpiece",
    title: "Assassin's Creed: Shadows",
    score: "9.5",
    genre: "Action-Adventure • Stealth",
    verdict:
      "A stunning leap forward for the franchise with dual protagonists, dynamic seasonal weather, and razor-sharp shinobi stealth mechanics.",
    pros: ["Gorgeous feudal Japan open world", "Fluid dual-character gameplay loop"],
    cons: ["Minor performance dips on ultra settings"],
  },
  {
    image: mini3,
    badge: "Multiplayer Phenomenon",
    title: "PUBG: Battlegrounds",
    score: "9.0",
    genre: "Tactical Battle Royale",
    verdict:
      "The undisputed pioneer of battle royale tension, offering unrivaled gun recoil mechanics and heart-pounding final circle showdowns.",
    pros: ["Realistic ballistics and weapon handling", "Endless squad replayability"],
    cons: ["Steep learning curve for newcomers"],
  },
  {
    image: mini4,
    badge: "Franchise Titan",
    title: "Call of Duty: Warzone",
    score: "9.2",
    genre: "Fast-Paced FPS",
    verdict:
      "Consistently thrilling multiplayer action with fluid omni-movement mechanics, diverse weapon loadouts, and relentless competitive energy.",
    pros: ["Silky smooth 120 FPS gunplay", "Huge active community and regular seasons"],
    cons: ["Large storage installation footprint"],
  },
];

const MiniDetailes = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade triggerOnce>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
              <FaGamepad />
              Curated Breakdowns
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
              Editor's Spotlight Reviews
            </h2>
            <p className="text-sm sm:text-base text-base-content/70 mt-2">
              In-depth expert assessments with pros, cons, and performance verdict.
            </p>
          </div>

          {/* Cards List */}
          <div className="space-y-8">
            {spotlightGames.map((game, index) => (
              <div
                key={index}
                className="bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center`}
                >
                  {/* Image Container */}
                  <div className="w-full lg:w-1/2 h-72 lg:h-96 relative overflow-hidden bg-slate-950">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30"></div>

                    {/* Floating Rating on Image - Dark backdrop for solid contrast */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
                      <FaStar className="text-amber-400 text-base" />
                      <span className="font-display font-black text-lg text-white">
                        {game.score}
                      </span>
                      <span className="text-xs text-gray-300 font-semibold">
                        / 10
                      </span>
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md">
                        {game.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-base-100">
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                        {game.genre}
                      </div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-base-content mb-3">
                        {game.title}
                      </h3>
                      <p className="text-sm text-base-content/80 leading-relaxed">
                        {game.verdict}
                      </p>

                      {/* Pros & Cons Box with dedicated tint and high contrast */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 border-t border-base-content/10">
                        {/* Pros */}
                        <div className="space-y-1.5 bg-emerald-500/10 p-3.5 rounded-2xl border border-emerald-500/20">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                            <FaCheckCircle /> The Highlights
                          </span>
                          {game.pros.map((pro, pIdx) => (
                            <p
                              key={pIdx}
                              className="text-xs text-base-content/85 flex items-start gap-1.5 font-medium"
                            >
                              <span className="text-emerald-500 font-bold">•</span>
                              {pro}
                            </p>
                          ))}
                        </div>

                        {/* Cons */}
                        <div className="space-y-1.5 bg-rose-500/10 p-3.5 rounded-2xl border border-rose-500/20">
                          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                            <FaTimesCircle /> Room for Polish
                          </span>
                          {game.cons.map((con, cIdx) => (
                            <p
                              key={cIdx}
                              className="text-xs text-base-content/85 flex items-start gap-1.5 font-medium"
                            >
                              <span className="text-rose-500 font-bold">•</span>
                              {con}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        to="/allReview"
                        className="btn btn-primary btn-sm sm:btn-md text-white font-bold rounded-xl shadow-md hover:shadow-glow-primary transition-all"
                      >
                        Explore More Reviews
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default MiniDetailes;
