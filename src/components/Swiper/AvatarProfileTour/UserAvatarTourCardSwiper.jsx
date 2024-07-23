import UserAvatarTourCard from "@/components/Cards/UserAvatarTourCard";
import { Swiper, SwiperSlide } from "swiper/react";

const UserAvatarTourCardSwiper = ({ item }) => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      // modules={[Pagination]}
      className="mySwiper"

          breakpoints={{
        640: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        2024: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide>
        <UserAvatarTourCard />
      </SwiperSlide>
      <SwiperSlide>
        <UserAvatarTourCard />
      </SwiperSlide>
      <SwiperSlide>
        <UserAvatarTourCard />
      </SwiperSlide>
      <SwiperSlide>
        <UserAvatarTourCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default UserAvatarTourCardSwiper;
