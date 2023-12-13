import React from 'react'
import NavBarHome from '../NavBarHome.jsx'
import CustomInput from '../CustomInput'
import { useState, useEffect } from 'react'
// import { getAPIInfo } from '../apiCall.js'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Cookies2 from 'js-cookie';
import axios from 'axios';
import './Login.css'
import NavBar from '../NavBar.jsx'


export default function Login() {

  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })
  const [message, setMessage] = useState("")
  const [mensajeError, setMensajeError] = useState("")

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value

    }))
  }

  const logMe = async (email, password) => {

    const body = JSON.stringify({ email, password })

    await axios.get('http://localhost:8000/csrf_cookie/').then((res) => console.log(res)).catch((err) => console.log(err))

    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies2.get('csrftoken')
      }
    };

    await axios.post('http://localhost:8000/apilogin/', body, config).then((res) => { console.log(res); navigate("/welcome") }).catch((err) => console.log(err))

    const cookies = new Cookies(null, { path: '/' });
    cookies.set('email', credentials.email)
  }
  
  useEffect(() => { console.log(credentials) })

  // const logMe = () => {
  //   getAPIInfo(credentials).then(resultado => {
  //     console.log(resultado)
  //     setMessage(`Hola de nuevo...`)
  //     setTimeout(() => { navigate("/welcome") }, 2000)
  //   }).catch(error => setMensajeError(error))
  // }

  return (<>
    {message !== "" ? (<><NavBar></NavBar>
      <div className="mensaje">{message}</div></>) :
      (<>
        <NavBarHome></NavBarHome>
        <div className="outer-register">
          <div className="register">

            <div className="title">Login</div>

            <label htmlFor="email">Your email</label>
            <br></br>

            <div className="emaildiv">

              <CustomInput type="email" id="email" name='email' className="email" placeholder="Your email" handleInput={InputHandler} functionCheck={() => { }}></CustomInput>
              <br></br>
            </div>

            <div className="passworddiv">

              <label htmlFor="password">Your password</label>
              <br></br>

              <CustomInput type="password" id="password" name='password' className="password" placeholder="Your password" handleInput={InputHandler} functionCheck={() => { }}></CustomInput>

            </div>

            <div className="error">{mensajeError}</div>
            <div className='buttonDesign' onClick={()=>logMe(credentials.email, credentials.password)}>Log me!</div>
            <div>Don't have an account? Click <a href="/register/">here.</a></div>


          </div>
        </div></>)
    }
  </>
  )
}