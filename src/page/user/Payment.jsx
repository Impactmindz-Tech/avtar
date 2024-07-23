import HeaderBack from "@/components/HeaderBack";
import Images from "@/constant/Images";
import { useState } from "react";


function PaymentPage() {
    const [role, setRole] = useState({
        paypal: true,
        applePay: false,
        mastercard:false
      });
    const changeSelectedState = (name) => {
        if (name == "paypal") {
          setRole({  mastercard:false,applePay: false, paypal: true });
        } 
        else if(name == "mastercard"){
            setRole({ mastercard:true,applePay: false, paypal: false });

        }
        else {
          setRole({  mastercard:false,applePay: true, paypal: false });
        }
      };
  return (
    <div className="container">
      <HeaderBack link="/user/profile" text={"Payment"} />
      



      <div className="flex flex-col gap-5 pt-5">
          <div className={`${role.paypal ? "border border-grey-900" : "border border-[#ccc]"} flex items-center gap-2  p-5 rounded-3xl relative`} onClick={() => changeSelectedState("paypal")}>
            <img className="w-10" src={Images.paypal} alt="paypal" />
            <span className="text-primaryColor-900 font-bold">PayPal</span>

            {role.paypal && (
              <div className="tick bg-[#757575] rounded-full p-1 absolute right-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>

          <div className={`${role.applePay ? "border border-grey-900" : "border border-[#ccc]"} flex items-center gap-2  p-5 rounded-3xl relative`} onClick={() => changeSelectedState("applePay")}>
            <img className="w-10 h-10" src={Images.applePay} alt="applePay" />
            <span className="text-primaryColor-900 font-bold">Apple Pay</span>
            {role.applePay && (
              <div className="tick bg-[#757575] rounded-full p-1 absolute right-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>




          <div className={`${role.mastercard ? "border border-grey-900" : "border border-[#ccc]"} flex items-center gap-2  p-5 rounded-3xl relative`} onClick={() => changeSelectedState("mastercard")}>
            <img className="w-10" src={Images.mastercard} alt="mastercard" />
            <span className="text-primaryColor-900 font-bold">**** **** **** 6918</span>

            {role.mastercard && (
              <div className="tick bg-[#757575] rounded-full p-1 absolute right-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>

          <div  className="cursor-pointer w-full border border-primaryColor-900 p-4 text-center text-grey-900 mt-8 rounded-xl font-bold">
            <button>Add New Card</button>
          </div>
        </div>



    </div>
  );
}

export default PaymentPage;
