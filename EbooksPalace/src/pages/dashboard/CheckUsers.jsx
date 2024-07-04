import axios from "axios";

const getAllUsers = async () => {

    const response = await axios.get(`http://localhost:3001/users`)
    //     console.log(response.data);
    return response.data
};

const userRole = async (id) => {

    const response = await axios.put(`http://localhost:3001/users/${id}/status/rol`);
    console.log(response.data);
    return response.data;
};


const userBan = async (id) => {

    const response = await axios.put(`http://localhost:3001/users/${id}/status/ban`)
    console.log(response.data);
    return response.data;
};

export { getAllUsers, userRole, userBan };
