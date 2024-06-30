import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/Nav/Nav';
import './Detail.css';
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
     
      <div className="detalle-producto">
        {info ? (
          <>
            <div className="imagen">
              <br />
              <br />
              <br />
              <img src={info.image} alt={info.name} />
              <h3>Descripcion:</h3>
              <p>{info.description}</p>
            </div>
            <div className="info">
              <br />
              <h3>Nombre: {info.name}</h3> 
              
              <h3>Editorial: {info.editorial}</h3> 
              
              <h3>Categoria: {info.category}</h3> 
              
              <h3>Autor: {info.author}</h3> 
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link to="/cartitem"><button>Add to Cart</button> </Link>
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