import React, { useState } from 'react';
import axios from 'axios';
import styles from './Filters.module.css';

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
      const { data } = await axios.get(`http://localhost:3001/books`, { params });
      onFilter(data);
    } catch (error) {
      console.error('Error fetching filtered books:', error);
    }
  };

  return (
    <div className={styles.layoutContainer}>
      <div className={styles.filterContainer}>
        <form onSubmit={handleSubmit} className={styles.filterForm}>
          <label className={styles.filterFormLabel}>
            Autor:
            <input
              className={styles.filterFormInput}
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <label className={styles.filterFormLabel}>
            Categoría:
            <select
              className={styles.filterFormSelect}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Categorías...</option>
              <option value="Terror">Terror</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Education">Education</option>
              <option value="Self-Help">Self-Help</option>
            </select>
          </label>
          <label className={styles.filterFormLabel}>
            Editorial:
            <input
              className={styles.filterFormInput}
              type="text"
              value={editorial}
              onChange={(e) => setEditorial(e.target.value)}
            />
          </label>
          <label className={styles.filterFormLabel}>
            Alfabetico:
            <select
              className={styles.filterFormSelect}
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="">Alfabético...</option>
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
          </label>
          <label className={styles.filterFormLabel}>
            Precio:
            <select
              className={styles.filterFormSelect}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Precio...</option>
              <option value="asc">Precio Menor</option>
              <option value="desc">Precio Mayor</option>
            </select>
          </label>
          <button className={styles.filterFormButton} type="submit">Filtrar Libros</button>
        </form>
      </div>
      <div className={styles.cardsContainer}>
        {/* Aquí van las cartas */}
      </div>
    </div>
  );
};

export default Filters;
