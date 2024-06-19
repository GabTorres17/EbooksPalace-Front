import axios from 'axios';

export const setBooks = (books, totalPages) => ({
  type: 'SET_BOOKS',
  payload: { books, totalPages },
});

export const fetchBooks = (params) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/books', { params });
    dispatch(setBooks(response.data.books, response.data.totalPages));
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

export const searchBooks = (params) => async (dispatch) => {
  try {
    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    const response = await axios.get(`http://localhost:3001/books?${queryString}`);
    dispatch(setBooks(response.data.books, response.data.totalPages));
  } catch (error) {
    console.error('Error searching books:', error);
  }
};

/// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId
});

export const updateQuantity = (itemId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id: itemId, quantity }
});

export const clearCart = () => ({
  type: CLEAR_CART
});
