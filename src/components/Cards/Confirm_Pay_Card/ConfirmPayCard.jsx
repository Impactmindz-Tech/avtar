import Images from "@/constant/Images";

const ConfirmPayCard = ({ bookingDetails }) => {
  console.log(bookingDetails);
  return (
    <div className="flex gap-1 w-full BoxShadowLessRounded p-2 lg:flex-wrap lg:my-5">
      <div className="sm:h-[200px] md:h-[130px] lg:h-[150px] sm:w-[100%]">
        <img src={bookingDetails?.data?.packageInfo?.avatarImage} alt="card image" className="w-[100%] h-[100%] object-cover" />
      </div>
      <div className="textRight px-2">
        <h1 className="font-bold text-grey-900">
          {bookingDetails?.data?.packageInfo?.ExperienceName} {bookingDetails?.data?.packageInfo?.country}
        </h1>
        <div className="flex items-center gap-2">
          <img src={Images.location2} alt="location2" className="rounded-full" />
          <p>
            {bookingDetails?.data?.packageInfo?.State} {bookingDetails?.data?.packageInfo?.city}
          </p>
        </div>

        <div className="flex items-center gap-1 pt-1">
          <div className="img">
            <img src={Images.star} alt="star" />
          </div>
          <div className="text text-grey-800 py-2">
            <h2>4.5 (20)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayCard;
