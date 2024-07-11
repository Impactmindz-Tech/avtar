import AuthLayout from "@/Layout/AuthLayout";
import Address from "@/page/auth/Address";
import Login from "@/page/auth/Login";
import Role from "@/page/auth/Role";
import SignUp from "@/page/auth/SignUp";
import { useEffect } from "react";
import Home from "../page/user/Home";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import Filters from "@/page/user/Filters";
import Report from "@/page/user/Report";
import Book_Experience from "@/page/user/Book_Experience";
import See_All_Review from "@/page/user/See_All_Review";
import Booking from "@/page/user/Booking";
import Confirm_Pay from "@/page/user/Confirm_Pay";
import Payment_Status from "@/page/user/Payment_Status";
import Experience from "@/page/user/Experience";

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/auth/login");
  }, [navigate]);

  return null; // Root component doesn't render any content
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/auth",
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
    // element: <Root />,
    children: [
      {
        path: "home",
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
    ],
  },
]);

export default router;
