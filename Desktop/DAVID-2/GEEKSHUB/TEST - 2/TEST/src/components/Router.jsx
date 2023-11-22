
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Register from './Register/Register.jsx'
import Login from './Login/Login.jsx'
import Profile from './Profile/Profile.jsx'


export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"}/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/register/" element={<Register />}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </>
    )
}