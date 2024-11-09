import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './x.module.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const X = () => {
  const navigate = useNavigate() ;
  const location = useLocation();
  const { products , title } = location.state || { products: [], title: "" }; // Destructure onSale from state

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p className={styles.p}>FILTERS</p>
        <div className={styles.onSale} id="onSale_section">
          <div className={styles.box1}>
            {/* Use the passed onSale array to map the items */}
            {products.map(item => (
              <div key={item.name} className={styles.productCard} onClick={()=> { navigate('/item', { state: { obj :item } }) }}>
                <img src={item.image} alt={item.name} className={styles.productImage} />
                <h2 className={styles.productName}>{item.companyName}</h2>
                <p className={styles.productDescription}>{item.name}</p>
                <p className={styles.productPrice}>Rs:&nbsp;&nbsp;
                  <span className={styles.discountPrice}>
                    ₹{(item.originalPrice - (item.originalPrice * (item.discountPercent / 100))).toFixed(2)}
                  </span>&nbsp;&nbsp;
                  <span className={styles.originalPrice}>₹{item.originalPrice}</span>&nbsp;&nbsp;
                  <span className={styles.discountPercent}>{item.discountPercent}%</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default X;
