import React from 'react'
import { useState } from 'react'
import "./Auth.css"
const Auth = () => {
  const [current, setcurrent] = useState("Login")
  return (
    <div className='main'>
      <div className='left'>
        <img src="https://s3-alpha-sig.figma.com/img/b714/2d2e/3f2a891eeabaf2fda76b8379bedd84ad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BS1x3W8mVGPbyty4BYx6EmQKxcKf4pXqgUBA3jAumYDKpjtN0s-mAZoPSm1Y3k8VF~QcsWkkEW7QifihBER4eGvFu2wwz9J9~6r9Mi09Fmb0SCCZnKLLNobzS8bj9yRZRn9XEIPqlehonrOg-neXTn3GubMQYP5sagiGFAa3gTRS9h~s1~uItwoQS8CjbYxzuo8RNbRErNHxgfByS7QdALsp-QtL7duSd6~eR1gbhWCF3Sj1xQwK4U2Pk~SYN2N9gSquG5A5POIkqOV2XjcS20i47TIY29qJ747FF2FtldXLdqiRkChGdxDkoQ6mRtWLvnzwL2nQc1pGJFeCzPXT7A__" alt="Welcome" />
      </div>
      <div className='right'>
        <div>
          <h1 className='heading'>{current}</h1>
          <div className='inputs'>
            {current === "Login" ? <div></div> : <div className='name'>
              <label>UserName</label><br />
              <input type="text" />
            </div>}
            <div className='email'>
              <label>Email</label><br />
              <input type="email" name="" />
            </div>
            <div className='password'>
              <label>Password</label><br />
              <input type="password" name="" /><br />
              {current === "Sign Up" ? <div className='cont'><span>It must be a combination of minimum 8 letters,numbers and symbols</span></div> : <span></span>}
              {current === "Login" ? <div className='check1'>
                <div className='check'>
                  <input type="checkbox" name="" />
                  <label>Remember me</label>
                </div>
                <div className='forg'>
                  <button className='forgot'>Forgot Password?</button>
                </div>
              </div> : <div></div>}
            </div>
            <button className='btn'>Sign UP</button>
          </div>

          {current === "Sign Up"?<button className='acc' onClick={()=>setcurrent("Login")}>Already have an account?</button>:<button className='acc' onClick={()=>setcurrent("Sign Up")}>No account yet?Sign Up</button>}
        </div>
      </div>
    </div>
  )
}

export default Auth