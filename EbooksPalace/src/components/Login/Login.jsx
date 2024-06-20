import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const LoginButton = ({ setUserProfile }) => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect();

        if (!isLoading && isAuthenticated) {
            console.log("User data:", user);
        }
        try {
            const response = await axios.post('http://localhost:3001/userverify');
            if (response.status === 400) {
                console.log("Faltan datos al momento de la creación")
            }
            if (response.status === 200 || response.status === 201) {
                console.log("Este usuario ya existe en la base de datos")
                setUserProfile(response.data.newUser)
            }
        } catch (error) {
            console.error("Error al verificar/crear usuario:", error.response ? error.response.data : error.message);
        }
    };

    return <button onClick={handleLogin}>Login</button>
};