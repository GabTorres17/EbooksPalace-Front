import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { setUserProfile } from "../../redux/actions";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const userProfile = useSelector((state) => state.user.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserProfile = async () => {

            console.log("Datos del usuario completos:", user);

            try {
                const response = await axios.post('http://localhost:3001/userverify', {
                    name: user.name,
                    email: user.email,
                    profilePicture: user.picture,
                });

                if (response.status === 400) {
                    console.log("Faltan datos al momento de la creación");
                } else if (response.status === 200 || response.status === 201) {
                    console.log("Este usuario ya existe en la base de datos");
                    dispatch(setUserProfile(response.data.newUser));
                }
            } catch (error) {
                console.error("Error al verificar/crear usuario:", error.response ? error.response.data : error.message);
            }
        };

        if (!isLoading && isAuthenticated && user) {
            fetchUserProfile();
        }
    }, [isLoading, isAuthenticated, user, dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!userProfile) {
        return <div>No user data available.</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <img src={userProfile.profilePicture} alt={userProfile.name} />
                <h2>{userProfile.name}</h2>
                <p>Email: {userProfile.email}</p>
            </div>
        )
    );
};
