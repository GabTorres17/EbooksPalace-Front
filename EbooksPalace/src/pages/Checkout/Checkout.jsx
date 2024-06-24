import React, { useState, useEffect } from "react";
import "./Checkout.css";

const ProductDisplay = ({ handleCheckout }) => (
    <section>
        <div className="product">
            <img
                src="https://i.imgur.com/EHyR2nP.png"
                alt="The cover of Stubborn Attachments"
            />
            <div className="description">
                <h3>Stubborn Attachments</h3>
                <h5>$20.00</h5>
            </div>
        </div>
        <button onClick={handleCheckout}>
            Checkout
        </button>
    </section>
);

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Checkout() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    const handleCheckout = async () => {
        try {
            const response = await fetch("http://localhost:3001/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.url) {
                    window.location.href = data.url;  // Redirigir a la URL de Stripe
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

    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay handleCheckout={handleCheckout} />
    );
}
