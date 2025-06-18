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
    title: "SUMMER COLLECTION",
    subtitle: "Feel the Breeze of Fashion",
    button: "Shop Now",
    link: "/shop",
  },
  {
    image: modelg,
    title: "NEW ARRIVALS",
    subtitle: "Trendy & Fresh Picks",
    button: "Shop Now",
    link: "/shop",
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[500px] md:h-[650px] bg-pink-100 relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
              {/* Left Content */}
              <div
                className={`w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 ${
                  activeIndex === idx
                    ? "animate-[fadeInUp_0.8s_ease-out_both]"
                    : "opacity-0"
                }`}
              >
                <h5 className="text-lg md:text-xl text-gray-600 mb-2 uppercase tracking-widest">
                  {slide.subtitle}
                </h5>
                <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  {slide.title}
                </h1>
                <a
                  href={slide.link}
                  className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300"
                >
                  {slide.button}
                </a>
              </div>

              {/* Right Image */}
              <div
                className={`w-full md:w-1/2 flex justify-center ${
                  activeIndex === idx
                    ? "animate-[fadeInUp_1s_ease-out_both] delay-200"
                    : "opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[80%] max-h-[400px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
