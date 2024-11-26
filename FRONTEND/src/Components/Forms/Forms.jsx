import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './forms.module.css'
import SellerNavbar from '../Navbar/SellerNavbar';
import Footer from '../Footer/Footer';

const Forms = () => {
  const [products, setProducts] = useState([]);
  const [companyDetails, setCompanyDetails] = useState({ name: '', image: '', description: '' });
  const navigate = useNavigate();

  const getTokenData = () => {
    const tokenData = localStorage.getItem('login');
    try {
      return JSON.parse(tokenData);
    } catch {
      console.error("Invalid token data in localStorage.");
      return null;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const tokenData = getTokenData();
        if (!tokenData || !tokenData.token) {
          console.log("No valid token found. Redirecting to login.");
          navigate('/login');
          return;
        }

        const { token } = tokenData;

        const verifyToken = async () => {
          try {
            const response = await axios.post("http://localhost:4000/signup/jwtverification", { token });
            return response.data;
          } catch (error) {
            console.error("Token verification failed:", error);
            return { valid: false };
          }
        };

        const verificationResult = await verifyToken();

        if (!verificationResult.valid) {
          console.log("Invalid token. Redirecting to login.");
          navigate('/login');
          return;
        }

        const { name, image, description } = verificationResult;
        if (!name) {
          console.error("Company name not found in token verification response.");
          console.log("Failed to fetch company details.");
          return;
        }

        setCompanyDetails({ name, image, description });

        const res = await axios.get(`http://localhost:4000/seller/filter/${name}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data && Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else {
          console.error("Unexpected response structure:", res.data);
          console.log("Failed to load products.");
        }
      } catch (err) {
        console.error("Error fetching products:", err.message);
        console.log("Failed to fetch products. Please try again.");
      }
    };

    fetchProducts();
  }, [navigate]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/seller/delete/${id}`);
      alert("Product deleted successfully!");
      setProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error.message);
      alert("Failed to delete product.");
    }
  };

  return (
    <>
    <SellerNavbar/>
    <div className={styles.container}>
      <div className={styles.companyDetails}>
        {companyDetails.image && (
          <img src={companyDetails.image} alt={companyDetails.name} />
        )}
        <h1>{companyDetails.name}</h1>
        <p>{companyDetails.description}</p>
        <button onClick={() => navigate('/seller/add')}>Add Products</button>
      </div>

      {/* Display Products */}
      <div className={styles.content}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className={styles.box}>
              <h2>{product.name}</h2>
              <p>Company: {product.companyName}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.originalPrice}</p>
              <img src={product.image} alt={product.name} />
              <div className={styles.buttonBox}>
                <button className={styles.editButton} onClick={() => navigate('/seller/edit', { state: { id: product._id } })}>
                  Edit
                </button>
                <button className={styles.deleteButton}
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this product?")) {
                      handleDelete(product._id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available or failed to load products.</p>
        )}
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Forms;
