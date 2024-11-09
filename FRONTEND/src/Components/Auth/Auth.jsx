import React, { useState } from 'react';
import './Auth.css'; // Import the CSS file

const Auth = () => {
  const [current, setCurrent] = useState("Login");

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <div className='welcome-message'>
          <div className='welcome-text'>
            Welcome back to Urban Cart! Log in to explore the latest trends and exclusive deals just for you.
          </div>
        </div>

        <div className='form-container'>
          <div className='form-content'>
            <div className='form-header'>
              <h1>{current}</h1>
              <div className='header-border'></div>
            </div>

            {current === "Sign up" && (
              <div className='input-group'>
                <div>
                  <label>Username</label><br />
                  <input className='input-field' type="text" />
                  <div className='input-border'></div>
                </div>
                <img className='hidden-icon' src="User.svg" alt="" />
              </div>
            )}

            <div className='input-group'>
              <div>
                <label>Email</label><br />
                <input className='input-field' type="email" />
                <div className='input-border'></div>
              </div>
              <img className='hidden-icon' src="Email.svg" alt="" />
            </div>

            <div className='input-group'>
              <div>
                <label>Password</label><br />
                <input className='input-field' type="password" />
                <div className='input-border'></div>
              </div>
              <img className='hidden-icon' src="Password.svg" alt="" />
            </div>

            <div className='button-container'>
              <button className='submit-button'>{current}</button>
            </div>

            {current === "Sign up" ? (
              <div className='toggle-auth'>
                <span>Already have an account? </span>
                <button className='toggle-button' onClick={() => setCurrent("Login")}>Login</button>
              </div>
            ) : (
              <div className='toggle-auth'>
                <span>Create a new account? </span>
                <button className='toggle-button' onClick={() => setCurrent("Sign up")}>Sign up</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
