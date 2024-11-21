import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'
import Cart from './Components/Cart/Cart'
import Admin from './Components/Admin/Admin'
import X from './Components/Home/X/x'
import Brands from './Components/Home/BRANDS/Brands'
import Item from './Components/Home/ITEM/Item'
import Profile from './Components/Profile/Profile'
import Forms from './Components/Forms/Forms'
import Add from './Components/Forms/add/Add'
import Edit from './Components/Forms/edit/Edit'
import Y from './Components/Home/Y/Y'
<<<<<<< HEAD
import Forgot from './Components/Auth/Forgot'
=======
import AddSeller from './Components/Admin/Add/AddSeller'
>>>>>>> f038c902ec8d8bda204089521dc05a0ac47457da


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/profile' element={<Profile/>} />  {/* for User  */}
      <Route path="/cart" element={<Cart/>} />           
      <Route path="/" element={<Home/>} />
      <Route path="/x" element={<X/>} />          
      <Route path="/y" element={<Y/>} />          {/* home page filtered on the basis of women , men and kids */}                                                 
      <Route path="/brands" element={<Brands/>} />
      <Route path="/item" element={<Item/>} />


      <Route path="/auth" element={<Auth/>} />

      <Route path="/seller" element={<Forms/>} />       
      <Route path="/seller/add" element={<Add />} />
      <Route path="/seller/edit" element={<Edit />} />
 
<<<<<<< HEAD
      <Route path="/admin" element={<Admin/>} />
      <Route path='/forgot' element={<Forgot/>}></Route>
=======
      <Route path="/admin" element={<Admin/>} />     
      <Route path="/admin/add" element={<AddSeller/>} />    
>>>>>>> f038c902ec8d8bda204089521dc05a0ac47457da
    </Routes>
  </BrowserRouter>,
);
