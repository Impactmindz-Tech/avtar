import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Images from "@/constant/Images";
const BookExperienceSwiper = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper z-10 xl:h-auto 4xl:h-[600px]">
    <SwiperSlide>
      {" "}
      <img className="h-[100%] w-[100%] object-cover" src={Images.cardRoundedEqual} alt="Shikara Hotel" />
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <img className="h-[100%] w-[100%] object-cover" src={Images.cardImage} alt="Shikara Hotel" />
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <img className="h-[100%] w-[100%] object-cover" src={Images.cardImage} alt="Shikara Hotel" />
    </SwiperSlide>
    <SwiperSlide>
      {" "}
      <img className="h-[100%] w-[100%] object-cover" src={Images.cardImage} alt="Shikara Hotel" />
    </SwiperSlide>
  </Swiper>
  )
}

export default BookExperienceSwiper
