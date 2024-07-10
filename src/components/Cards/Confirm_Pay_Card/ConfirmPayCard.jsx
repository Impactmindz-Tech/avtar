import Images from "@/constant/Images";

const ConfirmPayCard = () => {
  return (
    <div className="flex gap-1 w-[460px] BoxShadowLessRounded p-2 lg:flex-wrap lg:my-5">
      <div className="lg:w-full">
        <img src={Images.cardImageRounded} alt="card image" className="h-[100px] lg:h-auto lg:w-full"/>
      </div>
      <div className="textRight px-2">
        <h1 className="font-bold text-grey-900">Shikara Hotel, India</h1>
        <div className="flex items-center gap-2">
          <img src={Images.location2} alt="location2" className="rounded-full"/>
          <p >Grand Park, New York</p>
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
