import { ADD_TO_CART, REMOVE_ITEM, UPDATE_QUANTITY, EMPTY_CART, SET_USER_PROFILE } from './actions';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload.book],
      };
    case REMOVE_ITEM:
      const updatedCart = state.cart.filter(item => item.id !== action.payload.bookId);
      return {
        ...state,
        cart: updatedCart,
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};

const initialUserState = {
  userProfile: null
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
