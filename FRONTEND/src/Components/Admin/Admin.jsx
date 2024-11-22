import React, { useEffect, useState } from 'react'
import styles from './Admin.module.css' ;
import AdminNavbar from '../Navbar/AdminNavbar';
import Footer from '../Footer/Footer';
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate() ;
  const [arr, setSellers] = useState([]) ; // seller accounts
  const [brr, setUsers] = useState([]) ;   // users accounts
  useEffect(()=> {
    const fetch_Sellers_Users = async () => {
      try {
        const response = await axios.get("http://localhost:4000/admin/getSellers") ;
        setSellers(response.data.arr) ;

        const response2 = await axios.get("http://localhost:4000/admin/getUsers") ;
        setUsers(response2.data.brr) ;
      } catch (error) {
        console.log("Error fetching data", error) ;
      }
    }
    fetch_Sellers_Users() ;
  }, [arr,brr]) ;


  // create a delete axios request ... 

  return (
    <>
      <div className={styles.container}>
        <AdminNavbar/>
        <div className={styles.content}>
          <div className={styles.child1}>
            <div className={styles.sub_div_1}>
              <h1 className={styles.heading}>Current Sellers</h1>
              <button className={styles.add} onClick={()=> navigate("/admin/add")}>ADD SELLER</button>
            </div>
            <div className={styles.sub_div_2}>
              {arr.map((item, index)=> (
                <div className={styles.card} key={index}>
                    <div className={styles.column1}>
                      <img src={item.image} alt="seller_img" className={styles.img}/>
                      <p className={styles.p}>{item.name}</p>
                    </div>
                    <div className={styles.column2}>
                      <button className={styles.delete}>
                        DELETE
                      </button>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className={styles.child2}>
            <div className={styles.sub_div_1}>
                <h1 className={styles.heading}>Users</h1>
              </div>
              <div className={styles.sub_div_2}>
                {brr.map((item, index)=> (
                  <div className={styles.card} key={index}>
                        <div className={styles.column1}>
                          <img src="https://i.pinimg.com/736x/5c/00/d6/5c00d625a46d4a6b660f857349ab4c70.jpg" alt="user_img" className={styles.img}/>
                          <p className={styles.p}>Name: {item.name}, Email: {item.email}</p>
                        </div>
                        <div className={styles.column2}>
                          <button className={styles.delete} >
                            DELETE
                          </button>
                        </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Admin ;
