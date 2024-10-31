import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleAvatarClick = () => {
    navigate('/auth');
  };

  return (
    <div className={styles.container}>
      <div className={styles.box2}>
        <div className={styles.box1}>
          <img src="./Vector.svg" alt="nav_icon" className={styles.nav_icon}/>
        </div>
        <h1><img src="./Logo.png" alt="logo_image" className={styles.logo} />&nbsp;URBAN CART</h1>
      </div>
      <div className={styles.box3}>
        <div className={styles.items}>On Sale</div>
        <div className={styles.items}>New Arrivals</div>
        <div className={styles.items}>Brands</div>
      </div>
      <div className={styles.box4}>
        <div className={styles.INPUT}>
          <button className={styles.button}>
            <img src="./SEARCH1.svg" alt="search" className={styles.search} />
          </button>
          <input type="text" placeholder='Search items here' className={styles.input}/>
        </div>
        <img src="./cart.svg" alt="cart" className={styles.cart} onClick={handleCartClick} />
        <img src="./noavatar.png" alt="avatar" className={styles.avatar} onClick={handleAvatarClick} />
      </div>
      <div className={styles.box5}>
      <div className={styles.items}>On Sale</div>
        <div className={styles.items}>New Arrivals</div>
        <div className={styles.items}>Brands</div>
      </div>
    </div>
  );
};

export default Navbar;