import Images from "@/constant/Images";

const FilterUserCard = () => {
  return (
    <div className="border shadow-lg flex sm:flex-wrap rounded-md">
      <div className="imageBox">
        <div className="h-[168px] w-[150px] rounded-s-md">
          <img src={Images.cardImageCurve} alt="cardImageCurve" className="object-cover h-full rounded-s-md" />
        </div>
      </div>
      <div className="px-3">
        <h1 className="mt-3">Shikara Hotel, India</h1>
        <p className="text-borderFill-700">Georgia, US</p>
        <div className="flex justify-between items-center my-5">
          <div className="flex items-center px-4 py-1 justify-center gap-2 bg-borderFill-900 rounded-full">
            <div className="border-r-2 px-1">
              <img src={Images.star} alt="star" />
            </div>
            <div className="font-extrabold">4.5</div>
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
