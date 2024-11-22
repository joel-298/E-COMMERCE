import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';


const SUBNavbar = () => {
  useEffect(() => {
    // change icon based on login or not
    const getTokenData = () => JSON.parse(localStorage.getItem('login'));
    const tokenData = getTokenData();
    if (!tokenData || !tokenData.token) {
      document.querySelector(`.${styles.signout}`).classList.add(styles.display_none);
      document.querySelector(`.${styles.avatar}`).classList.remove(styles.display_none) ;
    }
    else{
      document.querySelector(`.${styles.signout}`).classList.remove(styles.display_none);
      document.querySelector(`.${styles.avatar}`).classList.add(styles.display_none) ;     
    }
    
    // Handeling screen width and side bar ..... 
    const handleResize = () => {
      const box5 = document.querySelector(`.${styles.box5}`);
      if (window.innerWidth > 1022) {
        box5.classList.add(styles.remove);
      }
      else{
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
  const closeSideBar = () => {
    const box5 = document.querySelector(`.${styles.box5}`);
    box5.classList.add(styles.remove) ;
  }


  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleAvatarClick = () => {
    navigate('/auth');
  };

  // SEARCH BAR : 
  // const [query, setQuery] = useState('');
  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Searching for:", query);
  // };
  return (
    <>
    <div className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.box2}>
          <div className={styles.box1}>
            <img src="/Vector.svg" alt="nav_icon" className={styles.nav_icon} onClick={handleNavClick}/>
          </div>
          <h1 onClick={()=>{navigate("/")}}><img src="/Logo.png" alt="logo_image" className={styles.logo} />&nbsp;URBAN CART</h1>
        </div>

        <div className={styles.box3}>
          <div className={styles.items} onClick={() => { navigate('/y' , {state : {title : "Female"}}) }}>Women</div>
          <div className={styles.items} onClick={() => { navigate('/y' , {state : {title : "Male"}}) }}>Men</div>
          <div className={styles.items} onClick={() => { navigate('/y' , {state : {title : "Kids"}}) }}>Kids</div>
          <div className={styles.items}><a href="/#brands_section">Brands</a></div>
        </div>

        <div className={styles.box4}>
          {/* <form className={styles.INPUT}  onSubmit={handleSubmit}> */}
          <form className={styles.INPUT}  action=''>
            <button className={styles.button} type='submit'>
              <img src="/SEARCH1.svg" alt="search" className={styles.search} />
            </button>
            {/* <input type="text" placeholder='Search items here' className={styles.input} value={query} onChange={handleInputChange}/> */}
            <input type="text" placeholder='Search items here' className={styles.input}/>
          </form>
          <img src="/cart.svg" alt="cart" className={styles.cart} onClick={handleCartClick} />
          <img src="/noavatar.svg" alt="avatar" className={styles.avatar} onClick={handleAvatarClick} />
          <img src="/Signout.svg" alt="signout" className={styles.signout} />
        </div>

        <div className={styles.box5}>
          <div className={styles.sub_div1}>
            <img src="/Logo.png" alt="Logo"  className={styles.logo}/>
            <img src="/ARROW_LEFT.svg" alt="arrow_left" className={styles.cancel} onClick={handleCancleButton}/>
          </div>
          <div className={styles.sub_div2}>        
            <a href="/y"><div className={styles.items_box5} onClick={()=> { navigate('/y', { state: {title : "Female"} }) , closeSideBar}}>Women</div></a>
            <a href="/y"><div className={styles.items_box5} onClick={()=> { navigate('/y', { state: {title : "Male"} }) , closeSideBar}}>Men</div></a>
            <a href="/y"><div className={styles.items_box5} onClick={()=> { navigate('/y', { state:  {title : "Kids"} }) , closeSideBar}}>Kids</div></a>
            <a  href="/#brands_section"><div className={styles.items_box5} onClick={closeSideBar}>Brands</div></a>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default SUBNavbar;
