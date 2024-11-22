import React from 'react'
import styles from './Cart.module.css' ;
import SUBNavbar from '../Navbar/SUBNavbar';
import Footer from '../Footer/Footer';


const Cart = () => {
  return (
    <>
      <div className={styles.container}>
        <SUBNavbar/>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1 className={styles.heading_h1}>SHOPPING BAG</h1>
          </div>
          <div className={styles.cards}> {/* INSIDE OF THIS BOX WE WILL APPLY THE MAP FUNCTION */}

            <div className={styles.card}>                {/*CARD 1*/}
              <div className={styles.sub_div1}>
                <img src="/newArrivals.png" alt="item_image" className={styles.image}/>
              </div>
              <div className={styles.sub_div2}> 
                <div className={styles.child1}>
                  <div className={styles.child1_box1}>
                    <h1 className={styles.h1}>companyName</h1>
                    <h2 className={styles.h2}>name</h2>
                    <h2 className={styles.h2}>availableSize : or size selected</h2>
                  </div>
                  <div className={styles.child1_box2}>
                    <img src="/Delete.svg" alt="delete_icon" />
                  </div>
                </div>
                <div className={styles.child2}>
                  <div className={styles.child2_box1}>
                    <h2 className={styles.price}><span className={styles.span}>₹ originalPrice</span>  | ₹ Discount Price</h2>
                    <h2 className={styles.price}> Discount percent</h2>
                  </div>
                  <div className={styles.child2_box2}>
                    <button className={styles.decrease}>-</button>1<button className={styles.increase}>+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.total}>
                <p>TOTAL</p>
            </div>
          </div>

        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Cart ;



// <h1>NOW WE ARE GOING TO WORK ON THIS</h1>
// <h3>Before coming to this we are going to create a post request in user.js /user/post which will add the particular item to the cart object of user from item.js</h3>

// <h1>THIS IS THE CART PAGE .....</h1> 
// <h3>1. WE ARE GOING TO CREATE A HTML TABLE</h3> 
// <h3>2. WE ARE GOING TO USE A POST REQUEST TO FETCH DATA FROM USER </h3>
// <h3>3. FOR THIS WILL CREATE A NEW FILE user.js in middleware and create a route /user/cart :- which will fetch the data present in the user cart </h3>


// CRUD OPERATIONS ON THIS PAGE : 
// get 
// delete
// patch