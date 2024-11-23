import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Forms = () => {
  const [products,setProducts] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(()=>{
    const fetchProducts = async()=>{
      try {
        const company = token.companyName;
        con
        console.log(company);
        const res = await axios.get(`http://localhost:4000/seller/filter/${company}`,{
          headers:{Authorization:`Bearer ${token}`},
        })
        setProducts(res.data.arr);
      } catch (error) {
        console.log("error fetching products: ",error);
      }
    }

    fetchProducts(); // Fetch products when the component loads
  },[token])
  return (
    <div>
      {/* all products displayed filtered on the basis of companyName throught token present in localhost */}
      <h1>Products</h1>
      <div>
        {products.map((product)=>(
          <div>
            <h2>{product.name}</h2>
            <p>Company: {product.companyName}</p>
            <p>Category: {product.category}</p>
            <p>Price:${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forms