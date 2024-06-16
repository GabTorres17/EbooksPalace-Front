// src/components/ProductCard.js

import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = (product) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.detail}>{product.detail}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
