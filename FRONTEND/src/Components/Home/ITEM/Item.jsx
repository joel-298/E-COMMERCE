import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Item.module.css';
import Footer from '../../Footer/Footer';
import SUBNavbar from '../../Navbar/SUBNavbar';
import axios from 'axios';

const Item = () => {
  const location = useLocation();
  const { _id = -1 } = location.state || {}; // Extracting _id from state
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
  const tokenData = JSON.parse(localStorage.getItem('login'));
  const [SelectedSize , set_SelectedSize] = useState("") ;
  useEffect(()=>{ 
    if(SelectedSize !== "") {
      if(tokenData){
        if(tokenData.category == "user"){       // POST OF CHECK CART REQ.
          document.querySelector(`.${styles.go_to_cart_button}`).classList.remove(styles.display_none);  
          document.querySelector(`.${styles.cart_button}`).classList.add(styles.display_none);
        }
        else{
          document.querySelector(`.${styles.go_to_cart_button}`).classList.add(styles.display_none);
          document.querySelector(`.${styles.cart_button}`).classList.remove(styles.display_none);
        }
      }
      else{
        document.querySelector(`.${styles.go_to_cart_button}`).classList.add(styles.display_none);
        document.querySelector(`.${styles.cart_button}`).classList.remove(styles.display_none);
      }
    }
    else{
      if(tokenData){
        if(tokenData.category == "user"){
          document.querySelector(`.${styles.go_to_cart_button}`).classList.add(styles.display_none);
          document.querySelector(`.${styles.cart_button}`).classList.remove(styles.display_none);
        }
        else {
          document.querySelector(`.${styles.go_to_cart_button}`).classList.add(styles.display_none);
          document.querySelector(`.${styles.cart_button}`).classList.remove(styles.display_none);
        }
      }
      else{
        document.querySelector(`.${styles.go_to_cart_button}`).classList.add(styles.display_none);
        document.querySelector(`.${styles.cart_button}`).classList.remove(styles.display_none);
      }
    }
  },[SelectedSize]);
  const handleSize = (size) => {
    set_SelectedSize(size) ;
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



  // ADD TO CART LOGIC 
  // function to gettoken and decode it ... GETTOKEN_&_DECODE()
  // SELECT SIZE USESTATE("")
  // useEffect with dependency of changing useState of SIZE {   
        // USESTATE("NOT NULL"){  
          // token is present 
            // USER:
              // POST OF CHECK CART REQ.
              // document.query ATC
              // document.query GTC
            // NOT USER
              // document.query display add to cart only
          // token is not present 
            // document.query display add to cart only
        // }
        // USESTATE("ISNULL"){
          // token is present 
            // USER:
              // document.query display add to cart only
            // NOT USER
              // document.query display add to cart only
          // token is not present
            // document.query display add to cart only
        // }

  // }
  // onCLICK SIZE  => change the useState only 

  // onClick ADD TO CART  
  // FUNCTION   {
          // TOKEN
            // USER 
              // USESTATE(NULL) 
                // please select size 
              // USESTATE NOT NULL 
                // POST REQ to SERVER(userid, productid , size) 
                // receive response 
                // document.query ATC display none
                // document.query GTO display 
            // NOT USER 
              // alert functionality for users only
          // NOT TOKEN
            // redirect to auth page

  // }







  // ONCLICK SIZE :  -> check is token is present and category is user => GETTOKEN_&_DECODE()
  //       LOGGED IN           if (IS USER)   POST(userid , productid, size selected)     //------------ 1
  //                           else(NOT USER) -> change to selected size useState     
  
  //      NOT LOGGED IN      -> change to selected size useState  

  // ---------(1) response from the server is ITEM WITH PARTICULAR SIZE IS 
  //                     PRESENT (IN CART)  ---> document.query selector (MOVE TO BAG) 
  //                     NOT PRESENT (IN CART)-> document.query selector (ADD TO CART)
  //                     -> change to selected size useState     

  // ONCLICK ADD_TO_CART :-> check LOGGED IN OR NOT AND USER IS PRESENT OR NOT
  // LOGGED IN         is USER      SIZENOTSELECTED -> alert(please slect the size) 
  //                                SIZESELECTED    -> POST (userid, productid , sizeSlected)   push req 
  //                                                       |
  //                                                       ----> document.queryselector G.T.C display  //------------2) redirect to cart page
  //                                                       ----> document.queryselector A.T.C hidden   
  //                  not USER     redirect to auth page 
  // NOT LOGGED IN                 redirect to auth page
 