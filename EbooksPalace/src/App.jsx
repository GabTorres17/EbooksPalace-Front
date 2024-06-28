import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Detail from './pages/Detail/Detail.jsx'
import Landing from './pages/Langing/Landing.jsx'
import Form from './pages/Form/Form.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import NavBar from './components/Nav/Nav.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
function App() {

  return (
    <>
      <div>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/form' element={<Form />} />
          <Route path='/cartitem' element={<Cart></Cart>} />
          <Route path='/checkout' element={<Checkout></Checkout>} />
          <Route path='/admin' element={<Dashboard></Dashboard>} />
        </Routes>
      </div>
    </>
  )
}

export default App

