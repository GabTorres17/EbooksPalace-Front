import React from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, author, editorial, price, category, image, description }) => {
  return (
    <Link className={styles.Info} to={`/detail/${id}`}>
      <div className={styles.card} key={id}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.author}>by {author}</p>
          <p className={styles.editorial}>{editorial}</p>
          <p className={styles.category}>{category}</p>
          <p className={styles.price}>${price}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

