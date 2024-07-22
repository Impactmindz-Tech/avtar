import Images from "@/constant/Images";

export default function RecentCompleteTourCard() {
  return (
    <div className="flex justify-between items-center gap-3 ">
      <div className="imgs">
        <img src={Images.cardImageRounded} alt="cardImageRounded" className="w-[150px] object-cover" />
      </div>
      <div className="flex-1">
        <h1>Shikara Hotel, India</h1>
        <p>Grand Park, New York</p>
        <p>Mon, Mar 05, 2024</p>
      </div>
      <div className="dollar font-bold">$60</div>
    </div>
  )
}
