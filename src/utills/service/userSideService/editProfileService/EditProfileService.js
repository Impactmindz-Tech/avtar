import axiosInstance from "@/utills/AxiosInstance";

export const editProfileApi = async (id, payload) => {
  try {
    const res = await axiosInstance.patch("/user/addProfile/" + id, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
