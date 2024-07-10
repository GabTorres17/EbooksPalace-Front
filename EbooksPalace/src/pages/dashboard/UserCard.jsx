import React from 'react';
import { userRole, userBan } from './CheckUsers';
import s from "./UserCard.module.css";

const UserCard = ({ user, onUpdate }) => {

  const handleRole = async (e) => {
    e.preventDefault();
    await userRole(user.id);
    onUpdate();
  };

  const handleBan = async (e) => {
    e.preventDefault();
    await userBan(user.id);
    onUpdate();
  };


  return (
    <div className={s.card}>
      <h5 className={s.cardTitle}>Nombre: {user.name}</h5>
      <p className={s.cardText}>Correo: {user.email}</p>
      <p className={s.cardText}>Rol: {user.role}</p>
      <button onClick={handleRole} > {user.role === 'Administrador' ? 'Quitar admin' : 'Hacer admin'} </button>
      <button onClick={handleBan} > {user.role === 'Baneado' ? 'Restablecer usuario' : 'Banear usuario'} </button>

    </div>
  );
};

export default UserCard;
