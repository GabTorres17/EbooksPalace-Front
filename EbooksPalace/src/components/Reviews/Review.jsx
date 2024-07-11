import React, { useEffect, useState } from 'react';
import './Review.css'; // Importa tus estilos CSS

const ReviewsComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://ebookspalace.onrender.com/reviews');
        if (!response.ok) {
          throw new Error('Error al obtener las reseñas');
        }
        const data = await response.json();
        setReviews(data); // Asigna las reseñas recibidas del backend al estado local
      } catch (error) {
        console.error('Error al obtener las reseñas:', error);
        // Manejo de errores, como mostrar un mensaje al usuario o registrar el error
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Cambia la reseña cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, reviews.length]); // Asegura que se actualice cuando cambie currentIndex o la longitud de reviews

  const goToNextSlide = () => {
    const newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="reviews-carousel">
      <h2 className="review-title">Reseñas</h2>
      {reviews.length > 0 && (
        <div className="review-item">
          {/* Asegúrate de que reviews[currentIndex] esté definido antes de acceder a sus propiedades */}
          <p className="review-details"> {reviews[currentIndex].user.name}</p>
          <p className="review-content"> {reviews[currentIndex].content}</p>
        </div>
      )}
      {/* Botones para navegar entre reseñas */}
      {/* <button className="carousel-button prev" onClick={goToPrevSlide}>❮</button>
      <button className="carousel-button next" onClick={goToNextSlide}>❯</button> */}
    </div>
  );
};

export default ReviewsComponent;
