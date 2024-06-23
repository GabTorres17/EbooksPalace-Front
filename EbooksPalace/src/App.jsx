import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Detail from './pages/Detail/Detail.jsx'
import Landing from './pages/Langing/Landing.jsx'
import Form from './pages/Form/Form.jsx'
import Cart from './pages/Cart/Cart.jsx'
function App() {
  
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/cartitem' element={<Cart></Cart>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

