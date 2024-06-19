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

