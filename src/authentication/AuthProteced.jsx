import { getLocalStorage } from "@/utills/LocalStorageUtills";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthProteced = () => {
  const user = getLocalStorage("token");
  const activateProfile = getLocalStorage("user");
  return user ? activateProfile.Activeprofile == "user" ? <Navigate to="/user/dashboard/" /> : <Navigate to="/avtar/dashboard/" /> : <Outlet />;
};

export default AuthProteced;
