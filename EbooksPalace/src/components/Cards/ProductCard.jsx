import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, author, editorial, price, category, image, description }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ name, price, quantity: 1 }));
  };

  return (

    <div className={styles.card}>
      <Link className={styles.Info} to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <div className={styles.details}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </Link>
      
      <Link to="/cartbuy" ><button onClick={handleAddToCart}>Add to Cart</button></Link>
    </div>
  );
};

export default ProductCard;
