import React, { useState } from 'react'

const Add = () => {
  // use state
  const [formData,setFormData] = useState({
    name:'',originalPrice:'',discountPercent:'',companyName:'',description:'',
    availableSize:[],
    gender:'',totalQuantityAvailable:'',category:'',type:'',image:'',image2:'',
    image3:'',image4:'',image5:''
  })

  // function to handle inputs
  const handleChange = ((e)=>{
    const [name,value,type,checked] = e.target;
    if(type === 'checkbox'){
      setFormData((prev)=>{
        // If the checkbox is checked, add the value to the availableSize array.
        if(checked){
          return {
            ...prev,
            availableSize:[...prev.availableSize,value],
          };
        }
        // If the checkbox is unchecked, remove the value from the availableSize array.
        else{
          return {
            ...prev,
            availableSize:prev.availableSize.filter((size)=> size != value),
          };
        }
      });
    }
    else{
      // For other input types (like text or number), update the field directly.
      setFormData((prev)=>({
        ...prev,
        [name]:value,
      }))
    }

  })

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
      console.log('Response',response.data);
    } catch (error) {
      console.error('error: ',error.response?.data || error.message);
      alert('failed to save product!!! please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> NAME: </label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>ORIGINAL PRICE: </label>
      <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} />
      <label>DISCOUNT PERCENTAGE: </label>
      <input type="number" name="discountPercent" value={formData.discountPercent} onChange={handleChange} />
      <label>COMPANY NAME: </label>
      <input type="text" name="companyName" id="" value={formData.companyName} onChange={handleChange}/>
      <label>DESCRIPTION: </label>
      <input type="text" name="description" value={formData.description} onChange={handleChange} />
      <label>TOTAL QUANTITY AVAILABLE: </label>
      <input type="number" name="totalQuantityAvailable" id="" />
      <label>AVAILABLE SIZES: </label>
      <div>
        {['XS','S','M','L','XL','XXL','XXXL'.map((size)=>(
          <label>
            <input type="checkbox" name="availableSizes"  />
          </label>
        ))]}
      </div>
      <label>GENDER: </label>
      <div>
        {['Male','Female']}
      </div>
      <label>CATEGORY: </label>
      <input type="text" name="category" id="" />
      <label>TYPE: </label>
      <input type="text" name="type" id="" />

      <label>IMAGE: </label>
      <input type="url" name="image" value={formData.image} onChange={handleChange} />
      <label>IMAGE2: </label>
      <input type="url" name="image2" value={formData.image2} onChange={handleChange} />
      <label>IMAGE3: </label>
      <input type="url" name="image3" value={formData.image3} onChange={handleChange} />
      <label>IMAGE4: </label>
      <input type="url" name="image4" value={formData.image4} onChange={handleChange} />
      <label>IMAGE5: </label>
      <input type="url" name="image5" id="" />
    </form>
  )
}

export default Add