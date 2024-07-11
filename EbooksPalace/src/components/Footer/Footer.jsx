import React from 'react';
import './Footer.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Datos de la Empresa</h3>
        <p>Ebooks Palace</p>
        <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        <p>Teléfono: +123 456 7890</p>
        <p>Email: contacto@empresa.com</p>
      </div>
      <div className="footer-section">
        <h3>Redes Sociales</h3>
        <p><a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p><a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        <p><a href="https://www.twitter.com/tuempresa" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <p><a href="https://www.linkedin.com/tuempresa" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
      <div className="footer-section">
        <h3>Información de Compra</h3>
        <p>Para comprar, visita nuestra tienda en línea o contacta a nuestro equipo de ventas.</p>
        <p><a href="/home">Visitar Tienda</a></p>
      </div>
    </footer>
  );
};

export default FooterComponent;
