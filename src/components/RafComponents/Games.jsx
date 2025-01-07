import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlusCircle, FaCheckCircle, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://game-review-server.vercel.app/reviews');
        setGames(result.data);
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
      <p className="text-gray-600 mb-6">Don't miss the most popular games on OpenCritic today</p>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1, // Small screens will show 1 slide
          },
          768: {
            slidesPerView: 2, // Medium screens will show 2 slides
          },
          1024: {
            slidesPerView: 4, // Larger screens will show 4 slides
          },
          1280: {
            slidesPerView: 7, // Extra-large screens will show 7 slides
          },
        }}
        modules={[Navigation, Pagination]}
        className="h-64"
      >
        {games.map((game) => (
          <SwiperSlide key={game._id}>
            <div className="card bg-base-100 h-full">
              <figure className="relative h-3/4">
                <img src={game.photo} alt={game.title} className="rounded-t-lg object-cover h-full w-full" />
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                  <FaPlusCircle className="text-white text-xl" />
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                </div>
              </figure>
              <div className="card-body h-1/4 flex flex-col justify-between">
                <h3 className="card-title text-xl font-semibold">{game.title}</h3>
                <div className={`badge badge-${game.genres} text-lg`}>{game.rating}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Games;
