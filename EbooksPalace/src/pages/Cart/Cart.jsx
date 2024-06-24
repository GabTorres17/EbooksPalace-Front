import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../../redux/actions';
import { Link } from 'react-router-dom';
import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.cart);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {s
    dispatch(updateQuantity(itemId, quantity));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(items);
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
              <li>
                {item.image}
                {item.name} {item.quantity}
              </li>
            </div>
            {/* <div>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
            </div> */}
          </div>
        ))}
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
      <button onClick={() => handleAddToCart({ userId: 1, bookId: 15, amount: 0 })}>Add to Cart</button>
    </div>
  );
};

export default Cart;
