import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Item.module.css';
import Footer from '../../Footer/Footer';
import SUBNavbar from '../../Navbar/SUBNavbar';
import axios from 'axios';

const Item = () => {
  const location = useLocation();
  const { _id = -1 } = location.state || {}; // Extracting _id from state (product id)
  const [obj, setItem] = useState({});
  const [index, setIndex] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [active_img, setActiveImage] = useState('');
  const navigate = useNavigate() ;
  // FETCH ITEM
  useEffect(() => {
    const fetchItem = async () => {
      if (_id === -1) return; // Skip fetch if _id is invalid
      try {
        const response = await axios.post("http://localhost:4000/products/item", { _id });
        const fetchedObj = response.data.obj;
        setItem(fetchedObj);

        // Initialize image array for the slider
        const images = [fetchedObj.image, fetchedObj.image2, fetchedObj.image3, fetchedObj.image4, fetchedObj.image5].filter(Boolean);
        setImageArray(images);
        setActiveImage(images[0] || ''); // Default to first image
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };

    fetchItem();
  }, [_id]);

  // IMAGE CHANGE 
  useEffect(() => {
    if (imageArray.length > 0) {
      setActiveImage(imageArray[index]);
    }
  }, [index, imageArray]);
  const goPrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  const goNext = () => {
    setIndex((currentIndex) => (currentIndex < imageArray.length - 1 ? currentIndex + 1 : currentIndex));
  };

    // ADD TO CART 

    const tokenData = JSON.parse(localStorage.getItem('login')) ;
    const [user_id , setUserId] = useState("") ; 
    const [SelectedSize , set_SelectedSize] = useState("") ;                        // SIZE SELECTED    
    useEffect(()=>{
      if(SelectedSize !== "" && user_id !== ""){           // IF BOTH VALUES HAVE APPEARED  ................ v  e  r  y      i  m  p  o  r  t  a  n  t
        console.log(SelectedSize); 
        console.log(user_id) ;

        // now at this point size has been selected along with the user id 
        try {
          const check = async () => {
            const response = await axios.post("http://localhost:4000/user/check" , {SelectedSize: SelectedSize , _id : _id , user_id : user_id}) ;
            if(response.data.value) { // value is already present
              alert("Value already present in the cart , Go to cart or select anyother size");
              document.querySelector(`.${styles.cart_button}`).classList.add(styles.display_none) ;
              document.querySelector(`.${styles.go_to_cart_button}`).classList.remove(styles.display_none) ;
            }
            else{ // value is not present
              document.querySelector(`.${styles.cart_button}`).classList.remove(styles.display_none) ;
              document.querySelector(`.${styles.go_to_cart_button}`).classList.add(styles.display_none) ;
            }
          }
          check() ;
        } catch (error) {
          console.log("Error while checking", error) ;
        }
      }
      // else if (user_id === "" || SelectedSize === ""){
      else{
        document.querySelector(`.${styles.cart_button}`).classList.remove(styles.display_none) ;
        document.querySelector(`.${styles.go_to_cart_button}`).classList.add(styles.display_none) ;
      }
      
       

   
    },[SelectedSize,user_id])  ;                     
    const handleSize = (size) => {
      set_SelectedSize(size); 
      const getUserId = async () => {
        const response = await axios.post("http://localhost:4000/signup/jwtverification" , { token: tokenData ? tokenData.token : null, }); // Conditional token assignment}) ;
        setUserId(response.data.id) ;
      }
      getUserId() ;
    }


  const addToCart_function = async () => { 
    if(SelectedSize !== "" && user_id !== ""){
      try {
        const response = await axios.post("http://localhost:4000/user/add_to_cart", {SelectedSize : SelectedSize , user_id : user_id , _id : _id}) ;
        alert(response.data);
      } catch (error) {
        console.log("Error while adding to cart" , error) ;
      }
    }
  }
  // onClick ADD TO CART  
  const AddToBag = () => { 
    if(tokenData) {
      if(tokenData.category == "user"){
        if(SelectedSize === "") {
          alert("please select size first") ;
        }
        else{
          // POST REQ TO BACKEND (PUSH TO CART)
          addToCart_function() ;
          document.querySelector(`.${styles.cart_button}`).classList.add(styles.display_none) ;
          document.querySelector(`.${styles.go_to_cart_button}`).classList.remove(styles.display_none) ;
        }
      }
      else{
        alert("functionality for users only");
      }
    }
    else{
      alert("PLEASE LOGIN") ;
      navigate("/auth");      
    }
  }
  const GoToBag = () => {
    navigate("/cart") ; // send user id to cart page too so that it is easier to fetch there ...
  }



  if (_id === -1) {
    return <h1>Nothing to display</h1>;
  }

  return (
    <div className={styles.container}>
      <SUBNavbar />
      <div className={styles.content}>
        <div className={styles.child1}>
          <div className={styles.box2}>
            <img src={active_img} alt={obj.name || "Product"} className={styles.img} />
          </div>
          <div className={styles.next_prev}>
            <img src="./Left.svg" alt="prev" onClick={goPrev} />
            <img src="./Right.svg" alt="next" onClick={goNext} />
          </div>
        </div>
        <div className={styles.child2}>
          <div className={styles.heading}>
            <h1>{obj.companyName || "Company Name"}</h1>
            <h2>{obj.name || "Product Name"}</h2>
            <h3>
              <img src="./Star.svg" alt="star" />
              <img src="./Star.svg" alt="star" />
              <img src="./Star.svg" alt="star" />
              <img src="./Star.svg" alt="star" />
              <img src="./HalfStar.svg" alt="half star" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              4.5/5
            </h3>
          </div>
          <hr />
          <p className={styles.p}>
            <span className={styles.span1}>
              ₹{(obj.originalPrice - (obj.originalPrice * (obj.discountPercent / 100))).toFixed(2)}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.span2}>₹{obj.originalPrice || 0}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={styles.span3}>({obj.discountPercent || 0}% OFF)</span>
          </p>
          <div className={styles.size}>
            <h3>Select Size</h3>
            <div className={styles.label}>
              {obj.availableSize?.map((size, idx) => (
                <button key={idx} onClick={() => {handleSize(size)}}>{size}</button>
              ))}
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.cart_button} onClick={AddToBag}>ADD TO BAG</button>
            <button className={styles.go_to_cart_button} onClick={GoToBag}>GO TO BAG</button>
          </div>
          <div className={styles.product_details}>
            <h2>PRODUCT DETAILS</h2>
            <p>{obj.description || "No description available."}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Item;