import React from 'react'
import { useState, useRef } from 'react'
import styles from "./Forgot.module.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {
    const img1Ref = useRef()
    const img2Ref = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()

    const [form, setform] = useState({ email: "", password: "", confirm: "" })

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        console.log(form);
        axios.post("http://localhost:4000/signup/forgot", form)
            .then((response) => {
                toast(response.data, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                console.log(response);
            })
    }

    const handleShow1 = () => {
        if (img1Ref.current.src.includes("close_eye.svg")) {
            img1Ref.current.src = "open_eye.svg";
            pass1Ref.current.type = "text";
        }
        else {
            img1Ref.current.src = "close_eye.svg";
            pass1Ref.current.type = "password";
        }
    }

    const handleShow2 = () => {
        if (img2Ref.current.src.includes("close_eye.svg")) {
            img2Ref.current.src = "open_eye.svg";
            pass2Ref.current.type = "text";
        }
        else {
            img2Ref.current.src = "close_eye.svg";
            pass2Ref.current.type = "password";
        }
    }

    return (
        <>
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
                transition="Bounce"
            />
            <ToastContainer />
            <div className={styles.main}>
                <div className={styles.inputs}>
                    <h1 className={styles.heading}>Change Password</h1>
                    <div className={styles.email}>
                        <label>Email</label><br />
                        <input value={form.email} type="email" name="email" placeholder='Enter Email....' onChange={handleChange} />
                    </div>

                    <div className={styles.password}>
                        <label>Password</label><br />
                        <div className={styles.pass}>
                            <input ref={pass1Ref} value={form.password} type="password" name="password" placeholder='Enter New Password....' onChange={handleChange} />
                            <img ref={img1Ref} className={styles.eye} src="close_eye.svg" alt="" onClick={handleShow1} />
                        </div>
                    </div>

                    <div className={styles.confirm}>
                        <label>Confirm Password</label><br />
                        <div className={styles.pass}>
                            <input ref={pass2Ref} value={form.confirm} type="password" name="confirm" placeholder='Confirm Password....' onChange={handleChange} />
                            <img ref={img2Ref} className={styles.eye} src="close_eye.svg" alt="" onClick={handleShow2} />
                        </div>
                    </div>

                    <button className={styles.btn} onClick={handleSubmit}>Change Password</button>
                </div>
            </div>
        </>
    )
}

export default Forgot