import React ,{useState  , useEffect} from 'react'
import { Link, Element } from 'react-scroll';
import styles from './Y.module.css' ;
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';


const Y = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    // Access the data passed via navigate
    const { arr = [], title = '' } = location.state || {};

    // receive in arr 
  // SELLER API : 
  const Sellers = [
    {
      name: "Denim",
      image: "https://img.freepik.com/premium-vector/classic-denim-jeans-logo_23-2147524034.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "H&M",
        image: "https://i.pinimg.com/736x/f9/a4/bd/f9a4bdde730745e53482e902543464a5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "Zara",
        image: "https://i.pinimg.com/564x/48/64/fd/4864fd205ac63a7663224b8c1f8baed2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "Ray-Ban",
        image: "https://i.pinimg.com/564x/cb/7d/d1/cb7dd109945429d8dbe498b57f237bdf.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "Rolex",
        image: "https://i.pinimg.com/564x/33/85/6e/33856e7db9c9149ac4174ef49f43c74a.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "Nike",
        image: "https://i.pinimg.com/564x/34/c3/57/34c357ee31431b6cd13fe1ebe1d47980.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "RedTape",
        image: "https://i.pinimg.com/564x/34/21/c7/3421c788618c4487a7b1e338cf03d273.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "Linen Club",
        // image: "https://mma.prnewswire.com/media/1227507/Linen_Club_Logo.jpg?p=facebook",
        image : "https://indiantextilejournal.com/wp-content/uploads/2021/11/linen-club-unveils-new-brand-identity-and-logo.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "Diesel",
        image: "https://i.pinimg.com/564x/0d/06/1f/0d061fede089c3b4b2b639c3af84b3a8.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    },
    {
        name: "Gucci",
        image: "https://i.pinimg.com/564x/62/76/32/6276327ee9ee965cfe426561a9b14ff7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
    }
  ]


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


  // use state 
  const [Casual,setProducts_casual] = useState([]) ;
  const [Formal,setProducts_formal] = useState([]) ;
  const [Sports,setProducts_sports] = useState([]) ;
  const [Party,setProducts_party] = useState([]) ;
  const [newArrivals,setProducts_newArrivals] = useState([]) ;
  const [topwears,setProducts_topwears] = useState([]) ;
  const [bottomwears,setProducts_bottomwears] = useState([]) ;
  const [footwears,setProducts_footwears] = useState([]) ;
  const [accessories,setProducts_accessories] = useState([]) ;
  const [onSale,setProducts_Onsale] = useState([]) ; 
  const [brands,setBrands] = useState([]) ;

  useEffect(() => {
    // Confirm that `arr` has data before filtering
    if (arr.length === 0) {
      console.log("No data in `arr`.");
      return;
    }
    
    // Filter products based on type and category
    setProducts_casual(arr.filter(product => product.type === 'Casual'));
    setProducts_formal(arr.filter(product => product.type === 'Formal'));
    setProducts_sports(arr.filter(product => product.type === 'Sports'));
    setProducts_party(arr.filter(product => product.type === 'Party'));
    setProducts_newArrivals([...arr]);
    setProducts_topwears(arr.filter(product => product.category === 'Topwear'));
    setProducts_bottomwears(arr.filter(product => product.category === 'Bottomwear'));
    setProducts_footwears(arr.filter(product => product.category === 'Footwear'));
    setProducts_accessories(arr.filter(product => product.category === 'Accessories'));
    setProducts_Onsale(arr.filter(product => product.discountPercent > 50));
    setBrands(Sellers);
  }, [arr]); // Ensure `useEffect` runs whenever `arr` changes

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
            <img src="./Background.png" alt="background image" />
            <div className={styles.shop_now_sub_div}>
              <h1>Your Cozy Era</h1>
              <p>Get peak comfy-chic with new winter essentials.</p>
              <button><Link to="category" smooth={true} duration={100}>SHOP NOW</Link></button>
            </div>
          </div>


          <h1 className={styles.category}><Element  id='category' >SHOP BY CATEGORY</Element></h1>
          <div className={styles.dressing}>
            <div className={styles.box1}> 
              {brr.map((item, index) => (                                                         // create a map function on arr (PRODUCTS)and display imge , name of the product and its description here  
                <div
                  key={index}
                  className={styles.productCard}
                  onClick={() => {
                    // Navigate to '/x' with appropriate state based on category
                    let filteredProducts = [];
                    let title = '';

                    // Check category and set filteredProducts and title
                    if (item.category === 'Casual') {
                      filteredProducts = Casual; // or setProducts_casual if you need to fetch data on click
                      title = 'CASUAL';
                    } else if (item.category === 'Formal') {
                      filteredProducts = Formal; // or setProducts_formal if you need to fetch data on click
                      title = 'FORMAL';
                    } else if (item.category === 'Party') {
                      filteredProducts = Party; // or setProducts_party if you need to fetch data on click
                      title = 'PARTY';
                    } else if (item.category === 'Sports') {
                      filteredProducts = Sports; // or setProducts_sports if you need to fetch data on click
                      title = 'SPORTS';
                    }
                    navigate('/x', { state: { arr:arr, products: filteredProducts, title } });
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
              <Element className={styles.productCard} id="newArrival_section" onClick={()=> { navigate('/x', { state: { products : newArrivals, title: 'NEW ARRIVALS' } }) }}>
                <img src="./newArrivals.png" alt="new-arrivals" className={styles.productImage} />
                <div className={styles.button_and_headings}>
                  <p>NEW ARRIVALS</p>
                  <button onClick={()=> { navigate('/x', { state: { arr:arr, products : newArrivals, title: 'NEW ARRIVALS' } }) }}>EXPLORE THE LATEST</button>
                </div>
              </Element>
              <Element className={styles.productCard}  id="bestSeller_section" onClick={()=> { navigate('/x', { state: { products : newArrivals, title: 'NEW ARRIVALS' } }) }}>
                <img src="./BestSellers.png" alt="best-sellers" className={styles.productImage} />
                <div className={styles.button_and_headings}>
                  <p>BEST-SELLERS</p>
                  <button onClick={()=> { navigate('/x', { state: { arr:arr, products : newArrivals, title: 'NEW ARRIVALS' } }) }}>SHOP YOUR FAVOURITES</button>
                </div>
              </Element>
              <Element className={styles.productCard}  id="brands_section" onClick={()=> { navigate('/brands', { state: { products : brands, title: 'BRANDS' } }) }}>
                <img src="./Brands.png" alt="brands" className={styles.productImage} />
                <div className={styles.button_and_headings}>
                  <p>BRANDS</p>
                  <button onClick={()=> { navigate('/brands', { state: { products : brands} }) }}>DISCOVER BRANDS</button>
                </div>
              </Element>
            </div>
          </div>
          
          <h1 className={styles.on_sale_heading}><Element id="onSale_section">ON SALE</Element></h1>
          <div className={styles.onSale}>
            {/* <h1>{`<`}</h1> */}
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {onSale.slice(0, 6).map(item => (
                  <div key={item.id} className={styles.productCard} onClick={()=> { navigate('/item', { state: { obj :item } }) }}>
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
              <button onClick={()=> { navigate('/x', { state: { arr:arr, products : onSale, title: 'ON SALE' } }) }}>View All</button>
          </div>

          <h1><Element id="topwears_section">TOPS & SWEATERS</Element></h1>
          <div className={styles.onSale}>
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {topwears.slice(0, 6).map(item => (
                  <div key={item.id} className={styles.productCard} onClick={()=> { navigate('/item', { state: { obj :item } }) }}>
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
              <button onClick={()=> { navigate('/x', { state: { arr:arr, products : topwears, title: 'TOPS & SWEATERS' } }) }}>View All</button>
          </div>
          <h1><Element id="bottomwears_section">PANTS & JEANS</Element></h1>
          <div className={styles.onSale}>
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {bottomwears.slice(0, 6).map(item => (
                  <div key={item.id} className={styles.productCard} onClick={()=> { navigate('/item', { state: { obj :item } }) }}>
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
              <button onClick={()=> { navigate('/x', { state: { arr:arr, products : bottomwears, title: 'PANTS & JEANS' } }) }}>View All</button>
          </div>
          <h1><Element id="footwears_section">SHOES & BAGS</Element></h1>
          <div className={styles.onSale}>
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {footwears.slice(0, 6).map(item => (
                  <div key={item.id} className={styles.productCard} onClick={()=> { navigate('/item', { state: { obj :item } }) }}>
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
              <button onClick={()=> { navigate('/x', { state: { arr:arr, products : footwears, title: 'SHOES & BAGS' } }) }}>View All</button>
          </div>
          <h1><Element id="accessories_section">ACCESSORIES</Element></h1>
          <div className={styles.onSale}>
              <div className={styles.box1}>                                                        {/*  map function below for items discount > 50 % */}
                {accessories.slice(0, 6).map(item => (
                  <div key={item.id} className={styles.productCard} onClick={()=> { navigate('/item', { state: { obj :item } }) }}>
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
              <button onClick={()=> { navigate('/x', { state: { arr:arr, products : accessories, title: 'ACCESSORIES' } }) }}>View All</button>
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


