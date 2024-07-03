// BookCard.jsx
import React from 'react';
import style from "./BookCard.module.css"
const BookCard = ({ book }) => {
    
  return (
    <div className={style.card}>
      <div className={style.cardbody}>
        <h5 className={style.cardtitle}>{book.name}</h5>
        <p className={style.cardtext}>Author: {book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
