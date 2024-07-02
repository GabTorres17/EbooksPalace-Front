import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess = () => {
    const { user } = useAuth0();
    const navigate = useNavigate();
    const location = useLocation();

    const userLS = JSON.parse(localStorage.getItem('userProfile'));
    const userId = userLS.id;

    useEffect(() => {
        const updateCartStatus = async () => {
            try {
                const resp = await axios.get('http://localhost:3001/carts');
                if (!resp.data || resp.data.length === 0) {
                    console.error("No se encontraron carritos");
                    return;
                }

                let cartId = null;

                resp.data.forEach(cart => {
                    if (cart.userId === userId && cart.status === 'Activo') {
                        cartId = cart.id;
                        console.log(`Usuario: ${userId}, Carrito encontrado: ${cartId}`);
                    }
                });

                if (!cartId) {
                    console.error(`No se encontró un carrito activo para el usuario ${userId}`);
                    return;
                }

                const response = await axios.put(`http://localhost:3001/carts/${cartId}/status`);

                if (response.status === 200) {
                    console.log('Estado del carrito actualizado exitosamente');
                    navigate('/home');
                } else {
                    console.error('Error al actualizar el estado del carrito:', response.data.message);
                }
            } catch (error) {
                console.error('Error actualizando el estado del carrito:', error.message);
            }
        };

        if (user) {
            updateCartStatus();
        }
    }, [user, userId, location.search, navigate]);

    return (
        <div>
            <h1>Pago exitoso!</h1>
            <p>¡Gracias por tu compra!</p>
        </div>
    );
};

export default PaymentSuccess;
