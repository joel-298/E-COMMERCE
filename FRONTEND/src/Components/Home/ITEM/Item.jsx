import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

  // Fetch item data on component mount
  useEffect(() => {
    const fetchItem = async () => {
      if (_id === -1) return; // Skip fetch if _id is invalid
      try {
        const response = await axios.post("http://localhost:4000/seller/item", { _id });
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

  // Update active image whenever index changes
  useEffect(() => {
    if (imageArray.length > 0) {
      setActiveImage(imageArray[index]);
    }
  }, [index, imageArray]);

  // Go to previous image
  const goPrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  // Go to next image
  const goNext = () => {
    setIndex((currentIndex) => (currentIndex < imageArray.length - 1 ? currentIndex + 1 : currentIndex));
  };

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
                <label key={idx}>{size}</label>
              ))}
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.cart_button}>ADD TO BAG</button>
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
