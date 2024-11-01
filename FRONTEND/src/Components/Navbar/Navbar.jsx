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
  const handleNav = () => {
    const box5 = document.querySelector(`.${styles.box5}`);
    if (window.innerWidth > 1024) {
      box5.classList.add(styles.add);
      box5.classList.remove(styles.remove);
    } else {
      box5.classList.add(styles.remove);
      box5.classList.remove(styles.add);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.box2}>
        <div className={styles.box1}>
          <img src="./Vector.svg" alt="nav_icon" className={styles.nav_icon} onClick={handleNav}/>
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
          <div className={styles.items_box5}>On Sale</div>
          <div className={styles.items_box5}>New Arrivals</div>
          <div className={styles.items_box5}>Brands</div>
        </div>
    </div>
  );
};

export default Navbar;