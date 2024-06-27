import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../../redux/actions';
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.cart);
  // console.log(items);

  const handleRemoveItem = (id) => {
    const storedUserProfile = localStorage.getItem('userProfile');
    if (!storedUserProfile) {
      console.error('Usuario no autenticado. Por favor, inicie sesión.');
      return;
    }
    const { id: userId } = JSON.parse(storedUserProfile);
    console.log('ID del usuario:', userId); // Agrega este console.log para verificar el ID de usuario
    console.log('ID del libro a eliminar:', id);
    dispatch(removeItem(userId, id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!Array.isArray(items) || items.length === 0) {
    return <div>No hay artículos en el carrito.</div>;
  }

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
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}

        <Link to="/checkout"><button>Comprar</button></Link>
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
