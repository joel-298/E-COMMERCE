import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';


const Navbar = () => {
  useEffect(() => {
    const handleResize = () => {
      const box5 = document.querySelector(`.${styles.box5}`);
      if (window.innerWidth > 1022) {
        box5.classList.add(styles.remove);
      }
    };
    handleResize();                                                      // Run once on initial load
    window.addEventListener('resize', handleResize);                     // Attach resize event listener
    return () => window.removeEventListener('resize', handleResize);     // Cleanup the event listener on component unmount
  }, []);
  const handleNavClick = () => {
    const box5 = document.querySelector(`.${styles.box5}`);
    if (window.innerWidth > 1022) {
      box5.classList.add(styles.remove); 
    }
    else{ // when screen size is less 
      box5.classList.remove(styles.remove) ;
    }
  }
  const handleCancleButton = () => {
    const box5 = document.querySelector(`.${styles.box5}`);
    if (window.innerWidth > 1022) {
      box5.classList.add(styles.remove); 
    }
    else{ // when screen size is less 
      box5.classList.add(styles.remove) ;
    }
  }



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
          <img src="./Vector.svg" alt="nav_icon" className={styles.nav_icon} onClick={handleNavClick}/>
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
        <div className={styles.sub_div1}>
          <img src="./Logo.png" alt="Logo"  className={styles.logo}/>
          <img src="./ARROW_LEFT.svg" alt="arrow_left" className={styles.cancel} onClick={handleCancleButton}/>
        </div>
        <div className={styles.sub_div2}>        
          <div className={styles.items_box5}>On Sale</div>
          <div className={styles.items_box5}>New Arrivals</div>
          <div className={styles.items_box5}>Brands</div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;



// THIS WAS A GOOD APPROACH : 
// PROBLEM : only works when reloads the page : 
// SOLUTION : we will have to add event listner 
  // const [width, setWidth] = useState(window.innerWidth) ;
  // useEffect(() => {
  //   const box5 = document.querySelector(`.${styles.box5}`);
  //   if ( width > 1022) {
  //     box5.classList.add(styles.remove); // Show box5 if width > 1024px
  //   } else {
  //     box5.classList.remove(styles.remove); // Hide box5 if width <= 1024px
  //   }
  // }, [width]);