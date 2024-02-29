import React from 'react'
import Headercomp from '../components/headercomp'
import Logincomp from '../components/logincomp';
import '../css/login.css';


const Loginpage = () => {
  return (
    <>
      {<Headercomp/>}
      {<Logincomp/>}
    </>
  )
}

export default Loginpage;
