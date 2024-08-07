import axiosInstance from "@/utills/AxiosInstance";

export const getavatarChatApi = async () => {
  try {
    const res = await axiosInstance.get("/user/getavatar");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
