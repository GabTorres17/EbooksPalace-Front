// UserList.jsx
import React, { useEffect, useState } from 'react';
import  CheckUsers  from './CheckUsers';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await CheckUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
