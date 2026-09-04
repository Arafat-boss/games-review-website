import React from "react";
import { FaCalendarAlt, FaGamepad, FaClock, FaDesktop, FaPlaystation, FaXbox } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const upcomingList = [
  {
    title: "Grand Theft Auto VI",
    developer: "Rockstar Games",
    genre: "Open World Action",
    date: "Fall 2025",
    platforms: ["PS5", "Xbox Series X|S"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80",
    hype: "99% Anticipation",
  },
  {
    title: "Monster Hunter Wilds",
    developer: "Capcom",
    genre: "Action RPG • Hunting",
    date: "Feb 28, 2025",
    platforms: ["PC", "PS5", "Xbox Series X"],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&auto=format&fit=crop&q=80",
    hype: "96% Anticipation",
  },
  {
    title: "DOOM: The Dark Ages",
    developer: "id Software / Bethesda",
    genre: "Dark Fantasy FPS",
    date: "Q3 2025",
    platforms: ["PC", "PS5", "Xbox Series X"],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=700&auto=format&fit=crop&q=80",
    hype: "94% Anticipation",
  },
  {
    title: "Ghost of Yōtei",
    developer: "Sucker Punch Productions",
    genre: "Samurai Action-Adventure",
    date: "Late 2025",
    platforms: ["PS5 Exclusive"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=700&auto=format&fit=crop&q=80",
    hype: "97% Anticipation",
  },
];

const UpcomingGames = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fade triggerOnce>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <FaClock />
                Release Radar
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
                Most Anticipated Releases
              </h2>
              <p className="text-sm sm:text-base text-base-content/70 mt-1">
                Keep track of major upcoming drops scheduled across all major gaming platforms.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingList.map((game, idx) => (
              <div
                key={idx}
                className="group relative bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Cover Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark Vignette Overlay - Never washes out to white in light mode */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40"></div>

                  {/* Release Date Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-sm">
                      <FaCalendarAlt className="text-primary" />
                      {game.date}
                    </span>
                  </div>

                  {/* Hype Meter */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded-md bg-accent text-white text-[10px] font-extrabold uppercase shadow-sm">
                      {game.hype}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-base-100">
                  <div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                      {game.genre}
                    </span>
                    <h3 className="font-display font-bold text-xl text-base-content group-hover:text-primary transition-colors line-clamp-1 mt-0.5">
                      {game.title}
                    </h3>
                    <p className="text-xs text-base-content/70 mt-1 font-medium">
                      By {game.developer}
                    </p>
                  </div>

                  {/* Platforms */}
                  <div className="pt-3 border-t border-base-content/10 flex flex-wrap items-center gap-1.5">
                    {game.platforms.map((plat, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 rounded bg-base-200 border border-base-content/15 text-[10px] font-semibold text-base-content/80"
                      >
                        {plat}
                      </span>
                    ))}
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

export default UpcomingGames;
