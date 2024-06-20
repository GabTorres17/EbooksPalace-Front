import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
// import booksReducer from './reducers';

const rootReducer = combineReducers({
//   books: booksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
