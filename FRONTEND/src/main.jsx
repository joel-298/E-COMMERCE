import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'
import Forms from './Components/Forms/Forms'
import Cart from './Components/Cart/Cart'
import Admin from './Components/Admin/Admin'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>} /> 
      <Route path="/seller" element={<Forms/>} />        {/* for seller  */}
      <Route path="/cart" element={<Cart/>} /> 
      <Route path="/admin" element={<Admin/>} /> 
    </Routes>
  </BrowserRouter>,
);
