import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import getAllBooks from './CheckBooks';
import { Link } from 'react-router-dom';

const BookList = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getAllBooks();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      <div>
        <Link to="/admin">
          <button>Atras</button>
        </Link>
      </div>
      <div>
        <h1>Lista de libros</h1>
      </div>
      <div>
        <Link to="/form">
          <button>Crear Libro</button>
        </Link>
      </div>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
