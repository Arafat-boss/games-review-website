import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaFire, FaGamepad } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://game-review-server.vercel.app/reviews"
        );
        if (result.data && Array.isArray(result.data)) {
          setGames(result.data);
        }
      } catch (err) {
        console.log("Error fetching games:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-2">
              <FaFire />
              Trending Now
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-base-content tracking-tight">
              Community Popular Picks
            </h2>
            <p className="text-sm sm:text-base text-base-content/70 mt-1">
              Swipe through trending games evaluated by fellow players.
            </p>
          </div>

          <Link
            to="/allReview"
            className="btn btn-outline btn-sm border-base-content/20 hover:bg-primary hover:border-primary hover:text-white rounded-xl"
          >
            All Game Database
          </Link>
        </div>

        {games.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={16}
            breakpoints={{
              320: { slidesPerView: 1.15, spaceBetween: 12 },
              480: { slidesPerView: 1.4, spaceBetween: 14 },
              640: { slidesPerView: 2.2, spaceBetween: 16 },
              1024: { slidesPerView: 3.2, spaceBetween: 20 },
              1280: { slidesPerView: 4.2, spaceBetween: 20 },
            }}
            className="pb-12 w-full max-w-full overflow-hidden"
          >
            {games.map((game) => (
              <SwiperSlide key={game._id}>
                <Link
                  to={`/reviewDetails/${game._id}`}
                  className="group block bg-base-100 border border-base-content/10 hover:border-primary/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={
                        game.photo ||
                        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80"
                      }
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80";
                      }}
                    />
                    {/* Dark Vignette Overlay - Never white wash */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30"></div>

                    {/* Floating Rating Pill */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white font-bold text-xs shadow-md">
                      <FaStar className="text-amber-400" />
                      <span>{game.rating}/10</span>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-md bg-primary text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {game.genres || "Action"}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-base-100">
                    <h3 className="font-display font-bold text-base text-base-content group-hover:text-primary transition-colors line-clamp-1">
                      {game.title}
                    </h3>
                    <p className="text-xs text-base-content/70 mt-1 line-clamp-1 font-medium">
                      Published by {game.name || "Gamer"}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center py-8 text-sm text-base-content/60">
            Loading trending titles...
          </div>
        )}
      </div>
    </section>
  );
};

export default Games;
