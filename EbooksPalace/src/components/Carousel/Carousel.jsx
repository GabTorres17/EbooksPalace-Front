import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // Archivo CSS para estilos

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://www.bookbaby.com/images/book-printing-hero-books.jpg',
    'https://www.bookbaby.com/images/home/home-hero-tablet.jpg',
    'https://media.licdn.com/dms/image/C5112AQGaDAf4PVQwJA/article-cover_image-shrink_600_2000/0/1559281932317?e=2147483647&v=beta&t=Fhg5xvkTrrUdP_hzyk2e5ST214tHwwOxwpv-ieQFy0M',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevSlide}>
        
      </button>
      <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="carousel-button next" onClick={goToNextSlide}>
        
      </button>
    </div>
  );
};

export default ImageCarousel;
