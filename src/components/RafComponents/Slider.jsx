// import React from "react";
// import slider1 from"../../assets/game1.jpg";
// import slider2 from"../../assets/mini1.jpg";
// import slider3 from"../../assets/mini3.jpg";
// import slider4 from"../../assets/mini4.jpg";
// const Slider = () => {
//   return (
//     <div className="carousel h-[500px] w-full">
//       <div id="slide1" className="carousel-item relative w-full">
//         <img
//           src={slider1}
//           className="w-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide4" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide2" className="carousel-item relative w-full">
//         <img
//           src={slider2}
//           className="w-full bg-cover"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide1" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide3" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide3" className="carousel-item relative w-full">
//         <img
//           src={slider3}
//           className="w-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide2" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide4" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide4" className="carousel-item relative w-full">
//         <img
//           src={slider4}
//           className="w-full"
//         />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide3" className="btn btn-circle">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import slider1 from "../../assets/1.jpg";
import slider2 from "../../assets/2.jpg";
import slider3 from "../../assets/3.jpg";
import slider4 from "../../assets/4.jpg";

const Slider = () => {
  return (
    <div className="h-[500px] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <img
            src={slider1}
            alt="Slider 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt="Slider 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            alt="Slider 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider4}
            alt="Slider 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
