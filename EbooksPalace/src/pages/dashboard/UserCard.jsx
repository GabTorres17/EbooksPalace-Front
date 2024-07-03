// UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Role: {user.role}</p>
      </div>
    </div>
  );
};

export default UserCard;
