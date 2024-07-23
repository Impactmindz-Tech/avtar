import AvatarBottomBtn from "@/components/Avatar/Button/AvatarBottomBtn";
import InstantCashCard from "@/components/Avatar/Heading/InstantCashCard";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { Link } from "react-router-dom";

function InstantCashPage() {
  return (
    <div className="container">
      <HeaderBack link="/avatar/profile" text={"Tour Cash Out"} />

      <div className="border-b pb-2">
        <InstantCashCard title="Analytics" subTitle="Batch pay" titlePrice="$106.76" subTitlePrice="$106.76" />
        <InstantCashCard title="Tips" subTitle="Final tips" titlePrice="$125.14" subTitlePrice="$124.14" />
        <InstantCashCard title="Instant Fee" subTitle="Cashout fee" titlePrice="-$0.50" subTitlePrice="-$0.50" />
        <InstantCashCard title="Total" subTitle="" titlePrice="$230.40" subTitlePrice="" />
      </div>

      <div className="flex items-center justify-between gap-5 my-5">
        <div className="img">
          <img src={Images.visa} alt="visa" />
        </div>
        <div className="flex-1 font-bold text-lg text-grey-900">Visa...3498</div>

        <div className="font-bold underline underline-offset-4 cursor-pointer">Edit</div>
      </div>
      <Link to={"/"}>
        <AvatarBottomBtn link={""} text={"Cash Out $230.40"} />
      </Link>
    </div>
  );
}

export default InstantCashPage;
