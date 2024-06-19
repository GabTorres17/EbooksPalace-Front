import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { searchBooks } from '../../redux/actions';

const SearchBar = () => {
  const [searchType, setSearchType] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const query = { [searchType]: searchValue };
      dispatch(searchBooks(query));
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-bar-form">
        <label>
          Buscar por:
          <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="name">Nombre</option>
            <option value="author">Autor</option>
            <option value="editorial">Editorial</option>
          </select>
        </label>
        <label>
          Valor:
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
