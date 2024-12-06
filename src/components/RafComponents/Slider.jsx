// import React from "react";
// import slider1 from"../../assets/slider1.jpg";
// const Slider = () => {
//   return (
//     <div className="carousel h-2/4 w-full">
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
//           src={slider1}
//           className="w-full"
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
//           src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
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
//           src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
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
import slider1 from "../../assets/slider1.jpg";

const Slider = () => {
  return (
    <div className="carousel h-2/4 w-full relative">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        {/* Image */}
        <img src={slider1} className="w-full object-cover" alt="Slide 1" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-neutral z-10"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-black space-y-4">
          <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-purple-500 via-white to-red-500 bg-clip-text">Welcome to Our Game Review </h2>
          <p className="text-lg text-center text-white">Enjoy breathtaking visuals and seamless transitions.</p>
        </div>
        {/* Navigation Buttons */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        {/* Image */}
        <img src={slider1} className="w-full object-cover" alt="Slide 2" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-neutral z-10"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-black space-y-4">
          <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-purple-500 via-white to-red-500 bg-clip-text">Welcome to Our Game Review </h2>
          <p className="text-lg text-center text-white">Enjoy breathtaking visuals and seamless transitions.</p>
        </div>
        {/* Navigation Buttons */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        {/* Image */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full object-cover"
          alt="Slide 3"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-neutral z-10"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-black space-y-4">
          <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-purple-500 via-white to-red-500 bg-clip-text">Welcome to Our Game Review </h2>
          <p className="text-lg text-center text-white">Enjoy breathtaking visuals and seamless transitions.</p>
        </div>
        {/* Navigation Buttons */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        {/* Image */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full object-cover"
          alt="Slide 4"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-neutral z-10"></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-black space-y-4">
          <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-purple-500 via-white to-red-500 bg-clip-text">Welcome to Our Game Review </h2>
          <p className="text-lg text-center text-white">Enjoy breathtaking visuals and seamless transitions.</p>
        </div>
        {/* Navigation Buttons */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Slider;

