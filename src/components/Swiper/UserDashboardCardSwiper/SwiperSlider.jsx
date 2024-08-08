import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Images from "@/constant/Images";
function SwiperSlider({ item }) {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper z-10">
      {item?.map((src, index) => {
        return (
          <SwiperSlide key={index}>
            <img className="w-full h-[250px]" src={src} alt="slider_img" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperSlider;
