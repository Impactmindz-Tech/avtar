import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { conformPassword } from "@/utills/formvalidation/FormValidation";
import { getLocalStorage } from "@/utills/LocalStorageUtills";
import { signupgoogle } from "@/constant/optimizedFunction/loginFunction/LoginFunction"; // Adjust path based on your project
import { changePasswordApi } from "@/utills/service/authService";
import toast from "react-hot-toast";

const ConfirmPassword = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(conformPassword) });

  const handleGoogleSignup = () => {
    signupgoogle(navigate);
  };

  const userRole = getLocalStorage("user")?.user?.Activeprofile;
  console.log(userRole);

  const onSubmit = async (formData) => {
    try {
      const response = await changePasswordApi(params?.id, formData);
      if (response?.isSuccess) {
        toast.success(response?.message)
        navigate("/auth/login");
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
          <h1>Create New Password</h1>
          <p className="text-grey-800">Your new password must be different from the previous password you used.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="pt-4">
            <label htmlFor="newPassword" className="label">
              New Password
            </label>
            <br />
            <input className="input mt-2" type="text" placeholder="Enter your new password" name="newPassword" id="newPassword" {...register("newPassword")} />
            <p className="text-[red]">{errors?.newPassword?.message}</p>
          </div>
          <div className="pt-4">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <br />
            <input className="input" type="text" placeholder="Re-enter your new password" name="confirmPassword" id="confirmPassword" {...register("confirmPassword")} />
            <p className="text-[red]">{errors?.confirmPassword?.message}</p>
          </div>
          <div className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">
            <button type="submit">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPassword;
