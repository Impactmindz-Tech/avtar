import axiosInstance from "@/utills/AxiosInstance";

export const switchProfile = async (payload) => {
  try {
    const res = await axiosInstance.post("/user/switchProfile" ,payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
