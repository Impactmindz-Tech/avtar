import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Images from "@/constant/Images";
const BookExperienceSwiper = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper z-10">
    <SwiperSlide>
      {" "}
      <img className="w-full object-contain" src={Images.cardImage} alt="Shikara Hotel" />
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <img className="w-full object-contain" src={Images.cardImage} alt="Shikara Hotel" />
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <img className="w-full object-contain" src={Images.cardImage} alt="Shikara Hotel" />
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <img className="w-full object-contain" src={Images.cardImage} alt="Shikara Hotel" />
    </SwiperSlide>
  </Swiper>
  )
}

export default BookExperienceSwiper
