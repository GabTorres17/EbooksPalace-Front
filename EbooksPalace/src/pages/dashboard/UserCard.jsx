import React from 'react';
import { userAdmin, userBan, userCustomer } from './CheckUsers';

const UserCard = ({ user, onUpdate }) => {

  const handleAdmin = async () => {
    await userAdmin(user.id);
    onUpdate();
  };

  const handleBan = async () => {
    await userBan(user.id);
    onUpdate();
  };

  const handleNormalUser = async () => {
    await userCustomer(user.id);
    onUpdate();
  };

  return (
    <div className="card">
      <h5 className="card-title">Nombre: {user.name}</h5>
      <p className="card-text">Correo: {user.email}</p>
      <p className="card-text">Rol: {user.role}</p>
      <button onClick={handleAdmin} disabled={user.role === "Administrador"}> Hacer admin </button>
      <button onClick={handleBan} disabled={user.role === "Baneado"}> Banear usuario </button>
      <button onClick={handleNormalUser} disabled={user.role === "Cliente"}> Desbanear / Quitar Admin </button>
    </div>
  );
};

export default UserCard;
