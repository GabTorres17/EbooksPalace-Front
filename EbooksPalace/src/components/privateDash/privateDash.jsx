import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';

const DashRoute = () => {
 
const userl = JSON.parse(localStorage.getItem('userProfile'))

  // Verifica si el usuario tiene el rol de 'Administrador'
  if (userl?.role === 'Cliente') {

    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default DashRoute;