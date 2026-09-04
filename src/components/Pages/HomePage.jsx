import React from "react";
import Slider from "../RafComponents/Slider";
import Cards from "../RafComponents/Cards";
import MiniDetailes from "../RafComponents/MiniDetailes";
import About from "../RafComponents/About";
import Games from "../RafComponents/Games";
import UpcomingGames from "../RafComponents/UpcomingGames";
import GamingNews from "../RafComponents/GamingNews";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="space-y-4">
      <Helmet>
        <title>Game Reviews | The Ultimate Gamer's Critique Hub</title>
      </Helmet>

      {/* Hero Showcase Slider */}
      <Slider />

      {/* Highest Rated Community Reviews (Live Database) */}
      <Cards />

      {/* Editor's Spotlight In-Depth Breakdowns (Pros & Cons) */}
      <MiniDetailes />

      {/* Upcoming Games & Release Radar */}
      <UpcomingGames />

      {/* Popular Trending Games Swiper */}
      <Games />

      {/* Industry News & Tech Dispatches */}
      <GamingNews />

      {/* Platform Features, Trust Badges & Stats Counter */}
      <About />
    </div>
  );
};

export default HomePage;
