import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../../redux/actions';
import { Link } from 'react-router-dom';
import styles from "./Cart.module.css"
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartBuy);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity(itemId, quantity));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!Array.isArray(items)) {
    return <div>No hay artículos en el carrito.</div>;
  }

  return (
    <div>
      <h2 className={styles.Title}>Carrito de compras disponible para ser comprado</h2>
      <div>
        {items.map((item) => (
          <div>
            <div>
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
              </li>
            </div>
            <div>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            </div>
          </div>
        ))}
     </div>

      <button onClick={handleClearCart}>Clear Cart</button>
      <button onClick={() => handleAddToCart({ id: 1, name: 'New Item' })}>Add to Cart</button>
    </div>
  );
};

export default Cart;
