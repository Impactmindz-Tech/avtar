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
      modules={[FreeMode]}
      className="reviewCardSwiper"
    >
      <SwiperSlide>
        <ReviewCardSwiper />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCardSwiper />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewCard;
