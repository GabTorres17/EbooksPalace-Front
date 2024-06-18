// src/BookContext.js
import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = (searchedBooks) => {
    setBooks(searchedBooks.books);
    setTotalPages(searchedBooks.totalPages);
  };

  return (
    <BookContext.Provider value={{ books, totalPages, handleSearch }}>
      {children}
    </BookContext.Provider>
  );
};
