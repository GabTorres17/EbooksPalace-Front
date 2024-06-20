import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            console.log("User data from profile:", user);
        }
    }, [isLoading, isAuthenticated, user]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        )
    )
}