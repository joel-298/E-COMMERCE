import React, { useEffect, useState } from 'react' ;
import styles from './AddSeller.module.css' ;
import SUBNavbar from '../../Navbar/SUBNavbar';
import Footer from '../../Footer/Footer';


const AddSeller = () => {
  return (
    <>
    <div className={styles.container}>
      <SUBNavbar/>   
      <div className={styles.content}>
        THIS IS THE ADDING SELLER FORM
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default AddSeller ;
