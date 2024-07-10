import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/Nav/Nav';
import './Detail.css'; // Importar estilos CSS aquí
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions';

const Detail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/books/${id}`);
        setInfo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading book details</div>;

  return (
    <div>
      <br/>
      <br/>
      
      <div className="detalle-producto">
        {info ? (
          <>
            <div className="imagen">
              <img src={info.image} alt={info.name} />
              <h3>Descripción:</h3>
              <p>{info.description}</p>
            </div>
            <div className="info">
              <h2>{info.name}</h2>
              <p><strong>Editorial:</strong> {info.editorial}</p>
              <p><strong>Categoría:</strong> {info.category}</p>
              <p><strong>Autor:</strong> {info.author}</p>
              {/* <button onClick={() => addToCart(info)}>Agregar al Carrito</button> */}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Detail;
