import React from 'react';
import { userRole, userBan } from './CheckUsers';

const UserCard = ({ user, onUpdate }) => {

  const handleRole = async () => {
    await userRole(user.id);
    onUpdate();
  };

  const handleBan = async () => {
    await userBan(user.id);
    onUpdate();
  };


  return (
    <div className="card">
      <h5 className="card-title">Nombre: {user.name}</h5>
      <p className="card-text">Correo: {user.email}</p>
      <p className="card-text">Rol: {user.role}</p>
      <button onClick={handleRole} > {user.role === 'Administrador' ? 'Quitar admin' : 'Hacer admin'} </button>
      <button onClick={handleBan} > {user.role === 'Baneado' ? 'Restablecer usuario' : 'Banear usuario'} </button>

    </div>
  );
};

export default UserCard;