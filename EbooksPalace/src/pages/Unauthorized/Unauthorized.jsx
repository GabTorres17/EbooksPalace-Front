// src/pages/Unauthorized/Unauthorized.jsx
import React from 'react';
import style from './Unauthorized.module.css'

const Unauthorized = () => {
  return (
    <div className={style.Denegado}>
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
