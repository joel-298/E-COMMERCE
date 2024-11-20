import React, { useState , useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './x.module.css';
import Footer from '../../Footer/Footer';
import SUBNavbar from '../../Navbar/SUBNavbar';
import axios from 'axios' ;


const X = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title1 = "", title2 = "" } = location.state || {};
  const [arr,setArr] = useState([]) ; // GLOBAL ARRAY 
  const [type, setTypeFilter] = useState([]) ;
  const [category, setCategoryFilter] = useState([]) ;
  const [size, setSizeFilter] = useState([]) ;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:4000/products/x", { title1 , title2 , type , category , size });
        console.log(response.data.arr);
        setArr(response.data.arr);
        console.log(arr); 
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
  
    fetchData();
  
    // Log filter arrays
    console.log("Type Filter:", type);
    console.log("Category Filter:", category);
    console.log("Size Filter:", size);
  }, [type, category, size]);


  const handleFilterChange = (e, filterType) => {
    const value = e.target.value;
  
    if (e.target.checked) {
      // Add the value to the appropriate filter
      if (filterType === "type") {
        setTypeFilter((prev) => [...prev, value]);
      } else if (filterType === "category") {
        setCategoryFilter((prev) => [...prev, value]);
      } else if (filterType === "size") {
        setSizeFilter((prev) => [...prev, value]);
      }
    } else {
      // Remove the value from the appropriate filter
      if (filterType === "type") {
        setTypeFilter((prev) => prev.filter((item) => item !== value));
      } else if (filterType === "category") {
        setCategoryFilter((prev) => prev.filter((item) => item !== value));
      } else if (filterType === "size") {
        setSizeFilter((prev) => prev.filter((item) => item !== value));
      }
    }
  }

  return (
    <div className={styles.container}>
      <SUBNavbar />
      <div className={styles.content}>
        <h1 className={styles.h1}>{title1}/{title2}</h1>
        <div className={styles.p1}>
          <h3>FILTERS</h3>
          <div className={styles.filter_box1}>
            <h4>STYLE</h4>
            <label><input type="checkbox" value="Casual" onChange={(e) => handleFilterChange(e,"type")}/>Casual</label>
            <label><input type="checkbox" value="Formal" onChange={(e) => handleFilterChange(e,"type")}/>Formal</label>
            <label><input type="checkbox" value="Party" onChange={(e) => handleFilterChange(e,"type")}/>Party</label>
            <label><input type="checkbox" value="Sports" onChange={(e) => handleFilterChange(e,"type")}/>Sports</label>      
          </div>
          <div className={styles.filter_box2}>
            <h4>CATEGORY</h4>
            <label><input type="checkbox" value="Topwear" onChange={(e) => handleFilterChange(e,"category")}/>Topwears</label>
            <label><input type="checkbox" value="Bottomwear" onChange={(e) => handleFilterChange(e,"category")}/>Bottomwears</label>
            <label><input type="checkbox" value="Footwear" onChange={(e) => handleFilterChange(e,"category")}/>Footwears</label>
            <label><input type="checkbox" value="Accessories" onChange={(e) => handleFilterChange(e,"category")}/>Accessories</label>      
          </div>
          <div className={styles.filter_box3}>
            <h4>SIZE</h4>
            <label><input type="checkbox" value="XS" onChange={(e) => handleFilterChange(e,"size")}/>XS</label>
            <label><input type="checkbox" value="S" onChange={(e) => handleFilterChange(e,"size")}/>S</label>
            <label><input type="checkbox" value="M" onChange={(e) => handleFilterChange(e,"size")}/>M</label>
            <label><input type="checkbox" value="L" onChange={(e) => handleFilterChange(e,"size")}/>L</label> 
            <label><input type="checkbox" value="XL" onChange={(e) => handleFilterChange(e,"size")}/>XL</label> 
            <label><input type="checkbox" value="XXL" onChange={(e) => handleFilterChange(e,"size")}/>XXL</label> 
            <label><input type="checkbox" value="One Size" onChange={(e) => handleFilterChange(e,"size")}/>One Size</label> 
          </div>
          <div className={styles.filter_box4}>
            <h4>PRICE</h4>
          </div>
        </div>

        <div className={styles.onSale} id="onSale_section">
          <div className={styles.box1}>
            {/* Use the passed onSale array to map the items */}
            {arr.map((item, index) => (
              <div key={index} className={styles.productCard} onClick={() => { navigate('/item', { state: { _id: item._id } }) }}>
                <img src={item.image} alt={item.name} className={styles.productImage} />
                <h2 className={styles.productName}>{item.companyName}</h2>
                <p className={styles.productDescription}>{item.name}</p>
                <p className={styles.productPrice}>Rs:&nbsp;&nbsp;
                  <span className={styles.discountPrice}>
                    ₹{(item.originalPrice - (item.originalPrice * (item.discountPercent / 100))).toFixed(2)}
                  </span>&nbsp;&nbsp;
                  <span className={styles.originalPrice}>₹{item.originalPrice}</span>&nbsp;&nbsp;
                  <span className={styles.discountPercent}>{item.discountPercent}%</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default X;