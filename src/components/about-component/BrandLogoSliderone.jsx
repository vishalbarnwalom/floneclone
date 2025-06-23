import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import b1 from "../../assets/brand-logo/brand-logo-1.png";
import b2 from "../../assets/brand-logo/brand-logo-2.png";
import b3 from "../../assets/brand-logo/brand-logo-3.png";
import b4 from "../../assets/brand-logo/brand-logo-4.png";
import b5 from "../../assets/brand-logo/brand-logo-5.png";
import b6 from "../../assets/brand-logo/brand-logo-6.png";
import b7 from "../../assets/brand-logo/brand-logo-7.png";
import b8 from "../../assets/brand-logo/brand-logo-8.png";

const brandLogos = [
  { id: 1, image: b1 },
  { id: 2, image: b2 },
  { id: 3, image: b3},
  { id: 4, image: b4},
  { id: 5, image: b5 },
  { id: 6, image: b6 },
  { id: 7, image: b7},
  { id: 8, image: b8},
];

const BrandLogoSliderOne = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, smpaceBetween: 50 }
          }}
        >
          {brandLogos.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="flex justify-center items-center h-20">
                <img
                  src={brand.image}
                  alt={`Brand ${brand.id}`}
                  className="h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandLogoSliderOne;
