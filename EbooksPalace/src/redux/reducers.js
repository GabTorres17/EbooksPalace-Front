import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART, SET_USER_PROFILE } from './actions';


const initialState = {
  books: [],
  totalPages: 1,
  cartBuy: [],
  userProfile: null
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

const userReducer = (state = initialState, action) => {
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

const initialCartState = [];

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.find(item => item.id === action.payload.id);
      if (itemInCart) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case UPDATE_QUANTITY:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};



export { booksReducer, cartReducer, userReducer };

