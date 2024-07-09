import Images from "@/constant/Images";

const FilterUserCard = () => {
  return (
    <div className=" shadow-lg flex justify-between items-center rounded-lg">
      <div className="flex">
        <img src={Images.cardImageCurve} alt="cardImageCurve" className="h-full w-40 object-cover rounded-s-md" />
      </div>
      <div className="">
        <div className="px-6 pt-2">
          <h1>Shikara Hotel, India</h1>
          <p className="text-borderFill-700">Georgia, US</p>
          <div className="flex justify-between items-center my-5 w-[250px]">
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
    </div>
  );
};

export default FilterUserCard;
