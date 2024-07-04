import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateBan = () => {
  const userl = JSON.parse(localStorage.getItem('userProfile'))
  if (userl?.role === 'Baneado') {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default PrivateBan;