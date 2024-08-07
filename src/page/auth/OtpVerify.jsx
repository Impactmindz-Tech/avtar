import React from "react";

import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signupgoogle } from "@/constant/optimizedFunction/loginFunction/LoginFunction"; // Adjust path based on your project
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "@/utills/formvalidation/FormValidation";
import { getLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import { loginApi, verifyOtpApi } from "@/utills/service/authService";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";
import toast from "react-hot-toast";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

const OtpVerify = () => {
  const params = useParams();
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    signupgoogle(navigate);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      otp: value,
    };
    try {
      const response = await verifyOtpApi(params?.id, body);
      if (response?.isSuccess) {
        toast.success(response?.message)
        navigate("/auth/new-password/" + response?.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[50%] mx-auto lg:max-w-full">
      <h1>AvatarWalk</h1>
      <div className="pt-10">
        <div className="my-5">
          <h1>OTP Verification</h1>
          <p className="text-grey-800">Enter the verification code we just send on your email address.</p>
        </div>
        <form>
          <div className="m-auto  flex justify-center">
            <InputOTP maxLength={4} value={value} onChange={(value) => setValue(value)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className="input-otp-slot" />
                <InputOTPSlot index={1} className="input-otp-slot" />
                <InputOTPSlot index={2} className="input-otp-slot" />
                <InputOTPSlot index={3} className="input-otp-slot" />
              </InputOTPGroup>
            </InputOTP>
            {/* <div className="text-center text-sm">{value === "" ? <>Enter your one-time password.</> : <>You entered: {value}</>}</div> */}
          </div>

          <div className="text-center ">
            <p className="text-danger font-bold py-3">Wrong code, please try again</p>
            <p className="text-grey-800">
              I din’t receive a code. <b className="text-grey-900 cursor-pointer">Resend</b>
            </p>
          </div>
          <div onClick={onSubmit} className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">
            {/* <Link to="/auth/new-password"> */} <button className="w-full">Verify</button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
