import axios from "axios";

const getAllUsers = async () => {
  
    const response = await axios.get(`http://localhost:3001/users`)
//     console.log(response.data);
    return response.data
};

const userAdmin = async () => {

    const response = await axios.put(`http://localhost:3001/users/${id}/status/admin`);
    // console.log(response.data);
    return response.data;
};

const userCustomer = async () => {

    const response = await axios.put(`http://localhost:3001/users/${id}/status/customer`)
    return response.data;
};

const userBan = async () => {

    const response = await axios.put(`http://localhost:3001/users/${id}/status/ban`)
    return response.data;
};

export default getAllUsers;

