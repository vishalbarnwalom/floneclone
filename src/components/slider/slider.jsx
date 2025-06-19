import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import modelg from "../../assets/model2.png";
import model2 from "../../assets/modelg.png";

const slides = [
  {
    image: model2,
    title: "Winter Offers 2025 Collections",
    subtitle: "Smarts Products",
    button: "Shop Now",
    link: "/shop",
  },
  {
    image: modelg,
    title: "Summer Offers 2025 Collections",
    subtitle: "Smarts Products",
    button: "Shop Now",
    link: "/shop",
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[600px] sm:h-[700px] md:h-[750px] lg:h-[800px] bg-pink-100 relative overflow-hidden pt-10 sm:pt-16">
      {/* Custom Animation */}
      <style jsx>{`
        @keyframes zoomFadeUp {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          10%,
          90% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) scale(1.02);
          }
        }
        .animate-zoomFadeUp {
          animation: zoomFadeUp 8s ease-in-out;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        /* Swiper navigation button custom styles for desktop */
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          width: 32px;
          height: 32px;
          background: none;
          border-radius: 50%;
          font-size: 18px;
          box-shadow: none;
          color: #000;
          transition: color 0.3s;
        }
        .custom-swiper .swiper-button-next:hover,
        .custom-swiper .swiper-button-prev:hover {
          color: #6f42c1;
        }
        @media (max-width: 640px) {
          .custom-swiper .swiper-button-next,
          .custom-swiper .swiper-button-prev {
            display: none !important;
          }
        }
        .slide-btn {
          position: relative;
          overflow: hidden;
          color: #000; /* black text */
          border: 1px solid #000; /* black border, 1px */
          background: transparent;
          z-index: 1;
          transition: color 0.3s;
        }
        .slide-btn::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 0%;
          height: 100%;
          background: #6f42c1;
          z-index: -1;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-btn:hover {
          color: #fff;
        }
        .slide-btn:hover::before {
          width: 100%;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={slides.length > 1}
        allowSlideNext={slides.length > 1}
        allowSlidePrev={slides.length > 1}
        slidesPerView={1}
        speed={800}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full custom-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16">
              {/* Left Content */}
              <div
                className={`w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0 ${
                  activeIndex === idx ? "animate-zoomFadeUp" : ""
                }`}
              >
                <h5 className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 uppercase tracking-widest">
                  {slide.subtitle}
                </h5>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-snug sm:leading-tight">
                  {slide.title}
                </h1>
                <a
                  href={slide.link}
                  className="slide-btn inline-block px-5 py-2.5 sm:px-6 sm:py-3 rounded text-sm sm:text-base font-semibold"
                >
                  {slide.button}
                </a>
              </div>

              {/* Right Image */}
              <div
                className={`w-full md:w-1/2 flex justify-center ${
                  activeIndex === idx ? "animate-zoomFadeUp delay-200" : ""
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-h-[350px] sm:max-h-[500px] md:max-h-[700px] lg:max-h-[1000px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
 