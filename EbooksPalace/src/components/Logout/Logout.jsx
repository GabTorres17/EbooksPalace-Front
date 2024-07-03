import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; // Importar Bounce si no se ha importado aún
import './logout.css'; // Importar el archivo CSS creado

export const LogoutButton = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
        toast.success('¡Se cerró la sesión correctamente!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce, // Usar la transición Bounce
        });
    };

    return (
        <>
            <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
            <ToastContainer />
        </>
    );
}

