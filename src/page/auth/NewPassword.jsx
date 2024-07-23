import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "../../constant/Images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signupgoogle } from "@/constant/optimizedFunction/loginFunction/LoginFunction"; // Adjust path based on your project
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "@/utills/formvalidation/FormValidation";
import { getLocalStorage, setLocalStorage } from "@/utills/LocalStorageUtills";
import { loginApi } from "@/utills/service/authService";

const NewPassword = () => {
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
    <div className="max-w-[50%] mx-auto">
      <h1>AvatarWalk</h1>
      <div className="pt-10">
        <div className="my-5">
          <h1>Create New Password</h1>
          <p className="text-grey-800">Your new password must be different from the previous password you used.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="pt-4">
            <label htmlFor="password" className="label">
              New Password
            </label>
            <br />
            <input className="input mt-2" type="password" placeholder="must be 8  characters" name="password" id="password" {...register("password")} />
          </div>
          <p className="text-[red]">{errors?.password?.message}</p>
          <div className="pt-4">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <br />
            <input className="input" type="text" placeholder="repost password" name="confirmPassword" id="confirmPassword" {...register("confirmPassword")} />
          </div>

          <div className="cursor-pointer w-full bg-primaryColor-900 p-4 text-center text-white mt-8 rounded-xl">
            <button>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
