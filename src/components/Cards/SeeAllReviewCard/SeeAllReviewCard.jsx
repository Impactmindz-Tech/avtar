import Images from "@/constant/Images";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const SeeAllReviewCard = () => {
  return (
    <div>
      {/* top */}
      <div className="flex gap-2 pt-5 items-center my-5">
        <div className="userImg">
          <img src={Images.user2} alt="user" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-grey-800">Alex Suprun</h3>
          <p className="text-grey-800">December 2023</p>
        </div>
      </div>
      {/* star */}
      <div className="star">
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={3} precision={0.5} readOnly />
        </Stack>
      </div>
      <div className="detail">
        <h1 className="font-normal">Everything is perfect</h1>

        <div className="flex items-center gap-3 my-5">
          <div className="flex gap-1 items-center">
            <img src={Images.translate} alt="translate" className="w-5 h-5"/>
          <div className="text-grey-800">Translate from Spanish</div>
          </div>
          <div className="underline underline-offset-4 cursor-pointer">Show Original</div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllReviewCard;
