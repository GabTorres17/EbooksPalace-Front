const initialState = {
  books: [],
  totalPages: 1,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        books: action.payload.books,
        totalPages: action.payload.totalPages,
      };
    default:
      return state;
  }
};

export default booksReducer;
