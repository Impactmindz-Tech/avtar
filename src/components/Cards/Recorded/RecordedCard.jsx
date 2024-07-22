import Images from "@/constant/Images";
import React from "react";

export default function RecordedCard() {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <div className="absolute  bottom-2 right-1 rounded-full font-bold px-4 text-sm py-2 bg-white">30 Min</div>
        <img src={Images.cardImageRounded} alt="cardImageRounded" className="w-[200px] object-cover h-[140px] rounded-md" />
      </div>
      <div className="right">
        <h1>Shikara Hotel, India</h1>
        <p>Mon, Mar 21, 2024</p>
        <p>Georgia, US</p>

        <div className="bg-grey-900 text-center text-white py-2 rounded-lg w-[50%] my-2 cursor-pointer font-semibold">Share</div>
      </div>
    </div>
  );
}
