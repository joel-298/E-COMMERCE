import React ,{useState  , useEffect} from 'react'
import { Link, Element } from 'react-scroll';
import styles from './Y.module.css' ;
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import axios from 'axios' ;

const Y = () => {
  // PRODUCTS CATEGORY API :
  const brr = [
    {
      category: 'Casual',
      image: 'https://i.pinimg.com/564x/0f/a2/57/0fa25745a5c372cd160c1b6cdba623d5.jpg'
    },
    {
        category: 'Formal',
        image: 'https://i.pinimg.com/736x/21/29/07/212907e7fbb266a986bdf81396a2cfb7.jpg'
    },
    {
        category: 'Party',
        image: 'https://i.pinimg.com/736x/36/2e/f9/362ef97e2ad923b27265b1c1d3a8962a.jpg'
    },
    {
        category: 'Sports',
        image: 'https://i.pinimg.com/564x/9d/0a/30/9d0a30cba5cffb075a8f50470ef8ea78.jpg'
    }
  ] 

  // const navigate = useNavigate() ;
  const location = useLocation() ;
  const { title = "" } = location.state || {} ;
  

  const navigate = useNavigate() ;

  // use state 
  const [arr,setArr] = useState([]) ; // global
  const [topwears,setProducts_topwears] = useState([]) ;
  const [bottomwears,setProducts_bottomwears] = useState([]) ;
  const [footwears,setProducts_footwears] = useState([]) ;
  const [accessories,setProducts_accessories] = useState([]) ;
  const [onSale,setProducts_Onsale] = useState([]) ; 


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post("https://e-commerce-k1rr.onrender.com/products/y" , {title}); 
        setArr(response.data.arr);
        console.log(arr); 
        const filterTopwears = arr.filter(product => product.category === 'Topwear') ; 
        setProducts_topwears(filterTopwears) ;
        const filterBottomwear = arr.filter(product => product.category === 'Bottomwear') ; 
        setProducts_bottomwears(filterBottomwear) ;
        const filterFootwear = arr.filter(product => product.category === 'Footwear') ; 
        setProducts_footwears(filterFootwear) ;
        const filterAccessories = arr.filter(product => product.category === 'Accessories') ; 
        setProducts_accessories(filterAccessories) ;
        const filteredOnSale = arr.filter(product => product.discountPercent > 50);
        setProducts_Onsale(filteredOnSale);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };
    fetchProducts();

    

  }, [arr]);

  return (
    <div className={styles.container}>
        <Navbar/> 
        <div className={styles.content}>
          <div className={styles.container2}>
            <Link to="newArrival_section" smooth={true} duration={100} ><div className={styles.items_container2} >New Arrivlas</div></Link>
            <Link to="topwears_section" smooth={true} duration={100} ><div className={styles.items_container2} >Tops & Sweaters</div></Link>
            <Link to="bottomwears_section" smooth={true} duration={100} ><div className={styles.items_container2}>Pants & Jeans</div></Link>
            <Link to="footwears_section" smooth={true} duration={100} ><div className={styles.items_container2}>Shoes & Bags</div></Link>
            <Link to="accessories_section" smooth={true} duration={100} ><div className={styles.items_container2}>Accessories</div></Link>
            <Link to="onSale_section" smooth={true} duration={100} ><div className={styles.items_container2}><span>Sale</span></div></Link>
          </div>

          <div className={styles.shop_now}>
            <Link to="category" smooth={true} duration={100} ><img src="./Background.png" alt="background image" className={styles.shop_now_image}/></Link>
          </div>


          <h1 className={styles.category}><Element  id='category' >SHOP BY CATEGORY</Element></h1>
          <div className={styles.dressing}>
            <div className={styles.box1}> 
              {brr.map((item, index) => (                                                         // create a map function on arr (PRODUCTS)and display imge , name of the product and its description here  
                <div
                  key={index}
                  className={styles.productCard}
                  onClick={() => {
                    let title2 = '';

                    // Check category and set filteredProducts and title
                    if (item.category === 'Casual') {
                      title2 = item.category;
                    } else if (item.category === 'Formal') {
                      title2 = item.category;
                    } else if (item.category === 'Party') {
                      title2 = item.category;
                    } else if (item.category === 'Sports') {
                      title2 = item.category;
                    }
                    navigate('/x', {state: { title1 : title , title2 } } );  // title1 represents : home , women , men , kids  // title2 represents : brand's name, new arrivals , onSale etc ..
                  }}
                >
                  <img src={item.image} alt={item.name} className={styles.productImage} />
                  <h2 className={styles.category}>{item.category}</h2>
                </div>
              ))}
            </div>
          </div>



  
          <div className={styles.Brands}>
            <div className={styles.box1}>                                              
              <Element className={styles.productCard} id="newArrival_section" onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "NewArrivals"}})}}>
                <img src="./newArrivals.png" alt="new-arrivals" className={styles.productImage} />
                <div className={styles.button_and_headings}>
                  <p>NEW ARRIVALS</p>
                  <button onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "NewArrivals"}})}}>EXPLORE THE LATEST</button>
                </div>
              </Element>
              <Element className={styles.productCard}  id="bestSeller_section" onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "NewArrivals"}})}}>
                <img src="./BestSellers.png" alt="best-sellers" className={styles.productImage} />
                <div className={styles.button_and_headings}>
                  <p>BEST-SELLERS</p>
                  <button onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "NewArrivals"}})}}>SHOP YOUR FAVOURITES</button>
                </div>
              </Element>
              <Element className={styles.productCard}  id="brands_section" onClick={() => { navigate('/brands') } }>
                <img src="./Brands.png" alt="brands" className={styles.productImage} />
                <div className={styles.button_and_headings}>
                  <p>BRANDS</p>
                  <button onClick={() => { navigate('/brands') } }>DISCOVER BRANDS</button>
                </div>
              </Element>
            </div>
          </div>
          
          <h1 className={styles.on_sale_heading}><Element id="onSale_section">ON SALE</Element></h1>
          <div className={styles.onSale}>
            {/* <h1>{`<`}</h1> */}
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {onSale.slice(0, 6).map(item => (
                  <div key={item._id} className={styles.productCard} onClick={() => { navigate('/item', { state: { _id: item._id } }) }}>
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
              {/* <h1>{`>`}</h1> */}
              <button  onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "OnSale"}})}}>View All</button>
          </div>

          <h1><Element id="topwears_section">TOPS & SWEATERS</Element></h1>
          <div className={styles.onSale}>
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {topwears.slice(0, 6).map(item => (
                  <div key={item._id} className={styles.productCard} onClick={() => { navigate('/item', { state: { _id: item._id } }) }}>
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
              <button onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "Topwear"}})}}>View All</button>
          </div>
          <h1><Element id="bottomwears_section">PANTS & JEANS</Element></h1>
          <div className={styles.onSale}>
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {bottomwears.slice(0, 6).map(item => (
                  <div key={item._id} className={styles.productCard} onClick={() => { navigate('/item', { state: { _id: item._id } }) }}>
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
              <button onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "Bottomwear"}})}}>View All</button>
          </div>
          <h1><Element id="footwears_section">SHOES & BAGS</Element></h1>
          <div className={styles.onSale}>
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {footwears.slice(0, 6).map(item => (
                  <div key={item._id} className={styles.productCard} onClick={() => { navigate('/item', { state: { _id: item._id } }) }}>
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
              <button onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "Footwear"}})}}>View All</button>
          </div>
          <h1><Element id="accessories_section">ACCESSORIES</Element></h1>
          <div className={styles.onSale}>
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {accessories.slice(0, 6).map(item => (
                  <div key={item._id} className={styles.productCard} onClick={() => { navigate('/item', { state: { _id: item._id } }) }}>
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
              <button onClick={()=> {navigate('/x', {state : {title1 : title, title2 : "Accessories"}})}}>View All</button>
          </div>

          <div className={styles.search_content}>
            Result of search content
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Y;


