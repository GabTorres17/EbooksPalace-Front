import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import styles from './ProductCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ id, name, price, image }) => {

  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (isLoading) {
      return;
    }

    if (!isAuthenticated) {
      setError('Usuario no autenticado. Por favor, inicie sesión.');
      await loginWithRedirect();
      return;
    }

    try {
      const storedUserProfile = localStorage.getItem('userProfile');
      if (!storedUserProfile) {
        setError('Usuario no autenticado. Por favor, inicie sesión.');
        await loginWithRedirect();
        return;
      }

      const parsedUserProfile = JSON.parse(storedUserProfile);
      const userId = parsedUserProfile.id;

      const product = {
        userId,
        bookId: id,
        amount: 1,
      };

      await dispatch(addToCart(product));

      setError('');
      toast.success('Producto agregado al carrito!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // navigate('/cartitem');

    } catch (error) {
      setError(error.response?.data?.message || 'Error al agregar el libro al carrito');
      toast.error('Error al agregar el libro al carrito', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className={styles.card}>
      <ToastContainer />
      <Link className={styles.Info} to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <div className={styles.details}>
          <h3>{name}</h3>
          <div className={styles.price}><p>{`$${price}`}</p></div>
        </div>
      </Link>
      <button onClick={handleAddToCart}>Añadir al Carrito</button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ProductCard;
