import React ,{useState  , useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import styles from './Home.module.css' ;
import { useNavigate } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import axios from 'axios' ;

const Home = () => {
  const [arr , setArr] = useState([]) ;
  const navigate = useNavigate() ;

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
  const [topwears,setProducts_topwears] = useState([]) ;
  const [bottomwears,setProducts_bottomwears] = useState([]) ;
  const [footwears,setProducts_footwears] = useState([]) ;
  const [accessories,setProducts_accessories] = useState([]) ;
  const [onSale,setProducts_Onsale] = useState([]) ; 
  // const [brands,setBrands] = useState([]) ;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products/get");
        // console.log(response.data.arr) ;
        setArr(response.data.arr) ;

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
        console.log("Error while fetching data" , error) ;
      } 
    };
    fetchProducts() ;

   // setBrands(Sellers) ;
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
                  navigate('/x', {state: { title1 : "Home" , title2 } } );  // title1 represents : home , women , men , kids  // title2 represents : brand's name, new arrivals , onSale etc ..
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
            <Element className={styles.productCard} id="newArrival_section" onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "NewArrivals"}})}}>
              <img src="./newArrivals.png" alt="new-arrivals" className={styles.productImage} />
              <div className={styles.button_and_headings}>
                <p>NEW ARRIVALS</p>
                <button onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "NewArrivals"}})}}>EXPLORE THE LATEST</button>
              </div>
            </Element>
            <Element className={styles.productCard}  id="bestSeller_section" onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "NewArrivals"}})}}>
              <img src="./BestSellers.png" alt="best-sellers" className={styles.productImage} />
              <div className={styles.button_and_headings}>
                <p>BEST-SELLERS</p>
                <button onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "NewArrivals"}})}}>SHOP YOUR FAVOURITES</button>
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
                <div key={item._id} className={styles.productCard}  onClick={() => { navigate('/item', { state: { _id: item._id } }) }}>
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
            <button onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "OnSale"}})}}>View All</button>
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
            <button onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "Topwear"}})}}>View All</button>
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
            <button onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "Bottomwear"}})}}>View All</button>
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
            <button onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "Footwear"}})}}>View All</button>
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
            <button  onClick={()=> {navigate('/x', {state : {title1 : "Home", title2 : "Accessories"}})}}>View All</button>
        </div>

        <div className={styles.search_content}>
          Result of search content
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;


// ADDING ITEMS CONTENT : 
// 1) PRODUCT IMAGE : 5 IMAGES :  => KEY : image:, image2:, image3:, image4:, image5
// 2) product name                => KEY : name:
// 3) original price              => KEY : originalPrice:
// 4) discount percent            => KEY : discountPercent: 
// 5) comapny name                => KEY : companyName: 
// 6) description                 => KEY : description: 
// 7) type :                      => KEY : type:                       (AVALIABLE TYPES : 'Casual' , 'Formal' ,'Party' , 'Sports')
// 8) SIZE :                      => KEY : availableSizes:             (AVALIABLE TYPES :  ["XS", "S", "M", "L", "XL"] , ["Only one Size"] )
// 9) Gender :                    => KEY :  gender:                    (AVAILABLE Genders :  'Male', 'Female' , 'Kids' )
// 10) TOTAL QUANTITY AVAILABLE : => KEY : totalQuantityAvailable:     (AVAILABLE Quantity:  "Only 1000 left")
// 11) category :                 => KEY : category:                   (AVAILABLE Category : "Topwear" , "Bottomwear" , "Footwear" , "Accessories")




