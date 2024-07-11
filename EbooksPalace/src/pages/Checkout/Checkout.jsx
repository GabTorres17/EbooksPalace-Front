import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Checkout.module.css';

const Checkout = () => {
  const items = useSelector(state => state.cart.cart);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Pedido realizado! Recibirás una confirmación por correo electrónico.");
      toast.success('¡Pedido realizado con éxito!', {
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

    if (query.get("canceled")) {
      setMessage("Pedido cancelado -- continúa comprando y realiza el checkout cuando estés listo.");
      toast.error('¡Pedido cancelado!', {
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
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await fetch("https://ebookspalace.onrender.com/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(items)
      });

      if (response.ok) {
        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          console.error("Error: URL de redirección no encontrada.");
        }
      } else {
        console.error("Error en la respuesta del servidor:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={styles.shoppingCart}>
        <h2 className={styles.title}>Resumen de Compra</h2>
        <div>
          {items.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartItemImage} />
              <div className={styles.cartItemDetails}>
                <h3>{item.name}</h3>
                <h5>${item.price}</h5>
              </div>
            </div>
          ))}
          <button className={styles.checkoutButton} onClick={handleCheckout}>
            Proceder al Checkout
          </button>
        </div>
      </div>
      <ToastContainer />
      {message && (
        <div className={styles.messageBox}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default Checkout;

