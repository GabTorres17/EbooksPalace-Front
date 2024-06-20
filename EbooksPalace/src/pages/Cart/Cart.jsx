import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../../redux/actions';
import { Link } from 'react-router-dom';
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);

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

  return (
    <div>
      <h2>Cart</h2>
      <Link to="/home">
          <button>Home</button>
        </Link>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
      <button onClick={() => handleAddToCart({ id: 1, name: 'New Item' })}>Add to Cart</button>
    </div>
  );
};

export default Cart;
