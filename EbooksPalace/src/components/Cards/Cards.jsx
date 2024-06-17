import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './Cards.module.css';

const Cards = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/books`);
        setInfo(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.cards}>
      {info.map((book) => (
        <ProductCard
          key={book.id}
          id={book.id}
          name={book.name}
          author={book.author}
          editorial={book.editorial}
          price={book.price}
          category={book.category}
          image={book.image}
          description={book.description}
        />
      ))}
    </div>
  );
};

export default Cards;
