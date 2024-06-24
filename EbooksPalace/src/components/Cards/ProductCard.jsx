import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image,}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleAddToCart = async () => {
    try {
      const product = {
        userId: 1, // Ajusta esto para obtener el ID del usuario actual
        bookId: id, // Debes asegurarte de que 'id' esté correctamente definido
        amount: 1, // Cantidad por defecto, ajusta según sea necesario
        image: image,
       price: price,

      };
 
      const response = await dispatch(addToCart(product));
  
      // Verifica si la respuesta contiene los datos actualizados del carrito
      console.log('Carrito actualizado:', response);
  
      setError(''); // Limpia el estado de error si no hay problemas
    } catch (error) {
      setError(error.response?.data?.message || 'Error al agregar el libro al carrito');
    }
  };
  

  return (
    <div className={styles.card}>
      <Link className={styles.Info} to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <div className={styles.details}>
          <h3>{name}</h3>
          <div className={styles.price}><p>{`$${price}`}</p></div>
        </div>
      </Link>
      
      <Link to={`/cartitem`} ><button onClick={handleAddToCart}>Add to Cart</button></Link>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ProductCard;
