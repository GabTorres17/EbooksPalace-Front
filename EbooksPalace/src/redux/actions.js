import axios from 'axios';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addToCart = (product) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/cart', {
      userId: product.userId,
      bookId: product.bookId,
    });
    dispatch({
      type: 'ADD_TO_CART',
      payload: response.data,
    });

    return response.data; 
  } catch (error) {
    throw error;
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

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  payload: userProfile
});

/* export const setUserProfile = (userProfile) => {
  // guardar en el localStorage
  localStorage.setItem("userProfile", JSON.stringify(userProfile));
  return {
    type: "SET_USER_PROFILE",
    payload: userProfile,
  };
}; */
