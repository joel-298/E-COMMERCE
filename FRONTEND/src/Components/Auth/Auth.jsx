import React from 'react'
import { useState } from 'react'
import styles from "./Auth.module.css"
import SUBNavbar from '../Navbar/SUBNavbar'
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Auth = () => {
  const imgref = useRef()
  const passref = useRef()
  const [current, setcurrent] = useState("Login")
  const [form, setform] = useState({ name: "", email: "", password: "" })

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  console.log(form);

  const navigate = useNavigate()
  const handleSubmit = () => {
    if(form.password.length > 3 && form.email.includes("@gmail.com") && form.name.length>0){
      axios.post("http://localhost:4000/signup", form)
        .then((response) => {
          let x = response.data;
          console.log(x);
          toast(x, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          
          if (x == "Account Created Successfully") {
            setform({ name: "", email: "", password: "" });
            setTimeout(() => {
              setcurrent("Login")
            }, 4000);
          }
        })
    }

    else if(form.password.length <= 3){
      toast("Minimum 4 digits in password required" , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    else if(form.name.length == 0){
      toast("Username Required " , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    else{
      toast("Enter a valid Email" , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  const handleLogin = () => {
    axios.post("http://localhost:4000/signup/login", form)
      .then((response) => {
        let x = response.data;
        console.log(x)

        if (x.boolean === true) {
          let y = x.category
          console.log(y)

          //Toastify
          toast(x.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

            setTimeout(() => {
              localStorage.setItem('login', JSON.stringify({
                login: true,
                token: x.token,
                category: y
              }))
    
              if (y == "user") {
                navigate("/")
              }
    
              if (y == "admin") {
                navigate("/admin")
              }
    
              if (y == "seller") {
                navigate("/seller")
              }
            }, 3000);
        }

        else {
          toast(x.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      })
  }

  const handleForgot = () => {
    navigate("/forgot")
  }

  const handleShow = () => {
    if (imgref.current.src.includes("close_eye.svg")) {
      imgref.current.src = "open_eye.svg";
      passref.current.type = "text";
    }
    else {
      imgref.current.src = "close_eye.svg";
      passref.current.type = "password";
    }
  }
  return (
    <>
      {/* <SUBNavbar/> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce" />
      <ToastContainer />
      <div className={styles.main}>
        <div className={styles.left}>
          <img src="https://s3-alpha-sig.figma.com/img/b714/2d2e/3f2a891eeabaf2fda76b8379bedd84ad?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M~y1MedzA7UmKS5TM3YEZZ4XxKOpz3CJuSOR5ysfvz-8y5ycK2GsnP7YgbikRzlVprd29x87fZ7ZjkvXByKDc55HpzOoHtTg~hTIy1dLCtvlVaGt3-pdxx7LqURNX05E-asO8F8iOg1aHfD4vV5ZtWWSru4raBWXSFLiclk-cXZx-VuSKhCRX9wSu2SrIu9D7H5rfK4kevAttY9Srd5eTPUlCHxyW5i1EHhW-TZHd-Kw9cv9ok0HVrrgnSzldqtHSk~J5iR~kouD-mm2b3AetNzd14IK0rYavFNGiusrxHCi25K~3dNwMnqleg1ar-o0SHKioSmnvLZ055rWa0S2Ng__" alt="Welcome" className={styles.login_img}/>
        </div>
        <div className={styles.right}>
          <div>
            <h1 className={styles.heading}>{current}</h1>
            <div className={styles.inputs}>
              {current === "Login" ? <div></div> : <div className={styles.name}>
                <label>UserName</label><br />
                <input value={form.name} type="text" name='name' placeholder='Enter Username....' onChange={handleChange} />
              </div>}
              <div className={styles.email}>
                <label>Email</label><br />
                <input value={form.email} type="email" name="email" placeholder='Enter Email....' onChange={handleChange} />
              </div>
              <div className={styles.password}>
                <label>Password</label><br />
                <div className={styles.pass}>
                  <input ref={passref} value={form.password} type="password" name="password" placeholder='Enter Password....' onChange={handleChange} /><br />
                  <img ref={imgref} className={styles.eye} src="close_eye.svg" alt="" onClick={handleShow} />
                </div>
                {current === "Sign Up" ? <div className={styles.cont}><span>It must be a combination of minimum 4 letters,numbers and symbols</span></div> : <div className={styles.check1}>
                  <div className={styles.check}>
                    <input type="checkbox" name="" />
                    <label>Remember me</label>
                  </div>
                  <div className={styles.frog}>
                    <button className={styles.forgot} onClick={handleForgot}>Forgot Password?</button>
                  </div>
                </div>}
              </div>
              {current === "Sign Up" ? <button className={styles.btn} onClick={handleSubmit}>Sign Up</button> : <button className={styles.btn} onClick={handleLogin}>Login</button>}
            </div>

            {current === "Sign Up" ? <button className={styles.acc} onClick={() => setcurrent("Login")}>Already have an account?</button> : <button className={styles.acc} onClick={() => setcurrent("Sign Up")}>No account yet?Sign Up</button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth; 