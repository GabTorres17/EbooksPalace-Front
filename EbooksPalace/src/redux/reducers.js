import { ADD_TO_CART, REMOVE_ITEM, UPDATE_QUANTITY, EMPTY_CART, SET_USER_PROFILE } from './actions';

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
    case UPDATE_QUANTITY:
      newCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
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

export { cartReducer, userReducer };
