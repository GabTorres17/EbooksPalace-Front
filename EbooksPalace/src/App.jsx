import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Detail from './pages/Detail/Detail.jsx';
import Landing from './pages/Langing/Landing.jsx';
import Form from './pages/Form/Form.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import NavBar from './components/Nav/Nav.jsx';
import PrivateRoute from './components/privateRoute/privateRoute.jsx';
import { LoginButton } from './components/Login/Login.jsx';
import Downloads from './pages/Downloads/Downloads.jsx';
import PaymentSuccess from './pages/Payment Success/Payment.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import BookList from './pages/dashboard/BookList.jsx';
import UserList from './pages/dashboard/UserList.jsx';
import Unauthorized from './pages/Unauthorized/Unauthorized.jsx';
import PrivateBan  from './components/privateRoute/PrivateBan.jsx'
function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>

        <Route element={<PrivateBan />}>
         <Route path='/home' element={<Home />} />
        </Route>
          <Route path='/' element={<Landing />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/form' element={<Form />} />
          <Route path='/login' element={<LoginButton />} />
          <Route path='/cartitem' element={<PrivateRoute element={<Cart />} />} />
          <Route path='/checkout' element={<PrivateRoute element={<Checkout />} />} />
          <Route path='/downloads' element={<Downloads />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />

           <Route path="/unauthorized" element={<Unauthorized />} />
          
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<Dashboard />}  />
          </Route>
          <Route path="/admin/books" element={<BookList />}  />
          <Route path="/admin/users" element={<UserList />}  />
          
          
        </Routes>
      </div>
    </>
  );
}

export default App;