import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/actions';
import './Filters.css';

const Filters = () => {
  const [category, setCategory] = useState('');
  const [order, setOrder] = useState('');
  const [sort, setSort] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    
    const params = {};

    if (category) params.category = category;
    if (order) params.order = order;
    if (sort) params.sort = sort;
  
    dispatch(fetchBooks(params));
  }, [category, order, sort, dispatch]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSort(''); 
    setOrder(''); 
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    setSort(''); 
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setOrder(''); 
  };

  return (
    <div className="filter-form-container">
      <form className="filter-form">
        <label>
          Categoría:
          <select value={category} onChange={handleCategoryChange}>
            <option value="">Categorías...</option>
            <option value="Terror">Terror</option>
            <option value="Comedy">Comedy</option>
            <option value="Romance">Romance</option>
            <option value="Education">Education</option>
            <option value="Self-Help">Self-Help</option>
          </select>
        </label>
        <br />
        <label>
          Alfabético:
          <select value={order} onChange={handleOrderChange}>
            <option value="">Alfabético...</option>
            <option value="asc">Z - A</option>
            <option value="desc">A - Z</option>
          </select>
        </label>
        <br />
        <label>
          Precio:
          <select value={sort} onChange={handleSortChange}>
            <option value="">Precio...</option>
            <option value="asc">Precio Menor</option>
            <option value="desc">Precio Mayor</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Filters;
