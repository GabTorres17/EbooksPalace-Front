import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import { BookProvider } from './BookContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Provider store={store}>
      <BookProvider>
      <App />
      </BookProvider>
      </Provider>
    </BrowserRouter>
  
)

