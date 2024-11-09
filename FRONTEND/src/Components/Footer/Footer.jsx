import React from 'react' ;
import styles from './Footer.module.css' ;

const Footer = () => {
  return (
    <div className={styles.contanier}>
      <div className={styles.child1}>
        <div className={styles.box1}>
          <div className={styles.heading}>
            <h1><img src="./Logo.png" alt="logo" className={styles.logo}/>&nbsp;URBAN CART</h1>
            <h2>We have clothes that suits your style and which you're proud to wear. From women to men.</h2>
          </div>
          <div className={styles.social}>
            <img src="./twitter.svg" alt="Twitter" />
            <img src="./facebook.svg" alt="Facebook" />
            <img src="./instagram.svg" alt="Instagram" />            
            <img src="./linkedin.svg" alt="Linkedin" />
            <img src="github.svg" alt="Github" />
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.items}>
            <h2>COMPANY</h2>
            <h3>About</h3>
            <h3>Features</h3>
            <h3>Works</h3>
            <h3>Career</h3>
          </div>
          <div className={styles.items}>
            <h2>HELP</h2>
            <h3>Customer Support</h3>
            <h3>Delivery Details</h3>
            <h3>Terms & Conditions</h3>
            <h3>Privacy Policy</h3>            
          </div>
          <div className={styles.items}>
            <h2>FAQ</h2>
            <h3>Accout</h3>
            <h3>Manage Deliveries</h3>
            <h3>Orders</h3>
            <h3>Payments</h3>
          </div>
          <div className={styles.items}>
            <h2>RESOURCES</h2>
            <h3>Free eBook</h3>
            <h3>Developments Tutorials</h3>
            <h3>How to - Blog</h3>
            <h3>Youtube Playlist</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.child2}>
        <div className={styles.sub_box1}>
          <p>Urban Cart © 2024-2030, All Rights Reserved</p>
        </div>
        <div className={styles.sub_box2}>
          <img src="./VISA.svg" alt="VisaCard" />
          <img src="CARD.svg" alt="MasterCard" />
          <img src="PAYPAL.svg" alt="PayPal" />
          <img src="APPLEPAY.svg" alt="ApplePay" />
          <img src="GPAY.svg" alt="GooglePay" />
        </div>
      </div>
    </div>
  )
}

export default Footer ;
