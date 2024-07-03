import axios from 'axios';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addToCart = (product) => async (dispatch) => {
  try {
    const response = await axios.post('https://ebookspalace.onrender.com/cart', {
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

export const removeItem = (userId, bookId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://ebookspalace.onrender.com/remove', {
        userId,
        bookId
      });
      console.log('Respuesta del servidor:', response);
      if (response.status === 200) {
        dispatch({
          type: 'REMOVE_ITEM',
          payload: { userId, bookId }
        });
      }
    } catch (error) {
      console.error('Error al eliminar el artículo del carrito:', error.response?.data || error.message);
    }
  };
};

export const emptyCart = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete('https://ebookspalace.onrender.com/empty', {
        data: { userId }
      });
      dispatch({
        type: 'EMPTY_CART',
        payload: userId
      });
    } catch (error) {
      console.error('Error al vaciar el carrito:', error.response?.data || error.message);
    }
  };
};

export const updateQuantity = (itemId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id: itemId, quantity }
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





export const getAllCarts = async ()=>{
  const response = await axios.get(`http://localhost:3001/carts`)
  console.log(response.data);
  return response.data
}


export const getAllBooks = async ()=>{
  const response = await axios.get(`http://localhost:3001/books`)
  console.log(response.data);
  return response.data
}
