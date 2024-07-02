import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const LoginButton = () => {
    const { loginWithRedirect, isLoading, isAuthenticated, user } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect();
    };


    return <button onClick={handleLogin}>Ingrese a su Cuenta</button>
};