import React from 'react'
import { useNavigate } from 'react-router-dom'

const Registercomp = () => {

    const navigate = useNavigate();

  return (
    <>
      <div className="login-container">
        <div className="login-container-left">
          <h2>India’s Favourite Wedding Planning Platform</h2>
        </div>

        <div className="login-container-right">
          <h2>Sign Up</h2>
          <form action="">
            <div id="errorMessage"></div>
            <label>Your Name</label>
            <input type="text" placeholder="Enter Your Name" required/>
            <label>Email</label>
            <input type="email" placeholder="Enter Email" required/>
            <label>Mobile Number</label>
            <input type="text" placeholder="Enter Mobile Number" required/>
            <label>Password</label>
            <input type="password" placeholder="Enter password" required/><br />
            <input type="button" value='Register' />
            <div className="create-account">
              <p>Already have an Accout</p>
              <button onClick={() => {navigate('/login')}}>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registercomp;
