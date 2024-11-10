import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Item.module.css';
import Footer from '../../Footer/Footer';
import SUBNavbar from '../../Navbar/SUBNavbar';

const Item = () => {
  const location = useLocation();
  const {
    obj: {
      image,
      image2,
      image3,
      image4,
      image5,
      name,
      originalPrice,
      discountPercent,
      companyName,
      description,
      type,
      availableSizes,
      gender,
      totalQuantityAvailable,
      category
    } = {}
  } = location.state || {};


  // slider function : 
  const imageArray = [image, image2, image3, image4, image5];
  const [index, setIndex] = useState(0);
  const [active_img,setActiveImage] = useState(imageArray[index]) ;
  useEffect(() => {
    setActiveImage(imageArray[index]);
  }, [index]);

  const goPrev = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return 0;
      } 
      else {
        return prevIndex - 1;
      }
    });
  };
  const goNext = () => {
    setIndex((currentIndex) => {
      if (currentIndex === imageArray.length - 1) {
        return currentIndex ;
      }
      else {
        return currentIndex + 1;
      }
    });
  };

  return (
    <div className={styles.container}>
      <SUBNavbar/>
            {/* <p>
              <a href="/">Home/</a>
              <a href='/'>{companyName}/</a>
              {name}
            </p> {/* we are going to work on the comany name part after some time  
           */}
      <div className={styles.content}>
        <div className={styles.child1}>
          {/* <div className={styles.box1}>
            hello
          </div> */}
          <div className={styles.box2}>
            <img src={active_img} alt={name} className={styles.img}/>
          </div>
          <div className={styles.next_prev}>
            <img src="./Left.svg" alt="prev" onClick={goPrev} />  
            <img src="./Right.svg" alt="next" onClick={goNext} />   
          </div>
        </div>
        <div className={styles.child2}>
          <div className={styles.heading}>
            <h1>{companyName}</h1>
            <h2>{name}</h2>
            <h3>
              <img src="./Star.svg" alt="star" />
              <img src="./Star.svg" alt="star" />
              <img src="./Star.svg" alt="star" />
              <img src="./Star.svg" alt="star" />
              <img src="./HalfStar.svg" alt="star" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              4.5/5
            </h3>
          </div>
          <hr/>
          <p className={styles.p}><span className={styles.span1}>₹{(originalPrice - (originalPrice * (discountPercent / 100))).toFixed(2)}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.span2}>₹{originalPrice}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.span3}>({discountPercent}% OFF)</span></p>
          <div className={styles.size}>
            <h3>Select Size</h3>
            <div className={styles.label}>
              {availableSizes.map((e, index) => (
                <label key={index}>{e}</label>
              ))}            
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.cart_button}>ADD TO BAG</button>
            {/* <button>WISHLIST</button> */}
          </div>
          <div className={styles.product_details}>
            <h2>PRODUCT DETAILS</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Item;