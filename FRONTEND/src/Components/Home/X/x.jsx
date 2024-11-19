import React, { useState , useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './x.module.css';
import Footer from '../../Footer/Footer';
import SUBNavbar from '../../Navbar/SUBNavbar';

const X = () => {


  const navigate = useNavigate() ;
  const location = useLocation();
  const { arr , products , title } = location.state || { arr: [] , products: [], title: "" }; // Destructure onSale from state

  const [Final, setArr] = useState([]);
  const [filters , setFilters] = useState([]) ;
  const handleFilterChange = (e) => {
    const value = e.target.value ;
    if(e.target.checked) { // add if checked
      setFilters((prevFilters) => [...prevFilters,value]) ;
    }
    else{ //remove if unchecked
      setFilters((prevFilters) => prevFilters.filter((filter) => filter !== value)) ;
    }
  }
  useEffect(() => {
    let filteredProducts = [...arr]; // Start with all products in filteredProducts
  
    // Show all products if no filters are selected
    if (filters.length === 0) {
      setArr([...products]);
      return;
    } 
  
    // Step 1: Check if any style (type) is selected
    if (!filters.some((filter) => filteredProducts.some((e) => e.type === filter))) {
      // Check if any size is selected and no matching items are found for style and size
      if (filters.some((filter) => arr.some((e) => e.availableSizes.includes(filter)))) {
        filteredProducts = filteredProducts.filter((e) =>
          e.availableSizes.some((size) => filters.includes(size))
        );
  
        // If filtering by size results in no items, set filteredProducts to empty
        if (filteredProducts.length === 0) {
          setArr([]);
          return;
        }
      } else {
        // Reset to all products if no style is selected and no size filters match
        filteredProducts = [...arr];
      }
    } else {
      // If style filters are selected, filter by style (type)
      filteredProducts = filteredProducts.filter((e) => filters.includes(e.type));
    }
  
    // Step 2: If category is selected, filter by category
    if (filters.some((filter) => arr.some((e) => e.category === filter))) {
      filteredProducts = filteredProducts.filter((e) => filters.includes(e.category));
  
      // If filtering by category results in no items, set filteredProducts to empty
      if (filteredProducts.length === 0) {
        setArr([]);
        return;
      }
    }
  
    // Step 3: If sizes are selected, filter by size
    if (filters.some((filter) => arr.some((e) => e.availableSizes.includes(filter)))) {
      filteredProducts = filteredProducts.filter((e) =>
        e.availableSizes.some((size) => filters.includes(size))
      );
    }
  
    // Apply the final filtered result
    setArr(filteredProducts);
  }, [filters]);
  
  
  

  return (
    <div className={styles.container}>
      <SUBNavbar />
      <div className={styles.content}>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.p1}>
          <h3>FILTERS</h3>
          <div className={styles.filter_box1}>
            <h4>STYLE</h4>
            <label><input type="checkbox" value="Casual" onChange={handleFilterChange}/>Casual</label>
            <label><input type="checkbox" value="Formal" onChange={handleFilterChange}/>Formal</label>
            <label><input type="checkbox" value="Party" onChange={handleFilterChange}/>Party</label>
            <label><input type="checkbox" value="Sports" onChange={handleFilterChange}/>Sports</label>      
          </div>
          <div className={styles.filter_box2}>
            <h4>CATEGORY</h4>
            <label><input type="checkbox" value="Topwear" onChange={handleFilterChange}/>Topwears</label>
            <label><input type="checkbox" value="Bottomwear" onChange={handleFilterChange}/>Bottomwears</label>
            <label><input type="checkbox" value="Footwear" onChange={handleFilterChange}/>Footwears</label>
            <label><input type="checkbox" value="Accessories" onChange={handleFilterChange}/>Accessories</label>      
          </div>
          <div className={styles.filter_box3}>
            <h4>SIZE</h4>
            <label><input type="checkbox" value="XS" onChange={handleFilterChange}/>XS</label>
            <label><input type="checkbox" value="S" onChange={handleFilterChange}/>S</label>
            <label><input type="checkbox" value="M" onChange={handleFilterChange}/>M</label>
            <label><input type="checkbox" value="L" onChange={handleFilterChange}/>L</label> 
            <label><input type="checkbox" value="XL" onChange={handleFilterChange}/>XL</label> 
            <label><input type="checkbox" value="XXL" onChange={handleFilterChange}/>XXL</label> 
            <label><input type="checkbox" value="One Size" onChange={handleFilterChange}/>One Size</label> 
          </div>
          <div className={styles.filter_box4}>
            <h4>PRICE</h4>
          </div>
        </div>

        <div className={styles.onSale} id="onSale_section">
          <div className={styles.box1}>
            {/* Use the passed onSale array to map the items */}
            {Final.map((item, index) => (
              <div key={index} className={styles.productCard} onClick={()=> { navigate('/item', { state: { obj :item } }) }}>
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