import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { booksReducer, cartReducer, userReducer } from './reducers';

const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
