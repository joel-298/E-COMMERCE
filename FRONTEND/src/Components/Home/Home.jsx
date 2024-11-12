import React ,{useState  , useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import styles from './Home.module.css' ;
import { useNavigate } from 'react-router-dom';
import { Link, Element } from 'react-scroll';


const Home = () => {
  const navigate = useNavigate() ;
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

  // PRODUCTS API : 
  const arr = [
    { 
      id: 0,
      image: "https://i.pinimg.com/564x/12/4b/7d/124b7d3152cd27be504694c9e3e5d40e.jpg",
      image2 : "https://i.pinimg.com/564x/1c/62/33/1c6233171e1dedd7c319fbee9a715f7a.jpg" , 
      image3 : "https://i.pinimg.com/564x/5c/d2/25/5cd2253551159c0ba12478db674fa43d.jpg" , 
      image4 : "https://media.boohooman.com/i/boohooman/bmm64493_vintage%20blue_xl_1/vintage-blue-denim-parachute-jean?$product_page_main_magic_zoom$&_gl=1*uqhyg*_up*MQ..&gbraid=0AAAAADcQF9RDHjVN8IlKLV9fBPlwQVz75" ,
      image5 : "https://media.boohooman.com/i/boohooman/bmm64493_vintage%20blue_xl_2/vintage-blue-denim-parachute-jean?$product_page_main_magic_zoom$",
      name: "Baggy Jeans",
      originalPrice: 2999, // original price in currency units
      discountPercent: 20, // discount percentage
      companyName: "Denim",
      description: "These baggy jeans are crafted from stretch denim for ultimate comfort and style.",
      type: "Casual", // options: Casual, Formal, Party, Gym
      availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
      gender: "Male", // options: Male, Female, Kids
      totalQuantityAvailable: "Only 1000 left",
      category: "Bottomwear" // options: Bottomwear, Footwear, Topwear, Accessories
    },
    { 
      id: 1,
      image: "https://i.pinimg.com/564x/37/30/85/3730851186fae0919b6493108c81ea49.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Straight Fit Jeans",
      originalPrice: 3499,
      discountPercent: 15,
      companyName: "H&M",
      description: "Comfortable straight-fit jeans with a timeless style.",
      type: "Casual",
      availableSizes: ["S", "M", "L", "XL"],
      gender: "Male",
      totalQuantityAvailable: "Only 500 left",
      category: "Bottomwear"
    },
    { 
      id: 2,
      image: "https://i.pinimg.com/564x/f7/bd/94/f7bd94a4919c4ae7e503d66be618c337.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Straight Fit Jeans",
      originalPrice: 3999,
      discountPercent: 60,
      companyName: "Zara",
      description: "Classic straight-fit jeans with a durable design.",
      type: "Casual",
      availableSizes: ["M", "L", "XL", "XXL"],
      gender: "Female",
      totalQuantityAvailable: "Only 300 left",
      category: "Bottomwear"
    },
    { 
      id: 3,
      image: "https://i.pinimg.com/564x/8e/5a/86/8e5a86c1393bed2d9e763328fbd333d3.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Leather Jacket",
      originalPrice: 7999,
      discountPercent: 25,
      companyName: "Zara",
      description: "Stylish leather jacket perfect for casual and party wear.",
      type: "Party",
      availableSizes: ["S", "M", "L"],
      gender: "Male",
      totalQuantityAvailable: "Only 150 left",
      category: "Topwear"
    },
    { 
      id: 4,
      image: "https://i.pinimg.com/564x/92/35/61/9235611967d35d89d4c2e456bec32652.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Black Specs",
      originalPrice: 4999,
      discountPercent: 70,
      companyName: "Ray-Ban",
      description: "Classic black specs with a lightweight frame.",
      type: "Casual",
      availableSizes: ["One Size"],
      gender: "Female",
      totalQuantityAvailable: "Only 200 left",
      category: "Accessories"
    },
    { 
      id: 5,
      image: "https://i.pinimg.com/736x/3c/7b/e6/3c7be6aaa532d5b2956ed4dc70c5ce21.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Air King",
      originalPrice: 20999,
      discountPercent: 75,
      companyName: "Rolex",
      description: "Elegant watch with a stainless steel band and sapphire crystal.",
      type: "Formal",
      availableSizes: ["One Size"],
      gender: "Male",
      totalQuantityAvailable: "Only 50 left",
      category: "Accessories"
    },
    { 
      id: 6,
      image: "https://i.pinimg.com/564x/17/2f/fe/172ffe0a42107e3a4f31722878da9d07.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Luxury Watch",
      originalPrice: 25999,
      discountPercent: 70,
      companyName: "Rolex",
      description: "Luxury watch featuring a gold band and precise Swiss movement.",
      type: "Formal",
      availableSizes: ["One Size"],
      gender: "Female",
      totalQuantityAvailable: "Only 40 left",
      category: "Accessories"
    },
    { 
      id: 7,
      image: "https://i.pinimg.com/564x/b4/83/c2/b483c2cd69e04c414f2d39ae51256002.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Sneakers",
      originalPrice: 5999,
      discountPercent: 70,
      companyName: "Nike",
      description: "Rugged outdoor shoes designed for durability and comfort.",
      type: "Sports",
      availableSizes: ["M", "L", "XL"],
      gender: "Male",
      totalQuantityAvailable: "Only 250 left",
      category: "Footwear"
    },
    { 
      id: 8,
      image: "https://i.pinimg.com/564x/c5/e6/d0/c5e6d0459c3ccab2f9f5e40bc8131c50.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Black Boots",
      originalPrice: 3499,
      discountPercent: 70,
      companyName: "RedTape",
      description: "Lightweight casual sneakers with a stylish design.",
      type: "Casual",
      availableSizes: ["S", "M", "L", "XL"],
      gender: "Female",
      totalQuantityAvailable: "Only 300 left",
      category: "Footwear"
    },
    { 
      id: 9,
      image: "https://i.pinimg.com/564x/94/c2/99/94c2996c75ec58b3d07fb663255cd0ff.jpg",
      image2 : "https://i.pinimg.com/564x/09/f0/a2/09f0a2cb400391a159bb34263e9d8c4c.jpg" , 
      image3 : "https://i.pinimg.com/736x/07/b0/c7/07b0c72f766de9c5b0477d470980fd12.jpg" , 
      image4 : "https://i.pinimg.com/564x/d0/60/a5/d060a550b88e0e77068202488027e652.jpg" ,
      image5 : "https://i.pinimg.com/736x/42/2f/a6/422fa69a199e0eed8c294c4bfc417cce.jpg",
      name: "Linen Shirt",
      originalPrice: 2499,
      discountPercent: 70,
      companyName: "Linen Club",
      description: "Breathable linen shirt perfect for summer wear.",
      type: "Formal",
      availableSizes: ["XS", "S", "M", "L", "XL"],
      gender: "Male",
      totalQuantityAvailable: "Only 600 left",
      category: "Topwear"
    },
    { 
      id: 10,
      image: "https://cdn.shopify.com/s/files/1/2049/2073/files/Martin-Boy_s-Running-Shoes-uss-seller-shoes-2_1024x1024.png?v=1647038997",
      image2 : "https://cdn.shopify.com/s/files/1/2049/2073/files/Martin-Boy_s-Running-Shoes-uss-seller-shoes-4_1024x1024.png?v=1647039049" , 
      image3 : "https://ultrasellershoes.com/cdn/shop/products/Martin-Boy_s-Running-Shoes-color-white-uss-seller-shoes_1800x1800.png?v=1647039409" , 
      image4 : "https://ultrasellershoes.com/cdn/shop/products/Martin-Boy_s-Running-Shoes-color-gray-uss-seller-shoes_1800x1800.png?v=1647039409" ,
      image5 : "https://i.pinimg.com/564x/86/19/b7/8619b7b31b57b013aa859a2bbbac8cbe.jpg",
      name: "Fashion Sneaker",
      originalPrice: 1500,
      discountPercent: 30,
      companyName: "Zara",
      description: "Comfortable shoes for your kid ..... ",
      type: "Casual",
      availableSizes: ["XS", "S", "M", "L", "XL"],
      gender: "Kids",
      totalQuantityAvailable: "Only 600 left",
      category: "Footwear"
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
    const filteredCasuals = arr.filter(product => product.type === 'Casual');
    setProducts_casual(filteredCasuals);
    const filteredFormal = arr.filter(product => product.type === 'Formal');
    setProducts_formal(filteredFormal);
    const filteredSports = arr.filter(product => product.type === 'Sports');
    setProducts_sports(filteredSports);
    const filteredParty = arr.filter(product => product.type === 'Party');
    setProducts_party(filteredParty);
    setProducts_newArrivals(arr.map(product => product));
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
    setBrands(Sellers) ;
  }, []);

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
                  navigate('/x', { state: { arr: arr, products: filteredProducts, title } });
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
                <button onClick={()=> { navigate('/x', { state: { arr: arr, products : newArrivals, title: 'NEW ARRIVALS' } }) }}>EXPLORE THE LATEST</button>
              </div>
            </Element>
            <Element className={styles.productCard}  id="bestSeller_section" onClick={()=> { navigate('/x', { state: { products : newArrivals, title: 'NEW ARRIVALS' } }) }}>
              <img src="./BestSellers.png" alt="best-sellers" className={styles.productImage} />
              <div className={styles.button_and_headings}>
                <p>BEST-SELLERS</p>
                <button onClick={()=> { navigate('/x', { state: { arr: arr, products : newArrivals, title: 'NEW ARRIVALS' } }) }}>SHOP YOUR FAVOURITES</button>
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
            <button onClick={()=> { navigate('/x', { state: { arr: arr, products : onSale, title: 'ON SALE' } }) }}>View All</button>
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
            <button onClick={()=> { navigate('/x', { state: { arr: arr, products : topwears, title: 'TOPS & SWEATERS' } }) }}>View All</button>
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
            <button onClick={()=> { navigate('/x', { state: { arr: arr, products : bottomwears, title: 'PANTS & JEANS' } }) }}>View All</button>
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
            <button onClick={()=> { navigate('/x', { state: { arr: arr, products : footwears, title: 'SHOES & BAGS' } }) }}>View All</button>
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
            <button onClick={()=> { navigate('/x', { state: { arr: arr, products : accessories, title: 'ACCESSORIES' } }) }}>View All</button>
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