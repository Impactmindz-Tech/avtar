import HeaderBack from "@/components/HeaderBack";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import BottomBlackBtn from "@/components/ui/BottomBlackBtn";
import Images from "@/constant/Images";

function BankAccountPage() {
  return (
    <div className="container">
      <HeaderBack link="/avatar/profile" text={"Bank Account"} />
      <div className="border flex items-center justify-between p-4 gap-4 rounded-2xl my-5 cursor-pointer">
        <div className="icon bg-grey-300 rounded-full px-5 py-7">
          <img src={Images.Stripe} alt="Stripe" />
        </div>
        <div className="info flex-1">
          <h1 className="text-grey-900">Stripe Account</h1>
          <p className="text-grey-800">Click on arrow to add/update your account information.</p>
        </div>
        <div className="arrow">
          <img src={Images.rightArrowGray} alt="rightArrowGray" />
        </div>
      </div>
      {/* <BottomBlackBtn /> */}
    </div>
  );
}

export default BankAccountPage;
