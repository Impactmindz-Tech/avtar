import CardThreeSection from "@/components/Avatar/Card/CardThreeSection";
import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";

function AccountInfoPage() {
  return (
    <div className="container">
      <HeaderBack link="/avatar/profile" text={"Account Info"} />
      <CardThreeSection icon={Images.info} link={"/avatar/stripe"} title={"Account Info"} desc={"Click on arrow to update your account information."} />
      <CardThreeSection icon={Images.trash} link={"/avatar/stripe"} title={"Delete Account"} desc={"Click on arrow to delete your account permanently."} />
    </div>
  );
}

export default AccountInfoPage;
