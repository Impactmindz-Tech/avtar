import axiosInstance from "../AxiosInstance";

export const loginApi = async (payload) => {
  try {
    const res = await axiosInstance.post("/user/login", payload);
    return res.data;
  } catch (error) {}
};

export const registrationApi = async (payload) => {
  try {
    const res = await axiosInstance.post("/user/Adduser", payload);
    return res.data;
  } catch (error) {}
};

export const userRoleApi = async (id , payload) => {
  try {
    const res = await axiosInstance.post("/user/userprofile/" + id , payload)
    return res.data;
  } catch (error) {}
};

export const addAddressApi = async (id , payload) => {
  try {
    const res = await axiosInstance.post("/user/addprofile/" + id , payload)
    return res.data;
  } catch (error) {}
};
