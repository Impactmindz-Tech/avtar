import { getLocalStorage } from '@/utills/LocalStorageUtills'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const DashboardProtected = () => {
    const admin = getLocalStorage('token')
    return (
        admin ? <Outlet /> : <Navigate to='/auth/login/' />
    )
}

export default DashboardProtected