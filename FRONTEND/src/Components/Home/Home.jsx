import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import styles from './Home.module.css' ;


const Home = () => {
  return (
    <div className={styles.container}>
        <Navbar/> 
        {/* <div>THIS IS HOME</div>
        <Footer/> */}
    </div>
  )
}

export default Home;

{/* <div className={styles.box}>
<img src="./public/Vector.svg" alt="" />
</div> */}
// Looply
// Nexlo
// Shopza
// Zyra
// Cartly
// Vyori
// Merxa
// Brandify
// Wavely
// Klyra
// Shopsta
// Fyndr
// Vendra
// Optify
// Sorza
// Nestify
// Blissta
// Velox
// Moona
// Froza


// ADDING ITEMS CONTENT : 
// 1) product name , 
// 2) original price , 
// 3) discount percent , 
// 4) comapny name , 
// 5) description , 
// 6) type : casual , formal , party , gym
// 7) SIZE : XS, S , M , L , XL , XXL 
// 8) TOTAL QUANTITY AVAILABLE : only 1000 left (for an example)