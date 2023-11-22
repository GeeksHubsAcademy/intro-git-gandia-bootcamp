import { useState } from 'react'
import NavBar from './components/NavBarHome'
import './App.css'
import { BrowserRouter } from "react-router-dom";


function App() {
  const [credentials, setCredentials] = useState({username : "", password: ""})

  return (
    <BrowserRouter>
    <NavBar></NavBar>
    </BrowserRouter>
  )
}

export default App
