import { getLocalStorage } from '@/utills/LocalStorageUtills';
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthProtected = () => {
  const token = getLocalStorage('token');
  const currentState = getLocalStorage('user')?.Activeprofile;

  if (token) {
    switch (currentState) {
      case 'user':
        return <Navigate to='/user/dashboard' replace />;
      case 'avatar':
        return <Navigate to='/avatar/dashboard' replace />;
      default:
        return <Navigate to='/user/dashboard' replace />;
    }
  }

  return <Outlet />;
};

export default AuthProtected;
