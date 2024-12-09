import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import './index.css';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import Cart from './Components/Cart/Cart';
import Admin from './Components/Admin/Admin';
import X from './Components/Home/X/x';
import Brands from './Components/Home/BRANDS/Brands';
import Item from './Components/Home/ITEM/Item';
import Forms from './Components/Forms/Forms';
import Add from './Components/Forms/add/Add';
import Edit from './Components/Forms/edit/Edit';
import Y from './Components/Home/Y/Y';
import Forgot from './Components/Auth/Forgot';
import AddSeller from './Components/Admin/Add/AddSeller';

// Utility function to get token and category
const getTokenData = () => JSON.parse(localStorage.getItem('login'));

// ProtectedRoute Component
const ProtectedRoute = ({ category, children }) => {
  const tokenData = getTokenData();
  if (!tokenData || !tokenData.token) {
    return <Navigate to="/auth" />;
  }

  const verifyToken = async () => { //2
    try {
      const response = await axios.post('https://e-commerce-k1rr.onrender.com/signup/jwtverification', {
        token: tokenData.token,
      });
      return response.data.valid;
    } catch (error) {
      console.error('Token verification failed:', error);
      return false;
    }
  };

const isValid = verifyToken(); // 1
  if (!isValid) {                    // 3
    return <Navigate to="/auth" />;
  }

  if (tokenData.category === category) { //4
    return children;
  }

  // Redirect to default route based on category
  switch (tokenData.category) {
    case 'user':
      return <Navigate to="/" />;
    case 'seller':
      return <Navigate to="/seller" />;
    case 'admin':
      return <Navigate to="/admin" />;
    default:
      return <Navigate to="/auth" />;
  }
};

// PublicRoute Component
const PublicRoute = ({ children }) => {
  const tokenData = getTokenData();

  if (tokenData && tokenData.token) {
    // Redirect to respective dashboard based on category
    switch (tokenData.category) {
      case 'user':
        return <Navigate to="/" />;
      case 'seller':
        return <Navigate to="/seller" />;
      case 'admin':
        return <Navigate to="/admin" />;
      default:
        return <Navigate to="/auth" />;
    }
  }

  return children;
};
// Fallback Route Component
const FallbackRoute = () => {
  const tokenData = getTokenData();

  if (!tokenData || !tokenData.token) {
    return <Navigate to="/auth" />;
  }

  // Redirect based on category
  switch (tokenData.category) {
    case 'user':
      return <Navigate to="/" />;
    case 'seller':
      return <Navigate to="/seller" />;
    case 'admin':
      return <Navigate to="/admin" />;
    default:
      return <Navigate to="/auth" />;
  }
};

// Application Routes
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Public routes */}
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot"
        element={
          <PublicRoute>
            <Forgot />
          </PublicRoute>
        }
      />

      {/* Publicly accessible routes */}
      <Route path="/" element={<Home />} />
      <Route path="/x" element={<X />} />
      <Route path="/y" element={<Y />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/item" element={<Item />} />

      {/* Protected routes for "user" */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute category="user">
            <Cart />
          </ProtectedRoute>
        }
      />

      {/* Protected routes for "seller" */}
      <Route
        path="/seller"
        element={
          <ProtectedRoute category="seller">
            <Forms />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller/add"
        element={
          <ProtectedRoute category="seller">
            <Add />
          </ProtectedRoute>
        }
      />
      <Route
        path="/seller/edit"
        element={
          <ProtectedRoute category="seller">
            <Edit />
          </ProtectedRoute>
        }
      />

      {/* Protected routes for "admin" */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute category="admin">
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/add"
        element={
          <ProtectedRoute category="admin">
            <AddSeller />
          </ProtectedRoute>
        }
      />

      {/* Fallback route */}
      <Route path="*" element={<FallbackRoute />} />
    </Routes>
  </BrowserRouter>
);