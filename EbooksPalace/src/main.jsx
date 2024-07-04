import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Auth0Provider 
      domain="dev-se865nbu7e0wfkrv.us.auth0.com"
      clientId="rBSE1Pa6iliRaGcLqdeKtrqU5StWxd9m"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
          <App />
    
      </Provider>
    </Auth0Provider>
  </BrowserRouter>

)