// Style-Based Clothing Categories
//1) Casual Wear – Relaxed, everyday clothing like t-shirts, hoodies, and relaxed-fit pants.
//2) Formal Wear – Professional or event-specific attire such as suits, blazers, and dress shirts.
//3) Ethnic/Traditional Wear – Cultural attire for various regions, like sarees, kurtas, qipaos, or kaftans.
//4) Party Wear – Glamorous outfits for social events, including dresses, sequined tops, and stylish jumpsuits.
//5) Athleisure – A mix of athletic and leisurewear, like joggers, athletic tops, and stylish track jackets.
//6) Loungewear – Comfortable, cozy clothing meant for relaxing at home, including sweatpants, cardigans, and oversized tees.
//7) Workwear/Business Casual – A balance between formal and casual, suitable for the modern office, like blouses, blazers, and chinos.
//8) Streetwear – Trendy, urban-inspired clothing often featuring graphic tees, cargo pants, and oversized jackets.
//9) Bohemian (Boho) Style – Free-spirited, artistic fashion, often with flowy dresses, earthy colors, and eclectic prints.
//10) Minimalist – Simple, understated clothing in neutral colors, focusing on clean lines and high-quality fabrics.
//11) Resort Wear/Vacation Wear – Lightweight, breezy attire suited for vacations, like maxi dresses, linen pants, and tunics.
//12) Preppy – Classic, collegiate-inspired style, including polo shirts, sweaters, and pleated skirts.
//13) Evening Wear – Elegant attire for formal evening events, such as gowns, cocktail dresses, and tuxedos.
//14) Gothic/Alternative – Edgy, dark-colored clothing often featuring leather, metal accents, and unique silhouettes.
//15) Eco-Friendly/Sustainable Fashion – Clothing made from eco-friendly materials, designed for environmentally conscious consumers.
//16) Modest Wear – Styles that provide more coverage, often including maxi dresses, long-sleeved tops, and headscarves.





// { 
//   id: 7,
//   image: "https://i.pinimg.com/564x/b4/83/c2/b483c2cd69e04c414f2d39ae51256002.jpg",
//   image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
//   image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
//   image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
//   image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
//   name: "Sneakers",
//   originalPrice: 5999,
//   discountPercent: 70,
//   companyName: "Nike",
//   description: "Rugged outdoor shoes designed for durability and comfort.",
//   type: "Sports",
//   availableSizes: ["M", "L", "XL"],
//   gender: "Male",
//   totalQuantityAvailable: "Only 250 left",
//   category: "Footwear"
// },


  // // SELLER API : 
  // const Sellers = [
  //   {
  //     name: "Denim",
  //     image: "https://img.freepik.com/premium-vector/classic-denim-jeans-logo_23-2147524034.jpg",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "H&M",
  //       image: "https://i.pinimg.com/736x/f9/a4/bd/f9a4bdde730745e53482e902543464a5.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "Zara",
  //       image: "https://i.pinimg.com/564x/48/64/fd/4864fd205ac63a7663224b8c1f8baed2.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "Ray-Ban",
  //       image: "https://i.pinimg.com/564x/cb/7d/d1/cb7dd109945429d8dbe498b57f237bdf.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "Rolex",
  //       image: "https://i.pinimg.com/564x/33/85/6e/33856e7db9c9149ac4174ef49f43c74a.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "Nike",
  //       image: "https://i.pinimg.com/564x/34/c3/57/34c357ee31431b6cd13fe1ebe1d47980.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "RedTape",
  //       image: "https://i.pinimg.com/564x/34/21/c7/3421c788618c4487a7b1e338cf03d273.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "Linen Club",
  //       // image: "https://mma.prnewswire.com/media/1227507/Linen_Club_Logo.jpg?p=facebook",
  //       image : "https://indiantextilejournal.com/wp-content/uploads/2021/11/linen-club-unveils-new-brand-identity-and-logo.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "Diesel",
  //       image: "https://i.pinimg.com/564x/0d/06/1f/0d061fede089c3b4b2b639c3af84b3a8.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   },
  //   {
  //       name: "Gucci",
  //       image: "https://i.pinimg.com/564x/62/76/32/6276327ee9ee965cfe426561a9b14ff7.jpg",
  //       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur delectus aperiam cumque nemo dignissimos, dolores magnam consequatur atque quam molestias corrupti adipisci quisquam, blanditiis quos voluptatum possimus ad tempore corporis!" 
  //   }
  // ]