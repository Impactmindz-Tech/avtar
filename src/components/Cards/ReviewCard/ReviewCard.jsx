import ReviewCardSwiper from "@/components/Swiper/ReviewCardSwiper/ReviewCardSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

const ReviewCard = () => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      modules={[FreeMode]}
      className="reviewCardSwiper"
    >
      <SwiperSlide>
        <ReviewCardSwiper />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewCard;
