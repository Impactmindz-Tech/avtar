import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signupgoogle } from "@/constant/optimizedFunction/loginFunction/LoginFunction"; // Adjust path based on your project
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "@/utills/formvalidation/FormValidation";
import { getLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import { loginApi } from "@/utills/service/authService";
import TitleHeading from "@/components/Avatar/Heading/TitleHeading";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidation) });

  const handleGoogleSignup = () => {
    signupgoogle(navigate);
  };
  const userRole = getLocalStorage("user")?.user?.Activeprofile;
  console.log(userRole);

  const onSubmit = async (formData) => {
    try {
      const response = await loginApi(formData);
      console.log(response);
      if (response?.isSuccess && response?.data?.length > 1) {
        setLocalStorage("userDetails", response);
        navigate("/auth/role/" + response?.data[0].userId, { state: { formData } });
      } else {
        setLocalStorage("user", response?.data);
        setLocalStorage("token", response?.token);
        navigate("/user/dashboard");
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
          <h1>Forgot Password?</h1>
          <p className="text-grey-800">Please enter the email address linked with your account.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <br />
            <input className="input mt-3" type="email" placeholder="Your email" name="email" id="email" {...register("userName")} />
          </div>

          <div className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">
          <Link to="/auth/otp-verify">  <button>Submit</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
