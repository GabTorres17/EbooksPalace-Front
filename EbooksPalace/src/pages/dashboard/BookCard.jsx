import React from 'react';
import style from "./BookCard.module.css";

const BookCard = ({ book }) => {
    
  return (
    <div className={style.card}>
      <div className={style.cardbody}>
        <h5 className={style.cardtitle}>Nombre:<br/> {book.name}</h5>
        <p className={style.cardtext}>Author: {book.author}</p>
      </div>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  );
};

export default BookCard;
