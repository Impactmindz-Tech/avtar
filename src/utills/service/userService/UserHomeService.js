import axiosInstance from "@/utills/AxiosInstance";

export const userExperienceApi = async () => {
  try {
    const res = await axiosInstance.get("/user/getExperience");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const userExperienceListApi = async (id) => {
  try {
    const res = await axiosInstance.get("/user/getdetailExp/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
