import axiosInstance from "@/utills/AxiosInstance";
import toast from "react-hot-toast";

export const experienceGetrequestsApi = async (status) => {
  // const status = payload?.status;
  try {
    const res = await axiosInstance.get("/user/expStatus?status=" + status);
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};
