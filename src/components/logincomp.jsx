import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logincomp = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="login-container">
        <div className="login-container-left">
          <h2>India’s Favourite Wedding Planning Platform</h2>
        </div>

        <div className="login-container-right">
          <h2>Sign In</h2>
          <form action="">
            <div id="errorMessage"></div>
            <label>User Id</label>
            <input type="text" placeholder="Email or Mobile Number" />
            <label>Password</label>
            <input type="password" placeholder="Enter password" /><br />
            <input type="button" value='Login' />
            <div className="create-account">
              <p>Create Account</p>
              <button onClick={() => {navigate('/register')}}>Register</button>
            </div>
          </form>
          <div className="or-section">
            <h2>OR</h2>
          </div>
          <div className="social-login">
            <div className="social-box">
              <img src="Images/facebook-icon.svg" alt="" />
              <p>Facebook</p>
            </div>
            <div className="social-box">
              <img src="Images/google-icon.svg" alt="" />
              <p>Google</p>
            </div>
          </div>
          <div className="vendor-signin">
            <p>Are you a vendor?</p>
            <button>Business Sign In</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logincomp;
