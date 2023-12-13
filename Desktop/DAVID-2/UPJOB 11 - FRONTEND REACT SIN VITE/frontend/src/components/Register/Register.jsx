import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar.jsx'
import CustomInput from '../CustomInput'
import { validate } from '../../services/validate.js'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Cookies2 from 'js-cookie';
import axios from 'axios';
import CSRFToken from '../CSRFToken.jsx'
import './Register.css'
import NavBarHome from '../NavBarHome.jsx'




export default function Register() {
  const navigate = useNavigate()

  // const handleSubmit = () => {
  //   createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((response) => { console.log(response.user) }).catch((err) => { console.log(err.message) })
  // }
  const [credentials, setCredentials] = useState({
    password: '',
    password2: '',
    email: '',

  })

  const doRegister = async (email, password) => {

    const body = JSON.stringify({ email, password })

    await axios.get('http://localhost:8000/csrf_cookie/').then((res) => console.log(res)).catch((err) => console.log(err))

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies2.get('csrftoken')
      }
    };

    await axios.post('http://localhost:8000/register/', body, config).then((res) => { 
      console.log(res);    
      const cookies = new Cookies(null, { path: '/' });cookies.set('email', credentials.email); 
      navigate("/welcome")}).catch((err) => console.log(err))
  }

  useEffect(() => { console.log(credentials) })

  const [credentialsError, setCredentialsError] = useState({
    passwordError: '',
    password2Error: '',
    emailError: '',
  })

  const InputHandler = (e) => {
    setCredentials((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }

  const checkError = (e) => {
    let error = ""
    error = validate(e.target.name, e.target.value);
    console.log(error)

    setCredentialsError((prevState) => (
      {
        ...prevState,
        [e.target.name + 'Error']: error
      }
    ))
  }

  return (
    <>
      <NavBarHome></NavBarHome>
      <div className="outer-register">
        <div className="register">

          <div className="title">Register</div>

          <label htmlFor="email">Your email</label>
          <br></br>

          <div className="emaildiv">
            <CSRFToken />

            <CustomInput type="email" id="email" className="register" name="email" placeholder="Your email" functionChange={InputHandler}
              handleInput={InputHandler} functionCheck={checkError} design={`inputDesign ${credentialsError.emailError !== "" ? "inputError" : ""}`}></CustomInput>
            <br></br>
            <div className="msgError">{credentialsError.emailError}</div>
          </div>


          <div className="passworddiv">

            <label htmlFor="password">Your password</label>
            <br></br>


            <CustomInput type="password" id="password" className="register" name="password" placeholder="Your password"
              handleInput={InputHandler} functionChange={InputHandler} functionCheck={checkError} design={`inputDesign ${credentialsError.passwordError !== "" ? "inputError" : ""}`}></CustomInput>
            <div className="msgError">{credentialsError.passwordError}</div>
          </div>

          <div className='buttonDesign' onClick={() => doRegister(credentials.email, credentials.password)} >Register me!</div>
          <div>Already have an account? Click <a href="/login/">here.</a></div>
        </div>
      </div>
    </>
  )
}