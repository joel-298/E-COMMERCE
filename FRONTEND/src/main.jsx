import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>} />
    </Routes>
  </BrowserRouter>,
)
