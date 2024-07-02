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

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         toast.success('Se inició sesión correctamente', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             transition: Bounce,
    //         });
    //     }
    // }, [isAuthenticated]);

    return (
        <div>
            {/* <ToastContainer /> */}
            <button className='button' onClick={handleLogin}>Login</button>
        </div>
    );
};
