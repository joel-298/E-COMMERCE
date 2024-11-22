import React, { useState } from 'react';
import styles from './AddSeller.module.css';
import AdminNavbar from '../../Navbar/AdminNavbar';
import Footer from '../../Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddSeller = () => {
  const navigate = useNavigate() ;
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
      navigate("/admin") ;
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <AdminNavbar />
        <div className={styles.content}>
          <h2 className={styles.h2}>Create a Seller Account !</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              Name :
              &nbsp;<input className={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label className={styles.label}>
              Email :
              &nbsp;<input className={styles.input} type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label className={styles.label}>
              Password :
              &nbsp;<input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label className={styles.label}>
              Image URL :
              &nbsp;<input className={styles.input} type="text" name="image" value={formData.image} onChange={handleChange} />
            </label>
            <label className={styles.label}>
              Description :
              &nbsp;<input className={styles.input} type="text" name="description" value={formData.description} onChange={handleChange} />
            </label>
            <button type="submit" className={styles.button}>Submit</button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddSeller;
