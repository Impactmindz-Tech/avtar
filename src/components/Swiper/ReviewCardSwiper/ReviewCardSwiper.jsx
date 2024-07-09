import Images from "@/constant/Images";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ReviewCardSwiper = () => {
  return (
    <div className="cardBorder my-5">
      <div className="flex justify-between py-5 border-b-2 border-borderFill-600 px-2">
        <div className="star">
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={3} precision={0.5} />
          </Stack>
        </div>
        <div className="text-grey-800">26th Dec, 2023</div>
      </div>
      <div className="px-4 py-2">
        <p className="text-grey-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet.</p>
        <div className="font-bold underline my-2 cursor-pointer">Show More</div>
        <div className="flex gap-2 py-5 items-center ">
          <div className="userImg">
            <img src={Images.user2} alt="user" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium text-grey-800">Jane Cooper</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardSwiper;
