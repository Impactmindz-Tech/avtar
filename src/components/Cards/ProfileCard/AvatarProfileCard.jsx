import Images from "@/constant/Images";


export default function AvatarProfileCard() {
  return (
    <div className=" w-full gap-4 my-8 ">
        <div className="flex justify-center items-center gap-4 m-auto w-[50%] ">
          <div className="left ">
            <div className="profile">
              <img src={Images.avatarProfile} alt="avatarProfile" className="w-[150px]" />
            </div>
            <h1 className="text-center text-grey-900">Jane Cooper</h1>
            <p className="text-center text-grey-800">Avatar</p>
          </div>

          <div className="flex-1 ">
            <div className="pl-6">
              <div className="border-b w-[50%] p-3">
                <h1 className="text-grey-900 text-2xl">140</h1>
                <p className="text-xl">Reviews</p>
              </div>

              <div className="border-b w-[50%] p-3 ">
                <h1 className="text-grey-900 text-2xl flex gap-2">
                  4.4 <img src={Images.star2} alt="star" />
                </h1>
                <p className="text-xl">Ratings</p>
              </div>
              <div className="border-b w-[50%] p-3 ">
                <h1 className="text-grey-900 text-2xl ">2</h1>
                <p className="text-xl">As Avatar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
