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

            try {
                const response = await axios.post('http://localhost:3001/userverify', {
                    name: user.name,
                    email: user.email,
                    profilePicture: user.picture,
                });

                if (response.status === 400) {
                    console.log("Faltan datos al momento de la creación");
                } else if (response.status === 200) {
                    dispatch(setUserProfile(response.data.existingUser));
                    localStorage.setItem('userProfile', JSON.stringify(response.data.existingUser)); // Guardar en localStorage
                } else if (response.status === 201) {
                    dispatch(setUserProfile(response.data.newUser));
                    localStorage.setItem('userProfile', JSON.stringify(response.data.newUser)); // Guardar en localStorage
                }
            } catch (error) {
                console.error("Error al verificar/crear usuario:", error.response ? error.response.data : error.message);
            }
        };

        const storedUserProfile = localStorage.getItem('userProfile');
        if (storedUserProfile) {
            try {
                const parsedUserProfile = JSON.parse(storedUserProfile);
                dispatch(setUserProfile(parsedUserProfile));
            } catch (error) {
                console.error("Error parsing userProfile from localStorage:", error.message);
                localStorage.removeItem('userProfile');
            }
        } else if (!isLoading && isAuthenticated && user) {
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
