import axios from "axios";

const getAllUsers = async () => {

    const response = await axios.get(`https://ebookspalace.onrender.com/users`)
    //     console.log(response.data);
    return response.data
};

const userRole = async (id) => {

    const response = await axios.put(`https://ebookspalace.onrender.com/users/${id}/status/rol`);
    console.log(response.data);
    return response.data;
};


const userBan = async (id) => {

    const response = await axios.put(`https://ebookspalace.onrender.com/users/${id}/status/ban`)
    console.log(response.data);
    return response.data;
};

export { getAllUsers, userRole, userBan };

