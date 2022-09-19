import React from 'react';
import './Signup.css'
function Signup() {
  return (
    <div className='main'>
      <div className="header">
        <h3>Sign in</h3></div>
      <div className='container'>
        <div class="team">
          <button type="button" id="doctor">Doctor</button>
          <button type="button" id="patient">Patient</button>
        </div>
          <div><p className='Email'>Email Address:</p></div>
          <div >
          <input type="email" id="email" placeholder='Enter your email'></input></div>

        <div className='password'>
          <p id="p"> Password</p>
          <p id="i">forget password ?</p>

        </div>
        <div>
          <input type="password" id="pass" placeholder='Enter your password'></input>
        </div>

        <div><button type="button" id='btn'>Sign In</button></div>
      </div>
      <div className='footer'>
        Don't have an account yet? <button type button id="signup">sign Up</button>
        
      </div>
    </div>
  )
}

export default Signup;