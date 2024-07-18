import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Images from "@/constant/Images";
import { Rating, Stack } from "@mui/material";

const ReviewCardSwiper = ({ item }) => {
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
      {item?.map((review, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="cardBorder my-5">
              <div className="flex justify-between py-5 border-b-2 border-borderFill-600 px-2 lg:py-2 lg:flex-wrap">
                <div className="star">
                  <Stack spacing={1}>
                    <Rating name="half-rating" value={review?.rating} />
                  </Stack>
                </div>
                <div className="text-grey-800">
                  {new Date(review?.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div className="px-4 py-2">
                <p className="text-grey-800">{review.comment}</p>
                <div className="font-bold underline my-2 cursor-pointer">Show More</div>
                <div className="flex gap-2 py-5 items-center ">
                  <div className="userImg">
                    <img src={review?.userImage} alt="user" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium text-[red]">{review?.avatarName}</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewCardSwiper;
