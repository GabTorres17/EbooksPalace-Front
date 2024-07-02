import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, emptyCart } from '../../redux/actions';
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
  };

  const handleClearCart = () => {
    const storedUserProfile = localStorage.getItem('userProfile');
    if (!storedUserProfile) {
      console.error('Usuario no autenticado. Por favor, inicie sesión.');
      return;
    }
    const { id: userId } = JSON.parse(storedUserProfile);
    dispatch(emptyCart(userId));
  };

  if (!Array.isArray(items) || items.length === 0) {
    return <div>No hay artículos en el carrito.</div>;
  };

  return (
    <div>
      <h2 className={styles.Title}>Carrito de compras disponible para ser comprado</h2>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <div>
              <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}

        <Link to="/checkout"><button>Comprar</button></Link>
      </div>
      <button onClick={handleClearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
