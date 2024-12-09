import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./edit.module.css"
import Footer from '../../Footer/Footer';
import SellerNavbar from '../../Navbar/SellerNavbar';

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {id = ""} = location.state || {};

  const[formData,setFormData] = useState({
    image:'',image1:'',image2:'',image3:'',image4:'',image5:'',name:'',
    originalPrice:'',discountPercent:'',companyName:'',description:'',
    type:'',availableSize:[],gender:'',totalQuantityAvailable:'',category:''
  })


  // handle input changes
  //The handleInputChange function updates the state (formData) whenever the user types or changes the value of an input field in the form.
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === 'checkbox' && name === 'availableSize') {
      setFormData((prev) => {
        if (checked) {
          // Add the new size if it is checked
          return { ...prev, availableSize: [...prev.availableSize, value] };
        } else {
          // Remove the size if it is unchecked
          return {
            ...prev,
            availableSize: prev.availableSize.filter((size) => size !== value),
          };
        }
      });
    } else {
      // Handle other input types
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  

  
  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) {
        console.error('Product ID is missing.');
        alert('No product ID found to edit.');
      }
      try {
        const res = await axios.get(`https://e-commerce-k1rr.onrender.com/seller/fetch/${id}`);
        const product = res.data;     // Assuming the response returns the product directly
        
        if (product) {
          setFormData(product);
        } else {
          console.error("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error.message);
        alert("Failed to fetch product details.");
      }
    };

    fetchProductDetails();
  }, [id]);


  // Handle form submission for editing the product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `https://e-commerce-k1rr.onrender.com/seller/edit/${id}`,
        formData,
      );
      alert("Product updated successfully!");
      navigate('/seller');
    } catch (error) {
      console.error("Error updating product:", error.message);
      alert("Failed to update product.");
    }
  };


 return (
    <div className={styles.container}>
      <SellerNavbar/>
      <div className={styles.content}>
        <h1>Edit Product</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.box}>
            <label>NAME:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.box}>
            <label>ORIGINAL PRICE:</label>
            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.box}>
            <label>DISCOUNT PERCENT:</label>
            <input
              type="number"
              name="discountPercent"
              value={formData.discountPercent}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.box}>
            <label>DESCRIPTION:</label>
            <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
          </div>

          <div className={styles.box}>
              <label>CATEGORY: </label>
              <div className={styles.radio}>
                {['Topwear','Bottomwear','Footwear','Accessories'].map((category)=>(
                  <label key={category}>
                    <input type="radio" name="category" 
                      value={category} // The value to set in the state
                      checked={formData.category === category} // Check if the current value matches the state
                      onChange={handleInputChange} />
                    {category}
                  </label>
                ))}
              </div>
            </div>


          {/* <div className={styles.box}>
              <label>AVAILABLE SIZES: </label>
              <div className={styles.radio}>
                {['XS','S','M','L','XL','XXL','XXXL',"One Size"].map((size)=>(
                  <label key={size}>
                    <input type="checkbox" name="availableSize" value={formData.availableSize} onChange={handleInputChange} />
                    {size}
                  </label>
                ))}
              </div>
            </div>       */}


            <div className={styles.box}>
              <label>AVAILABLE SIZES: </label>
              <div className={styles.radio}>
                {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'One Size'].map((size) => (
                  <label key={size}>
                    <input
                      type="checkbox"
                      name="availableSize"
                      value={size}
                      checked={formData.availableSize.includes(size)} // Check if the size is in the array
                      onChange={handleInputChange}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>




          <div className={styles.box}>
              <label>GENDER: </label>
              <div className={styles.radio}>
                {['Male','Female','Kids'].map((gender)=>(
                  <label key={gender}>
                    <input type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleInputChange}  />
                    {gender}
                  </label>
                  
                ))}
              </div>
            </div>

          <div className={styles.box}>
            <label>IMAGE URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.box}>
            <label>IMAGE URL:</label>
            <input
              type="text"
              name="image2"
              value={formData.image2}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.box}>
            <label>IMAGE URL:</label>
            <input
              type="text"
              name="image3"
              value={formData.image3}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.box}>
            <label>IMAGE URL:</label>
            <input
              type="text"
              name="image4"
              value={formData.image5}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.box}>
            <label>IMAGE URL:</label>
            <input
              type="text"
              name="image5"
              value={formData.image5}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.buttonBox}>
            <button type="submit" className={styles.button}>Update Product</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Edit