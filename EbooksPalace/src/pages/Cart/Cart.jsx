import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, emptyCart } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.cart);

  const handleRemoveItem = (id) => {
    const storedUserProfile = localStorage.getItem('userProfile');
    if (!storedUserProfile) {
      console.error('Usuario no autenticado. Por favor, inicie sesión.');
      return;
    }
    const { id: userId } = JSON.parse(storedUserProfile);
    dispatch(removeItem(userId, id));
    toast.success('Se removió el libro del carrito', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleClearCart = () => {
    const storedUserProfile = localStorage.getItem('userProfile');
    if (!storedUserProfile) {
      console.error('Usuario no autenticado. Por favor, inicie sesión.');
      return;
    }
    const { id: userId } = JSON.parse(storedUserProfile);
    dispatch(emptyCart(userId));
    toast.success('Se borró todo el carrito', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (!Array.isArray(items) || items.length === 0) {
    return <div className={styles["shopping-cart"]}>No hay artículos en el carrito.</div>;
  }

  return (
    <div className={styles["shopping-cart"]}>
      <h2 className={styles.Title}>Carrito de compras disponible para ser comprado</h2>
      <div>
        {items.map((item) => (
          <div key={item.id} className={styles["cart-item"]}>
            <img src={item.image} alt={item.name} />
            <div className={styles["cart-item-details"]}>
              <p>{item.name}</p>
              <p>Precio: ${item.price}</p>
            </div>
            <button className={styles["remove-button"]} onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </div>
        ))}

        <div className={styles["buttons-container"]}>
          <Link to="/checkout" className={styles["link-to-checkout"]}><button>Comprar</button></Link>
          <button onClick={handleClearCart}>Vaciar Carrito</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
