import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';


const Navbar = () => {
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
    }
  ]
  // use state 
  const [Women,setProducts_Women] = useState([]) ;
  const [Men,setProducts_Men] = useState([]) ;
  const [Kids,setProducts_Kids] = useState([]) ;
  useEffect(() => {
    // handeling array 
    const filteredWomen = arr.filter(product => product.gender === 'Female');
    setProducts_Women(filteredWomen);
    console.log(filteredWomen) ;
    const filteredMen = arr.filter(product => product.gender === 'Male');
    setProducts_Men(filteredMen);
    const filteredKids = arr.filter(product => product.gender === 'Kids');
    setProducts_Kids(filteredKids);



    // Handeling screen width and side bar ..... 
    const handleResize = () => {
      const box5 = document.querySelector(`.${styles.box5}`);
      if (window.innerWidth > 1022) {
        box5.classList.add(styles.remove);
      }
      else{
        box5.classList.add(styles.remove);
      }
    };
    handleResize();                                                      // Run once on initial load
    window.addEventListener('resize', handleResize);                     // Attach resize event listener
    return () => window.removeEventListener('resize', handleResize);     // Cleanup the event listener on component unmount
  }, []);
  const handleNavClick = () => {
    const box5 = document.querySelector(`.${styles.box5}`);
    if (window.innerWidth > 1022) {
      box5.classList.add(styles.remove); 
    }
    else{ // when screen size is less 
      box5.classList.remove(styles.remove) ;
    }
  }
  const handleCancleButton = () => {
    const box5 = document.querySelector(`.${styles.box5}`);
    if (window.innerWidth > 1022) {
      box5.classList.add(styles.remove); 
    }
    else{ // when screen size is less 
      box5.classList.add(styles.remove) ;
    }
  }
  const closeSideBar = () => {
    const box5 = document.querySelector(`.${styles.box5}`);
    box5.classList.add(styles.remove) ;
  }


  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleAvatarClick = () => {
    navigate('/auth');
  };

  // SEARCH BAR : 
  // const [query, setQuery] = useState('');
  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Searching for:", query);
  // };
  return (
    <>
    <div className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.box2}>
          <div className={styles.box1}>
            <img src="./Vector.svg" alt="nav_icon" className={styles.nav_icon} onClick={handleNavClick}/>
          </div>
          <h1 onClick={()=>{navigate("/")}}><img src="./Logo.png" alt="logo_image" className={styles.logo} />&nbsp;URBAN CART</h1>
        </div>

        <div className={styles.box3}>
          <div className={styles.items} onClick={()=> { navigate('/x', { state: { products : Women, title: 'WOMEN' } }) }}>Women</div>
          <div className={styles.items} onClick={()=> { navigate('/x', { state: { products : Men, title: 'MEN' } }) }}>Men</div>
          <div className={styles.items} onClick={()=> { navigate('/x', { state: { products : Kids, title: 'KIDS' } }) }}>Kids</div>
          <div className={styles.items}><a href="/#brands_section">Brands</a></div>
        </div>

        <div className={styles.box4}>
          {/* <form className={styles.INPUT}  onSubmit={handleSubmit}> */}
          <form className={styles.INPUT}  action=''>
            <button className={styles.button} type='submit'>
              <img src="./SEARCH1.svg" alt="search" className={styles.search} />
            </button>
            {/* <input type="text" placeholder='Search items here' className={styles.input} value={query} onChange={handleInputChange}/> */}
            <input type="text" placeholder='Search items here' className={styles.input}/>
          </form>
          <img src="./cart.svg" alt="cart" className={styles.cart} onClick={handleCartClick} />
          <img src="./noavatar.svg" alt="avatar" className={styles.avatar} onClick={handleAvatarClick} />
        </div>

        <div className={styles.box5}>
          <div className={styles.sub_div1}>
            <img src="./Logo.png" alt="Logo"  className={styles.logo}/>
            <img src="./ARROW_LEFT.svg" alt="arrow_left" className={styles.cancel} onClick={handleCancleButton}/>
          </div>
          <div className={styles.sub_div2}>        
            <a href="/x"><div className={styles.items_box5} onClick={()=> { navigate('/x', { state: { products : Women, title: 'WOMEN' } }) , closeSideBar}}>Women</div></a>
            <a href="/x"><div className={styles.items_box5} onClick={()=> { navigate('/x', { state: { products : Men, title: 'MEN' } }) , closeSideBar}}>Men</div></a>
            <a href="/x"><div className={styles.items_box5} onClick={()=> { navigate('/x', { state: { products : Kids, title: 'KIDS' } }) , closeSideBar}}>Kids</div></a>
            <a href="/#brands_section"><div className={styles.items_box5} onClick={closeSideBar}>Brands</div></a>
            <a href="/#newArrival_section"><div className={styles.items_box5} onClick={closeSideBar}>New Arrivals</div></a>
            <a href="/#topwears_section"><div className={styles.items_box5} onClick={closeSideBar}>Tops & Sweaters</div></a>
            <a href="/#bottomwears_section"><div className={styles.items_box5} onClick={closeSideBar}>Pants & Jeans</div></a>
            <a href="/#footwears_section"><div className={styles.items_box5} onClick={closeSideBar}>Shoes & Bags</div></a>
            <a href="/#accessories_section"><div className={styles.items_box5} onClick={closeSideBar}>Accessories</div></a>
            <a href="/#onSale_section"><div className={styles.items_box5} onClick={closeSideBar}><span>Sale</span></div></a>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Navbar;



// THIS WAS A GOOD APPROACH : 
// PROBLEM : only works when reloads the page : 
// SOLUTION : we will have to add event listner 
  // const [width, setWidth] = useState(window.innerWidth) ;
  // useEffect(() => {
  //   const box5 = document.querySelector(`.${styles.box5}`);
  //   if ( width > 1022) {
  //     box5.classList.add(styles.remove); // Show box5 if width > 1024px
  //   } else {
  //     box5.classList.remove(styles.remove); // Hide box5 if width <= 1024px
  //   }
  // }, [width]);