import React from 'react' ;
import styles from './Navbar.module.css';


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <img src="./public/Vector.svg" alt="" />
      </div>
      <div className={styles.box2}>
        URBAN CART
      </div>
      <div className={styles.box3}>
        <div className={styles.items}>On Sale</div>
        <div className={styles.items}>New Arrivals</div>
        <div className={styles.items}>Brands</div>
      </div>
      <div className={styles.box4}>
        <div className={styles.INPUT}>
          <button className={styles.button}>
            <img src="./public/SEARCH1.svg" alt="search" className={styles.search} />
          </button>
          <input type="text" placeholder='Search items here' className={styles.input}/>
        </div>
      </div>
      <div className={styles.box5}>
        <img src="./public/cart.svg" alt="cart" className='cart'/>
        <img src="./public/noavatar.png" alt="n0_avtar"  className='avatar'/>
      </div>
    </div>
  )
}

export default Navbar ;
