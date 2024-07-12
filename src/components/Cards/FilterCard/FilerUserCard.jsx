import Images from "@/constant/Images";

const FilterUserCard = () => {
  return (
    <div className="border shadow-lg flex  rounded-md">
      <div className="imageBox ">
        <div className="h-[168px] w-[150px] rounded-s-md sm:w-[100%] sm:h-[100px]  ">
          <img src={Images.cardImageCurve} alt="cardImageCurve" className="object-cover h-full rounded-s-md" />
        </div>
      </div>
      <div className="px-3 flex-1 relative">
        <h1 className="mt-3 sm:mt-1 sm:text-sm lg:text-sm lg:mt-5">Shikara Hotel, India</h1>
        <p className="text-borderFill-700 sm:text-sm">Georgia, US</p>
        <div className="absolute bottom-0 flex  justify-between items-center my-5 sm:my-3 w-[90%] 2xl:mt-5">
          <div className="  flex items-center px-4 py-1 justify-center gap-2 bg-borderFill-900 rounded-full sm:py-0 sm:px-3">
            <div className="border-r-2 px-1">
              <img src={Images.star} alt="star" />
            </div>
            <div className="font-extrabold sm:font-medium">4.5</div>
          </div>
          <div className="border bg-grey-300 border-borderFill-300 rounded-lg p-1 cursor-pointer">
            <img src={Images.add} alt="add" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterUserCard;
