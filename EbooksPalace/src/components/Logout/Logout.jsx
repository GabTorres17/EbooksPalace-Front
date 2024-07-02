import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return <button onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</button>
}