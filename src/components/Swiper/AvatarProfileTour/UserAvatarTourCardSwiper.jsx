import UserAvatarTourCard from "@/components/Cards/UserAvatarTourCard";
import { Swiper, SwiperSlide } from "swiper/react";

const UserAvatarTourCardSwiper = ({ item }) => {
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      // modules={[Pagination]}
      className="mySwiper"
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
