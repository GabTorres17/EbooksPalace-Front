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
import DashRoute from './components/privateDash/privateDash.jsx';
import PrivateBan from './components/privateDash/privateBan.jsx';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/form' element={<Form />} />
          <Route path='/login' element={<LoginButton />} />
          <Route path='/cartitem' element={<PrivateRoute element={<Cart />} />} />
          <Route path='/checkout' element={<PrivateRoute element={<Checkout />} />} />
          <Route path='/downloads' element={<Downloads />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path="/admin/books" element={<BookList />}/>
          <Route path="/admin/users" element={<UserList />}/>
          <Route element={<DashRoute/>}>
          <Route path="/admin" element={<Dashboard />}/>
          </Route>
          <Route element={<PrivateBan/>}>
          <Route path="/home" element={<Home />}/>
          </Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
