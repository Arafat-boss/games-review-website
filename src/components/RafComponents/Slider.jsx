import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaStar, FaGamepad, FaFire } from "react-icons/fa";

import slider1 from "../../assets/1.jpg";
import slider2 from "../../assets/2.jpg";
import slider3 from "../../assets/3.jpg";
import slider4 from "../../assets/4.jpg";

const slidesData = [
  {
    image: slider1,
    badge: "Critic's Choice • Must Play",
    title: "Cyberpunk 2077: Phantom Liberty",
    score: "9.6",
    genre: "Action RPG • Sci-Fi",
    platforms: ["PC", "PS5", "Xbox Series X"],
    desc: "A gripping espionage thriller expansion that redefines Night City with breathtaking storytelling and revamped cyberware combat.",
  },
  {
    image: slider2,
    badge: "Masterpiece of the Year",
    title: "Elden Ring: Shadow of the Erdtree",
    score: "9.8",
    genre: "Open World • Souls-like",
    platforms: ["PC", "PlayStation", "Xbox"],
    desc: "FromSoftware delivers a monumental expansion packed with mysterious lore, vicious bosses, and awe-inspiring landscapes.",
  },
  {
    image: slider3,
    badge: "Community Favorite",
    title: "Black Myth: Wukong",
    score: "9.4",
    genre: "Mythology • Action RPG",
    platforms: ["PC", "PS5"],
    desc: "An epic Chinese mythology adventure propelled by Unreal Engine 5 visual excellence and lightning-fast staff combat mechanics.",
  },
  {
    image: slider4,
    badge: "High-Octane Multiplayer",
    title: "Call of Duty: Modern Warfare III",
    score: "8.9",
    genre: "First-Person Shooter",
    platforms: ["PC", "PS5", "Xbox Series X"],
    desc: "Fast-paced tactical gunplay, legendary multiplayer maps remastered, and intense battle royale updates for competitive squads.",
  },
];

const Slider = () => {
  return (
    <div className="relative w-full h-[540px] lg:h-[620px] overflow-hidden bg-slate-950">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slidesData.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative h-full w-full bg-slate-950">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
            />

            {/* Dark Cinematic Overlays - Always rich dark scrim so text NEVER washes out in light mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

            {/* Content Container */}
            <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-end pb-16 lg:pb-20">
              <div className="max-w-2xl space-y-4">
                {/* Badge & Score */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/30 text-purple-300 border border-primary/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <FaFire className="text-rose-400" />
                    {slide.badge}
                  </span>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 text-xs font-extrabold backdrop-blur-md">
                    <FaStar className="text-amber-400" />
                    <span>SCORE {slide.score} / 10</span>
                  </div>
                </div>

                {/* Game Title - Always crisp white on dark scrim */}
                <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-200 line-clamp-2 max-w-xl leading-relaxed drop-shadow">
                  {slide.desc}
                </p>

                {/* Platforms & Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/allReview"
                    className="btn btn-primary btn-md text-white font-bold px-6 rounded-xl shadow-lg hover:shadow-glow-primary transition-all flex items-center gap-2"
                  >
                    <FaGamepad className="text-lg" />
                    <span>Explore Reviews</span>
                  </Link>
                  <Link
                    to="/allReview"
                    className="btn btn-outline btn-md text-white border-white/40 hover:bg-white/20 hover:border-white rounded-xl backdrop-blur-md transition-all font-semibold"
                  >
                    Browse All Games
                  </Link>

                  <div className="hidden sm:flex items-center gap-2 ml-auto text-xs text-gray-300 font-medium">
                    <span className="text-gray-400">Platforms:</span>
                    {slide.platforms.map((p, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white font-semibold"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
