import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css' ;
import SUBNavbar from '../Navbar/SUBNavbar';
import Footer from '../Footer/Footer';
import axios from 'axios' ;

const Cart = () => {
  const tokenData = JSON.parse(localStorage.getItem("login")); // user token
  const [user_id, setUserId] = useState("") ; // USER ID
  const [cart , setCart] = useState([]) ;     // CART ARRAY 
  const getUserId = async () => {                                     // Function to get user id
    const response = await axios.post("https://e-commerce-k1rr.onrender.com/signup/jwtverification" , { token: tokenData ? tokenData.token : null, }); // Conditional token assignment}) ;)
    setUserId(response.data.id) ;
  } ;
  useEffect(()=>{
    getUserId() ;
    if(user_id !== "") {
      try {
        const getCart = async () => {
          const response = await axios.post("https://e-commerce-k1rr.onrender.com/user/cart", { user_id : user_id});
          console.log(response.data.cart);  // Log the cart array received from the backend
          setCart(response.data.cart); // You can also store the cart data in state for rendering later
          // SET TOTAL COST : 
          // can u write a functino of toal cost ? i.e total cost of adding discounted price of every object in cart array like mentioned in line number 79
        }
        getCart() ;
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }

  },[user_id]);

  // TOTAL COST
  const [totalCost , setTotalCost] = useState(0) ; // TOTAL COST
  const calculateTotalCost = () => {                                 
    let total = 0;
    cart.forEach(item => {
      const discountedPrice = item.product.originalPrice - (item.product.originalPrice * (item.product.discountPercent / 100));
      total += discountedPrice;
    });
    setTotalCost(total.toFixed(2)); // Updating the state with the calculated total
  };
  useEffect(() => {                    // Recalculate total cost whenever cart changes
    if (cart.length > 0) {
      calculateTotalCost();
    }
  }, [cart]);

  // HANDLE DELETE FUNCTIONALITY
  const handleDelete =  async (id , size) => {
    try {
      if(user_id !== "") {
        const response = await axios.delete("https://e-commerce-k1rr.onrender.com/user/delete" , {params : {id : id , size : size , user_id: user_id}} );
        alert(response.data.message) ;
        window.location.reload() ;
      }
    } catch (error) {
      console.log("Error while deleting product")
    }
  };




  return (
    <>
      <div className={styles.container}>
        <SUBNavbar/>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1 className={styles.heading_h1}>SHOPPING BAG</h1>
          </div>
          <div className={styles.cards}> {/* INSIDE OF THIS BOX WE WILL APPLY THE MAP FUNCTION */}
            {cart.map((item,index) => {
              return ( 
                <div className={styles.card} key={index}>                {/*CARD 1*/}
                  <div className={styles.sub_div1}>
                    <img src={item.product.image} alt="item_image" className={styles.image}/>
                  </div>
                  <div className={styles.sub_div2}> 
                    <div className={styles.child1}>
                      <div className={styles.child1_box1}>
                        <h1 className={styles.h1}>{item.product.companyName}</h1>
                        <h2 className={styles.h2}>{item.product.name}</h2>
                        <h2 className={styles.h2}>Size selected : {item.SelectedSize}</h2>
                      </div>
                      <div className={styles.child1_box2}>
                        <img src="/Delete.svg" alt="delete_icon" onClick={()=>handleDelete(item.product._id, item.SelectedSize)}/>
                      </div>
                    </div>
                    <div className={styles.child2}>
                      <div className={styles.child2_box1}>
                        <h2 className={styles.price}><span className={styles.span}>₹ {item.product.originalPrice}</span>  | ₹{(item.product.originalPrice - (item.product.originalPrice * (item.product.discountPercent / 100))).toFixed(2)}</h2>
                        <h2 className={styles.price}>{item.product.discountPercent}% Off</h2>
                      </div>
                      <div className={styles.child2_box2}>
                        <button className={styles.decrease}>-</button>1<button className={styles.increase}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
            <div className={styles.total}>
                <h1 className={styles.totalCost}>TOTAL COST : ₹ {totalCost}</h1> 
                <button className={styles.paynow}>BUY NOW</button>
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