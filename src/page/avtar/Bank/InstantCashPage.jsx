import AvatarBottomBtn from "@/components/Avatar/Button/AvatarBottomBtn";
import HeaderBack from "@/components/HeaderBack";

function InstantCashPage() {
  return (
    <div className="container">
      <HeaderBack link="/avatar/profile" text={"Tour Cash Out"} />

      {/* <InstantCashPage
        title="Analytics"
        subTitle="Batch pay"
        titlePrice="$106.76"
        subTitlePrice="$106.76"
      /> */}

      <AvatarBottomBtn text={"Cash Out $230.40"} link={"/avatar"} />
    </div>
  );
}

export default InstantCashPage;
