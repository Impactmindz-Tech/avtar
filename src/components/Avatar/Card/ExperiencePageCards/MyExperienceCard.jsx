import Images from "@/constant/Images";

function MyExperienceCard() {
  return (
    <div className="card">
      <div className="w-full relative">
        <div className="absolute top-2 right-2 flex gap-2">
          <div className="bg-white p-4 rounded-md BoxShadowLessRounded">
            <img
              src={Images.edit}
              alt="edit"
              className="cursor-pointer w-6 h-6"
            />
          </div>
          <div className="bg-white p-4 rounded-md BoxShadowLessRounded">
            <img
              src={Images.redtrash}
              alt="redtrash"
              className="cursor-pointer w-6 h-6"
            />
          </div>
        </div>
        <img
          src={Images.cardImageRounded}
          alt="banner"
          className="w-[100%] h-[300px] object-cover rounded-2xl"
        />
      </div>
      <h1 className="text-grey-900 my-2">Shikara Hotel, India</h1>
      <h3 className="text-grey-900 font-medium">Grand Park, New York</h3>
    </div>
  );
}

export default MyExperienceCard;
