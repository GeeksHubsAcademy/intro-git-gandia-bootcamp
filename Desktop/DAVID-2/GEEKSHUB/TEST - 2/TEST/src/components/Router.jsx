
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './components/Home.jsx'


export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to={"/"}/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </>
    )
}