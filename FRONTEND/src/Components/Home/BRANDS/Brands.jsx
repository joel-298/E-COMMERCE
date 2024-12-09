import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Brands.module.css' 
import Footer from '../../Footer/Footer';
import SUBNavbar from '../../Navbar/SUBNavbar';
import axios from 'axios';


const Brands = () => {
  const [arr, setProducts] = useState([]) ;
  useEffect(()=> {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://e-commerce-k1rr.onrender.com/admin/getSellers") ;
        setProducts(response.data.arr) ;
      } catch (error) {
        console.log("Error fetching data", error) ;
      }
    }
    fetchProducts() ;
  }, [arr]) ;

  const navigate = useNavigate() ;


  return (
    <div className={styles.container}>
      <SUBNavbar/>
      <div className={styles.content}>
        <p className={styles.p}>BRANDS ASSOCIATED WITH US</p>
        <div className={styles.child}>
          {arr.map((product, index) => (
              <div key={index} className={styles.product} onClick={ () => { navigate('/x' , {state : {title1 : product.name , title2 : product.name}})} }>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                  <p>{product.name}</p>
              </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Brands
