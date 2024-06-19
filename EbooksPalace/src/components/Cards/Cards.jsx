import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/actions';
import ProductCard from './ProductCard';
import Filters from '../Filters/Filters';
import styles from './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const { books, totalPages } = useSelector((state) => state.books);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [order, setOrder] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    dispatch(fetchBooks({ page: currentPage, productsByPage: productsPerPage, order, sort }));
  }, [dispatch, currentPage, order, sort]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? styles.activePage : styles.pageButton}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className={styles.home}>
      <Filters />
      <div className={styles.cardList}>
        <div className={styles.cardsContainer}>
          {books.map((book) => (
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

        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          {renderPagination()}
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
