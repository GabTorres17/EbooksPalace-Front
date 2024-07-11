import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LeaveReview.css'; // Importa el archivo CSS

const LeaveReview = () => {
  const [paid, setPaid] = useState(false);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewId, setReviewId] = useState(null); // ID de la reseña del usuario
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Para deshabilitar el botón durante el envío
  const [reviewHistory, setReviewHistory] = useState([]); // Historial de reseñas del usuario actual
  const user = JSON.parse(localStorage.getItem('userProfile'));
  const userId = user ? user.id : null;

  useEffect(() => {
    // Función para cargar el historial de reseñas del usuario actual
    const loadReviewHistory = async () => {
      try {
        const response = await axios.get(`https://ebookspalace.onrender.com/users/${userId}/review`);
        const history = response.data;
        setReviewHistory(history);

        // Buscar la reseña más reciente para mostrar en el formulario de edición
        const latestReview = history.find(review => review.userId === userId);
        if (latestReview) {
          setReviewId(latestReview.id);
          setReviewContent(latestReview.content);
        }
      } catch (error) {
        console.error('Error al cargar el historial de reseñas:', error);
        setError('Error al cargar el historial de reseñas.');
      }
    };

    if (userId) {
      loadReviewHistory();
    }
  }, [userId]);

  // Función para verificar si el usuario tiene un carrito pagado
  const checkPaidCarts = async () => {
    try {
      const response = await axios.get(`https://ebookspalace.onrender.com/paid-cart/${userId}`);
      const data = response.data;

      // Verifica si hay al menos un carrito pagado en la lista
      const hasPaidCart = data.length > 0;

      setPaid(hasPaidCart);
    } catch (error) {
      console.error('Error al verificar carritos pagados:', error);
      setError('Error al verificar carritos pagados.');
    }
  };

  useEffect(() => {
    // Verificar carritos pagados al cargar el componente
    if (userId) {
      checkPaidCarts();
    }
  }, [userId]);

  const handleReviewChange = (event) => {
    setReviewContent(event.target.value);
  };

  const handleReviewSubmit = async () => {
    if (reviewContent.trim() === '') {
      alert('La reseña no puede estar vacía.');
      return;
    }

    setIsSubmitting(true); // Inicia el estado de envío para deshabilitar el botón durante la operación

    try {
      if (reviewId) {
        // Si ya existe una reseña, actualizar en lugar de crear una nueva
        const response = await axios.put(`https://ebookspalace.onrender.com/users/${userId}/review`, {
          reviewId,
          content: reviewContent,
        });
        if (response.status !== 200) {
          throw new Error('Error al actualizar la reseña');
        }
        alert('Reseña actualizada con éxito.');
      } else {
        // Si no existe una reseña, crear una nueva
        const response = await axios.post(`https://ebookspalace.onrender.com/users/${userId}/review`, {
          content: reviewContent,
        });
        if (response.status !== 201) {
          throw new Error('Error al enviar la reseña');
        }
        alert('Reseña enviada con éxito.');
        setReviewId(response.data.id); // Guardar el ID de la nueva reseña creada
      }
      setError(null); // Reiniciar errores si la operación fue exitosa
      // Recargar el historial de reseñas después de enviar/actualizar
      const updatedHistory = await axios.get(`https://ebookspalace.onrender.com/users/${userId}/review`);
      setReviewHistory(updatedHistory.data);
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
      alert('Error al enviar la reseña. Inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false); // Finaliza el estado de envío
    }
  };

  const handleEditReview = (review) => {
    setReviewId(review.id);
    setReviewContent(review.content);
  };

  return (
    <div className="review-container">
      <h1 className="review-heading">Qué te pareció nuestra página?</h1>
      {paid ? (
        <div className="review-form">
          <div className="review-input">
            <textarea
              value={reviewContent}
              onChange={handleReviewChange}
              placeholder="Escribe tu reseña aquí..."
              disabled={isSubmitting} // Deshabilita el textarea durante el envío
              className="review-textarea"
            />
            <button onClick={handleReviewSubmit} disabled={isSubmitting} className="review-button">
              {reviewId ? 'Editar reseña' : 'Enviar reseña'}
            </button>
          </div>
        </div>
      ) : (
        <p className="review-unpaid">No tienes carritos pagados para dejar una reseña.</p>
      )}
      {reviewHistory.length > 0 && (
        <div className="review-history">
          <h2 className="review-history-title">Historial de Reseñas</h2>
          <ul className="review-history-list">
            {reviewHistory.map(review => (
              <li key={review.id} className="review-history-item">
                {review.content}
                {review.userId === userId && (
                  <button onClick={() => handleEditReview(review)} className="review-edit-button">
                    Editar
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p className="review-error">{error}</p>}
    </div>
  );
};

export default LeaveReview;
