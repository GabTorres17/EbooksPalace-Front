import { ADD_TO_CART, REMOVE_ITEM, EMPTY_CART, SET_USER_PROFILE, FETCH_PAID_BOOKS_REQUEST, FETCH_PAID_BOOKS_SUCCESS, FETCH_PAID_BOOKS_FAILURE } from './actions';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReducer = (state = initialState, action) => {
  let newCart;
  switch (action.type) {
    case ADD_TO_CART:
      newCart = [...state.cart, action.payload.book];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_ITEM:
      newCart = state.cart.filter(item => item.id !== action.payload.bookId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case EMPTY_CART:
      localStorage.setItem('cart', JSON.stringify([]));
      return {
        ...state,
        cart: [],
      };
    // case UPDATE_QUANTITY:
    //   newCart = state.cart.map(item =>
    //     item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
    //   );
    //   localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

const initialUserState = {
  userProfile: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

const initialBookState = {
  loading: false,
  books: [],
  error: null
};

const booksReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case FETCH_PAID_BOOKS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PAID_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.payload };
    case FETCH_PAID_BOOKS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export { cartReducer, userReducer, booksReducer };
