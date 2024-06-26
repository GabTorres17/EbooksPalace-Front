import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItem, updateQuantity, clearCart } from '../../redux/actions';
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.cart);
  // console.log(items);

  const handleRemoveItem = (bookId) => {
    dispatch(removeItem(bookId));
  };

  // const handleUpdateQuantity = (itemId, quantity) => {s
  //   dispatch(updateQuantity(itemId, quantity));
  // };

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
              <img src={item.image} />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <div>
              <button onClick={() => handleRemoveItem(item.bookId)}>Remove</button>
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
