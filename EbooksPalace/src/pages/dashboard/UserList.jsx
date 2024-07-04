import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { getAllUsers } from './CheckUsers';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <div>
        <Link to="/admin">
          <button>Atras</button>
        </Link>
      </div>
      <div>
        <h1>Lista de Usuarios</h1>
      </div>
      {users.map(user => (
        <UserCard key={user.id} user={user} onUpdate={fetchUsers} />
      ))}
    </div>
  );
};

export default UserList;
