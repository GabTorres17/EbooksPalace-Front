import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect();
    };


    return <button onClick={handleLogin}>Ingrese a su Cuenta</button>
};