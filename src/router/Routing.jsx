import AuthLayout from '@/Layout/AuthLayout';
import Address from '@/page/auth/Address';
import Login from '@/page/auth/Login';
import Role from '@/page/auth/Role';
import SignUp from '@/page/auth/SignUp';
import  { useEffect } from 'react'
import Home from '../page/user/Home'
import { createBrowserRouter, useNavigate } from 'react-router-dom'

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
                element: <AuthLayout><Login /></AuthLayout>,
            },
            {
                path: "signup",
                element: <AuthLayout><SignUp /></AuthLayout>,
            },
            {
                path: "role",
                element: <AuthLayout><Role /></AuthLayout>,
            },
            {
                path: "address",
                element: <AuthLayout><Address /></AuthLayout>,
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
            
        ],
    }
])

export default router