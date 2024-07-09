import SeeAllReview from "@/components/Cards/SeeAllReview/SeeAllReview";
import SeeAllReviewCard from "@/components/Cards/SeeAllReviewCard/SeeAllReviewCard";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";

function See_All_Review() {
  return (
    <div className="container">
      <HeaderBack link="/user/book-experience" text={"Review(4.6)"} />

      <div className="max-w-2xl m-auto ">
        {/* state */}
        <SeeAllReview />

        {/* review filter */}
        <div className="flex justify-between my-5 items-center">
          <div className="font-bold text-grey-900">15 reviews</div>
          <div className="border rounded-md px-3 py-1">
            <select name="" id="" className="text-grey-800 outline-none">
              <option value="Most recent">Most recent</option>
              <option value="oldest">oldest</option>
            </select>
          </div>
        </div>

        {/* search bar */}
        <div className="flex items-center w-full  my-5">
          <div className="relative w-full">
            <div className=" flex absolute top-1 left-3 p-2.5 rounded-full">
              <img src={Images.searchGray} alt="searchGray Icon" />
            </div>
            <input type="search" name="search bar" id="search bar" className="inputRounded2 rounded-full" placeholder="Search..." />
          </div>
        </div>

        {/* review box */}
        <div className="reviewBox">
          <SeeAllReviewCard />
          <SeeAllReviewCard />
          <SeeAllReviewCard />
        </div>
      </div>
    </div>
  );
}

export default See_All_Review;
