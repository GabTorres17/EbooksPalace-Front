import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './Cards.module.css';
import Filters from '../Filters/Filters';

const Cards = () => {
  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/books', {
          params: {
            page: currentPage,
            productsByPage: productsPerPage,
            order: 'order', 
            sort: 'sort' 
          }
        });
        setInfo(data.books);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleFilter = (filteredBooks) => {
    setInfo(filteredBooks.books);
    setTotalPages(filteredBooks.totalPages);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? styles.activePage : styles.pageButton}>
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div>
      <Filters onFilter={handleFilter} />
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
        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
          {renderPagination()}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;


