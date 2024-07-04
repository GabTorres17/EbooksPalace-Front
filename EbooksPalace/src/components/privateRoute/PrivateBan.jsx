import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateBan = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
    return null; // O muestra un spinner o mensaje de carga mientras redirige
  }

  // Verifica si el usuario tiene el rol de 'Administrador'
  if (user?.role === 'Baneado') {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default PrivateBan;