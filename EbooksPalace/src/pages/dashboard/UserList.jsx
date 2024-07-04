import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import getAllUsers  from './CheckUsers';
import { Link } from 'react-router-dom';
import  style from "./Dashboard.module.css";
const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className={style.UserList}>
      <div>
        <Link  to="/admin">
          <button>Atras</button>
        </Link>
      </div>
      <div>
        <h1>Lista de Usuarios</h1>
      </div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
