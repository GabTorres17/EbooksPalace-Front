// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import Filters from '../Filters/Filters';
// import styles from './Cards.module.css';
// import { BookContext } from '../../BookContext';

// const Cards = () => {

//   const { books, totalPages } = useContext(BookContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   const fetchData = async (params = {}) => {
//     const queryParams = {
//       page: currentPage,
//       productsByPage: productsPerPage,
//       ...params,
//     };

//     try {
//       const { data } = await axios.get('http://localhost:3001/books', {
//         params: queryParams
//       });
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   const handleFilter = (filteredBooks) => {
//     books(filteredBooks.books);
//     totalPages(filteredBooks.totalPages);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const renderPagination = () => {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? styles.activePage : styles.pageButton}>
//           {i}
//         </button>
//       );
//     }
//     return pages;
//   };

//   return (
//     <div className={styles.home}>
//       <Filters onFilter={handleFilter} />
//     <div className={styles.cardList}>
//       <div className={styles.cardsContainer}>
//         {books.map((book) => (
//           <ProductCard
//             key={book.id}
//             id={book.id}
//             name={book.name}
//             author={book.author}
//             editorial={book.editorial}
//             price={book.price}
//             category={book.category}
//             image={book.image}
//             description={book.description}
//           />
//         ))}
//       </div>

//       <div className={styles.pagination}>
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
//         {renderPagination()}
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Cards;

// Cards.jsx

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Filters from '../Filters/Filters';
import styles from './Cards.module.css';
import { BookContext } from '../../BookContext';

const Cards = () => {
  const { books, totalPages, handleSearch } = useContext(BookContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async (params = {}) => {
    const queryParams = {
      page: currentPage,
      productsByPage: productsPerPage,
      ...params,
    };

    try {
      const { data } = await axios.get('http://localhost:3001/books', {
        params: queryParams,
      });
      handleSearch(data); // Actualiza el contexto con los datos recibidos
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleFilter = (filteredBooks) => {
    handleSearch(filteredBooks); // Actualiza el contexto con los libros filtrados
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
      <Filters onFilter={handleFilter} />
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

