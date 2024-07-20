import { createBrowserRouter, useNavigate } from "react-router-dom";
import AuthLayout from "@/Layout/AuthLayout";
import UserProtected from "@/authentication/UserProtected";
import AvatarProtected from "@/authentication/AvatarProtected";
import Login from "@/page/auth/Login";
import SignUp from "@/page/auth/SignUp";
import Role from "@/page/auth/Role";
import Address from "@/page/auth/Address";
import Home from "@/page/user/home/Home";
import Filters from "@/page/user/Filters";
import Report from "@/page/user/Report";
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
import AvtarHome from "@/page/avtar/AvtarHome";
import AuthProtected from "@/authentication/AuthProteced";
import { getLocalStorage } from "@/utills/LocalStorageUtills";
import { useEffect } from "react";
import Profile from "@/page/user/profile/Profile";
import EditProfile from "@/page/user/profile/Edit_Profile";
import Book_Experience_Details from "@/page/user/home/Book_Experience_Details";
import DashboardLayout from "@/Layout/DashboardLayout";
import AvatarLayout from "@/Layout/AvatarLayout";

const Root = () => {
  const navigate = useNavigate();
  const token = getLocalStorage("token");
  const currentState = getLocalStorage("user")?.Activeprofile; // 'auth', 'user', 'avatar'

  useEffect(() => {
    if (!token) {
      navigate("/auth/login", { replace: true });
    } else {
      switch (currentState) {
        case "user":
          navigate("/user/dashboard", { replace: true });
          break;
        case "avatar":
          navigate("/avatar/dashboard", { replace: true });
          break;
        default:
          navigate("/auth/login", { replace: true });
      }
    }
  }, [token, currentState, navigate]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/auth",
    element: <AuthProtected />,
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
        path: "role/:user",
        element: (
          <AuthLayout>
            <Role />
          </AuthLayout>
        ),
      },
      {
        path: "address/:id",
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
    element: <UserProtected />,
    children: [
      {
        path: "dashboard",
        element: (
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        ),
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
        path: "book-experience/:id",
        element: <Book_Experience_Details />,
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
  {
    path: "/avatar",
    element: <AvatarProtected />,
    children: [
      {
        path: "dashboard",
        element: (
          <AvatarLayout>
            <AvtarHome />
          </AvatarLayout>
        ),
      },
    ],
  },
]);

export default router;
