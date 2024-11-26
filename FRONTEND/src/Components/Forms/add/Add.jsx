import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./add.module.css"

import Footer from '../../Footer/Footer';
import { useNavigate } from 'react-router-dom';



const Add = () => {
  // use state

  const [formData,setFormData] = useState({
    name:'',originalPrice:'',discountPercent:'',companyName:'',description:'',
    availableSize:[],
    gender:'',totalQuantityAvailable:'',category:'',type:'',image:'',image2:'',
    image3:'',image4:'',image5:''
  })
  const navigate = useNavigate();

  // function to get token from localstorage
  const getTokenData = () => {
    const tokenData = localStorage.getItem('login'); // getting the object
    if (!tokenData) {
      console.error("No token data found in localStorage.");
      return null;
    }
    return JSON.parse(tokenData);
  };

  useEffect(() => {
    const setCompanyNameFromToken = async () => {
      const tokenData = getTokenData(); // Retrieve token data
      if (!tokenData || !tokenData.token) {
        console.error("No token found in localStorage.");
        return;
      }
  
      const token = tokenData.token;
  
      try {
        // Verify the token with the server
        const response = await axios.post("http://localhost:4000/signup/jwtverification", { token });
  
        if (response.data.valid) {
          // Assuming the response contains companyName, update the formData state
          setFormData((prevFormData) => ({
            ...prevFormData,
            companyName: response.data.name, // Adjust the key as per your API response
          }));
        } else {
          console.error("Invalid token.");
        }
      } catch (error) {
        console.error("Token verification failed:", error.response?.data || error.message);
      }
    };
  
    setCompanyNameFromToken();
  }, [getTokenData]);
  

  // function to handle inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === "checkbox") {
      setFormData((prev) => {
        // If the checkbox is checked, add the value to the availableSize array.
        if (checked) {
          return {
            ...prev,
            availableSize: [...prev.availableSize, value],
          };
        } else {
          // If the checkbox is unchecked, remove the value from the availableSize array.
          return {
            ...prev,
            availableSize: prev.availableSize.filter((size) => size !== value),
          };
        }
      });
    } else {
      // For other input types (like text or number), update the field directly.
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  // to submit the value in backend
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/seller/add',formData,{
        headers:{
          'Content-Type':'application/json',
        },
      });
      alert('Product saved successfully');
      navigate("/seller");
      console.log('Response',response.data);
    } catch (error) {
      console.error('error: ',error.response?.data || error.message);
      alert('failed to save product!!! please try again.');
    }
  }

  return (
   <>
      <div className={styles.container}>
        {/* <SellerNavbar /> */}



        <div className={styles.content}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.box}>
              <label> NAME: </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className={styles.box}>
              <label>ORIGINAL PRICE: </label>
              <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} />
            </div>
            <div className={styles.box}>
              <label>DISCOUNT PERCENTAGE: </label>
              <input type="number" name="discountPercent" value={formData.discountPercent} onChange={handleChange} />
            </div>
            <div className={styles.box}>
              <label>DESCRIPTION: </label>
              <input type="text" name="description" value={formData.description} onChange={handleChange} />
            </div>
            <div className={styles.box}>
              <label>TOTAL QUANTITY AVAILABLE: </label>
              <input type="number" name="totalQuantityAvailable" value={formData.totalQuantityAvailable} onChange={handleChange} />
            </div>

            <div className={styles.box}>
              <label>AVAILABLE SIZES: </label>
              <div className={styles.radio}>
                {['XS','S','M','L','XL','XXL','XXXL',"One Size"].map((size)=>(
                  <label key={size}>
                    <input type="checkbox" name="availableSize" value={size} checked={formData.availableSize.includes(size)} onChange={handleChange} />
                    {size}
                  </label>
                ))}
              </div>
            </div>
            
            <div className={styles.box}>
              <label>GENDER: </label>
              <div className={styles.radio}>
                {['Male','Female','kids'].map((gender)=>(
                  <label key={gender}>
                    <input type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleChange}  />
                    {gender}
                  </label>
                  
                ))}
              </div>
            </div>
            <div className={styles.box}>
              <label>CATEGORY: </label>
              <div className={styles.radio}>
                {['Topwear','Bottomwear','Footwear','Accessories'].map((category)=>(
                  <label key={category}>
                    <input type="radio" name="category" value={category} checked={formData.category === category} onChange={handleChange} />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            
            <div className={styles.box}>
              <label>TYPE: </label>
              <div className={styles.radio}>
                {['Party','Casual','Formal','Sports'].map((type)=>(
                  <label key={type}>
                    <input type="radio" name="type" value={type} checked={formData.type === type} onChange={handleChange} />
                    {type}
                  </label>
                ))}
              </div>
            </div>
            
            <div className={styles.box}>
              <label>IMAGE: </label>
              <input type="url" name="image" value={formData.image} onChange={handleChange} />
            </div>
            <div className={styles.box}>
              <label>IMAGE2: </label>
              <input type="url" name="image2" value={formData.image2} onChange={handleChange} />
            </div>
            <div className={styles.box}>
              <label>IMAGE3: </label>
              <input type="url" name="image3" value={formData.image3} onChange={handleChange} />
            </div>
            <div className={styles.box}>
              <label>IMAGE4: </label>
              <input type="url" name="image4" value={formData.image4} onChange={handleChange} />
            </div>
            <div className={styles.box}>
              <label>IMAGE5: </label>
              <input type="url" name="image5" value={formData.image5} onChange={handleChange} />
            </div>
            <div className={styles.buttonBox}>
              <button type="submit" className={styles.button}>Add</button>
            </div>
          </form>
        </div>
        < Footer />
      </div>
    </>
  )
}

export default Add