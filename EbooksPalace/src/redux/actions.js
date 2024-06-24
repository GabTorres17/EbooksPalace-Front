export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
import axios from 'axios';



export const addToCart = (product) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/cart', {
          userId: product.Id,
          bookId: product.Id,
          amount: product.amount
        });
        dispatch({
          type: ADD_TO_CART,
          payload: response.data
        });
       
    } catch (error) {
        console.error("Error adding to cart", error);
    }
};

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

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile
});
