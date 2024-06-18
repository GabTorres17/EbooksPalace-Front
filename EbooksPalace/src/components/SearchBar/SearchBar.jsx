import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchType, setSearchType] = useState('name');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form submitted');

    const params = {};
    if (searchValue) {
      params[searchType] = searchValue;
    }
    // console.log('Params:', params);
    try {
      const { data } = await axios.get('http://localhost:3001/books', { params });
    //   console.log('Data received:', data);
      onSearch(data);
    } catch (error) {
      console.error('Error fetching filtered books:', error);
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
