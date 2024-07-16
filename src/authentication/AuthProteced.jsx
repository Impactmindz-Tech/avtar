import { getLocalStorage } from '@/utills/LocalStorageUtills'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthProteced = () => {
    const user = getLocalStorage('token')
    return (
        user ? <Navigate to='/user/dashboard/' /> : <Outlet />
    )
}

export default AuthProteced