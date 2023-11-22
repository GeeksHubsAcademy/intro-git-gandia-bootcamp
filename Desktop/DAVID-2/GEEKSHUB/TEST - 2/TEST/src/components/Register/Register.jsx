import React from 'react'
import NavBar from '../NavBar.jsx'
import './Register.css'
import CustomInput from  '../CustomInput'

export default function Register() {
  return (
    <>
    <NavBar></NavBar>
    <div className="outer-register">
    <div className="register">

      <label for="email">Your email</label>
      <br></br>

      <CustomInput type="email" id="email" className="register" placeholder="Your email"></CustomInput>
      <br></br>

      <label for="password">Your password</label>
      <br></br>

      <CustomInput type="password" id="password" className="register" placeholder="Your password"></CustomInput>


    </div>
    </div>
    </>
  )
}