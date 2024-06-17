import React, { useState } from 'react';
import axios from 'axios';

const Filters = ({ onFilter }) => {
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [editorial, setEditorial] = useState('');
    const [order, setOrder] = useState('');
    const [sort, setSort] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const params = {};

      if (author) params.author = author;
      if (category) params.category = category;
      if (editorial) params.editorial = editorial;
      if (order) params.order = order;
      if (sort) params.sort = sort;

      try {
        const { data } = await axios.get(`http://localhost:3001/books`, {params});
        onFilter(data);
      } catch (error) {
        console.error('Error fetching filtered books:', error);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Autor:
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </label>
          <br />
          <label>
          Categoría:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Category">Categorias...</option>
              <option value="Terror">Terror</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Education">Education</option>
              <option value="Self-Help">Self-Help</option>
            </select>
          </label>
          <br />
          <label>
            Editorial:
            <input type="text" value={editorial} onChange={(e) => setEditorial(e.target.value)} />
          </label>
          <br />
          <label>
            Alfabetico:
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="order">Alfabetico...</option>
              <option value="asc">Z - A</option>
              <option value="desc">A - Z</option>
            </select>
          </label>
          <br />
          <label>
            Precio:
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="sort">Precio...</option>
              <option value="asc">Precio Menor</option>
              <option value="desc">Precio Mayor</option>
            </select>
          </label>
          <br />
          <button type="submit">Filtrar Libros</button>
        </form>
      </div>
    );
  };
  
  export default Filters;
  