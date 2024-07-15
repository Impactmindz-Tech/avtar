import AuthLayout from "@/Layout/AuthLayout";
import Address from "@/page/auth/Address";
import Login from "@/page/auth/Login";
import Role from "@/page/auth/Role";
import SignUp from "@/page/auth/SignUp";
import { useEffect } from "react";
import Home from "../page/user/home/Home";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import Filters from "@/page/user/Filters";
import Report from "@/page/user/Report";
import Book_Experience from "@/page/user/home/Book_Experience";
import See_All_Review from "@/page/user/See_All_Review";
import Booking from "@/page/user/Booking";
import Confirm_Pay from "@/page/user/Confirm_Pay";
import Payment_Status from "@/page/user/Payment_Status";
import Experience from "@/page/user/Experience";
import Update_Experience from "@/page/user/Update_Experience";
import ChatWithAvatar from "@/page/user/ChatWithAvatar";
import RateTour from "@/page/user/RateTour";
import Tip from "@/page/user/Tip";
import Chat from "@/page/user/Chat";
import Profile from "@/page/user/Profile";
import EditProfile from "@/page/user/Edit_Profile";
import { getLocalStorage } from "@/utills/LocalStorageUtills";
import AuthProteced from "@/authentication/AuthProteced";
import DashboardProtected from "@/authentication/DashboardProteced";

const Root = () => {
  const navigate = useNavigate();
  const isAuthenticated = getLocalStorage("token");
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user/dashboard");
    } else {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/auth",
    element: <AuthProteced />,
    children: [
      {
        path: "login",
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "signup",
        element: (
          <AuthLayout>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "role",
        element: (
          <AuthLayout>
            <Role />
          </AuthLayout>
        ),
      },
      {
        path: "address",
        element: (
          <AuthLayout>
            <Address />
          </AuthLayout>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: <DashboardProtected />,
    children: [
      {
        path: "dashboard",
        element: <Home />,
      },
      {
        path: "filters",
        element: <Filters />,
      },
      {
        path: "filters",
        element: <Filters />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "book-experience",
        element: <Book_Experience />,
      },
      {
        path: "see-all-review",
        element: <See_All_Review />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "confirm-and-pay",
        element: <Confirm_Pay />,
      },
      {
        path: "payment-status",
        element: <Payment_Status />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "update-experience",
        element: <Update_Experience />,
      },
      {
        path: "chat-with-avatar",
        element: <ChatWithAvatar />,
      },
      {
        path: "rate-tour",
        element: <RateTour />,
      },
      {
        path: "tip",
        element: <Tip />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
    ],
  },
]);

export default router;
