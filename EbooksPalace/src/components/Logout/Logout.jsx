import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LogoutButton = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        toast.success('Se cerro sesión correctamente', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        setTimeout(() => {
            logout({ returnTo: window.location.origin });
        }, 3000); // Espera para mostrar el toast antes de redirigir
    };

     return (
        <div>
            <ToastContainer />
            <button className='button' onClick={handleLogout}>Logout</button>
        </div>
    );
}