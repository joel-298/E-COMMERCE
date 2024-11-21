import React, { useState } from 'react';
import styles from './AddSeller.module.css';
import SUBNavbar from '../../Navbar/SUBNavbar';
import Footer from '../../Footer/Footer';
import axios from 'axios';

const AddSeller = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
    description: '',
  });

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/admin/add', { obj: formData });
      alert(response.data.message); // Alert backend message
      setFormData({ name: '', email: '', password: '', image: '', description: '' }); // Reset form
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <SUBNavbar />
        <div className={styles.content}>
          <h2>Adding Seller Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
              Image URL:
              <input type="text" name="image" value={formData.image} onChange={handleChange} />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={formData.description} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddSeller;
