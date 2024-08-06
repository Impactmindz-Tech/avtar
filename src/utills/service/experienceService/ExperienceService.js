import axiosInstance from "@/utills/AxiosInstance";

export const experienceGetrequestsApi = async (status) => {
  // const status = payload?.status;
  try {
    const res = await axiosInstance.get("/user/expStatus?status=" + status);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
