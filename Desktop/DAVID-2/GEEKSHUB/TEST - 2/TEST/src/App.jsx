import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Body } from './components/Router.jsx'


function App() {
  const [credentials, setCredentials] = useState({username : "", password: ""})

  return (
    <BrowserRouter>
    <Body></Body>
    </BrowserRouter>
  )
}

export default App
