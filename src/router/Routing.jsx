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
import ExperiencePage from "@/page/avtar/Experience/ExperiencePage";
import OffersPage from "@/page/avtar/Offers/OffersPage";
import ProfilePageAvatar from "@/page/avtar/Profile/ProfilePage";
import EditProfileAvatar from "@/page/avtar/Profile/EditProfileAvatar";
import ChatPageAvatar from "@/page/avtar/Chat/ChatPage";
import ChatWithUser from "@/page/avtar/Chat/ChatWithUser";
import BankAccountPage from "@/page/avtar/Bank/BankAccountPage";
import StripeAccountPage from "@/page/avtar/Bank/StripeAccountPage";
import AccountInfoPage from "@/page/avtar/AccountInfoPage";
import InstantCashPage from "@/page/avtar/Bank/InstantCashPage";
import AddNewExperiencePage from "@/page/avtar/Experience/AddNewExperiencePage";
import AddNewExperienceNewPage from "@/page/avtar/Experience/AddNewExperienceNewPage";
import EditExperiencePage from "@/page/avtar/Experience/EditExperiencePage";
import AddExperienceWithImagePage from "@/page/avtar/Experience/AddExperienceWithImage";
import EarningPage from "@/page/avtar/Earnings/EarningPage";
import PerformancePage from "@/page/avtar/performance/PerformancePage";
import RecordedPage from "@/page/user/record/RecordedPage";
import AccountInfo from "@/page/user/AccountInfo";
import ChatAndSupport from "@/page/user/chatandsupport/ChatAndSupport";
import Notification from "@/page/user/Notification";
import AvatarProfile from "@/page/user/avatar/AvatarProfile";
import PaymentPage from "@/page/user/Payment";
import Offers from "@/page/user/offers/OffersPage";
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
        path: "recorded",
        element: (
          <DashboardLayout>
            <RecordedPage />
          </DashboardLayout>
        ),
      },
      {
        path: "offers",
        element: (
          <DashboardLayout>
            <Offers />
          </DashboardLayout>
        ),
      },
      {
        path: "account-info",
        element: (
          <DashboardLayout>
            <AccountInfo />
          </DashboardLayout>
        ),
      },
      {
        path: "chat-support",
        element: (
          <DashboardLayout>
            <ChatAndSupport />
          </DashboardLayout>
        ),
      },
      {
        path: "avatar-profile",
        element: (
          <DashboardLayout>
            <AvatarProfile />
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
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "see-all-review",
        element: <See_All_Review />,
      },
      {
        path: "notification",
        element: <Notification />,
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
      {
        path: "experience",
        element: (
          <AvatarLayout>
            <ExperiencePage />
          </AvatarLayout>
        ),
      },
      {
        path: "offers",
        element: (
          <AvatarLayout>
            <OffersPage />
          </AvatarLayout>
        ),
      },
      {
        path: "profile",
        element: (
          <AvatarLayout>
            <ProfilePageAvatar />
          </AvatarLayout>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <AvatarLayout>
            <EditProfileAvatar />
          </AvatarLayout>
        ),
      },
      {
        path: "chat",
        element: (
          <AvatarLayout>
            <ChatPageAvatar />
          </AvatarLayout>
        ),
      },
      {
        path: "chatwithuser",
        element: (
          <AvatarLayout>
            <ChatWithUser />
          </AvatarLayout>
        ),
      },
      {
        path: "bank",
        element: (
          <AvatarLayout>
            <BankAccountPage />
          </AvatarLayout>
        ),
      },
      {
        path: "stripe",
        element: (
          <AvatarLayout>
            <StripeAccountPage />
          </AvatarLayout>
        ),
      },
      {
        path: "account-info",
        element: (
          <AvatarLayout>
            <AccountInfoPage />
          </AvatarLayout>
        ),
      },
      {
        path: "instant-cash",
        element: (
          <AvatarLayout>
            <InstantCashPage />
          </AvatarLayout>
        ),
      },
      {
        path: "add-experience",
        element: (
          <AvatarLayout>
            <AddNewExperiencePage />
          </AvatarLayout>
        ),
      },
      {
        path: "add-new-experience",
        element: (
          <AvatarLayout>
            <AddNewExperienceNewPage />
          </AvatarLayout>
        ),
      },
      {
        path: "edit-experience",
        element: (
          <AvatarLayout>
            <EditExperiencePage />
          </AvatarLayout>
        ),
      },
      {
        path: "add-experience-image",
        element: (
          <AvatarLayout>
            <AddExperienceWithImagePage />
          </AvatarLayout>
        ),
      },
      {
        path: "earnings",
        element: (
          <AvatarLayout>
            <EarningPage />
          </AvatarLayout>
        ),
      },
      {
        path: "performance",
        element: (
          <AvatarLayout>
            <PerformancePage />
          </AvatarLayout>
        ),
      },
    ],
  },
]);

export default router;
