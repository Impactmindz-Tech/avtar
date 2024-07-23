import Images from "@/constant/Images";

export default function AvatarProfileCard() {
  return (
    <div className=" w-full gap-4 my-8  flex justify-center">
      <div className="flex justify-center items-center gap-4 m-auto">
        <div className="left ">
          <div className="profile">
            <img src={Images.avatarProfile} alt="avatarProfile" className="w-[150px] sm:w-[100px] rounded-full" />
          </div>
          <h1 className="text-center text-grey-900">Jane Cooper</h1>
          <p className="text-center text-grey-800">Avatar</p>
        </div>

        <div className="">
          <div className="pl-6 ">
            <div className="border-b    p-3">
              <h1 className="text-grey-900 text-2xl sm:text-sm">140</h1>
              <p className="text-xl sm:text-sm">Reviews</p>
            </div>

            <div className="border-b   p-3 ">
              <h1 className="text-grey-900 text-2xl flex gap-2 sm:text-sm">
                4.4 <img src={Images.star2} alt="star" />
              </h1>
              <p className="text-xl sm:text-sm">Ratings</p>
            </div>
            <div className="p-3 w-full ">
              <h1 className="text-grey-900 text-2xl sm:text-sm">2</h1>
              <p className="text-xl sm:text-sm ">As Avatar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
