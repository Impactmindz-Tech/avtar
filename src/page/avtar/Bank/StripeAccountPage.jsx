import AvatarBottomBtn from "@/components/Avatar/Button/AvatarBottomBtn";
import HeaderBack from "@/components/HeaderBack";

function StripeAccountPage() {
  return (
    <div className="container">
      <HeaderBack link="/avatar/bank" text={"Stripe Account"} />
      <div>
       <label htmlFor="account">Add Stirpe Account</label>
       <input type="email" id="account" className="input mt-2"  placeholder="Eg. rohansharma@gmail.com"/>
      </div>
      <AvatarBottomBtn link={""} text={"Add/Update Account"} />
    </div>
  );
}

export default StripeAccountPage;
