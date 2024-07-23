import Images from "@/constant/Images";
export default function UserAvatarTourCard() {
  return (
    <div className="">

    <div className="images w-full">
      <img src={Images.cardImageRounded} alt="cardImageRounded image"  className="w-full rounded-md"/>
    </div>
    <div className="flex items-center justify-between my-2">
     <div className="left">

      <h1>Shikara Hotel</h1>
      <p className="text-grey-800">India</p>
     </div>

     <div className="flex gap-2 items-center">

        <img src={Images.star2} alt="star 2" /> 
        <h1>4.4</h1>
   
    </div>
    </div>
  </div>
  )
}
