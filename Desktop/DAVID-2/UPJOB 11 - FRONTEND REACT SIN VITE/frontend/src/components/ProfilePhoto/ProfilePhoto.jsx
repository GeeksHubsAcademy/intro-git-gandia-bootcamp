import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import { useNavigate } from 'react-router-dom'
import './ProfilePhoto.css'
import Cookies from 'universal-cookie'

function ProfilePhoto() {
    const navigate = useNavigate()
    const [file, setFile] = useState()
    const [show, setShow] = useState(false)

    const saveProfilePhoto = () =>{
        const cookies = new Cookies(null, {path: '/'});
        cookies.set('profilephoto', file)

    }

    useEffect(() => {

        const cookies = new Cookies(null, {path: '/'});
        const profilephotoFromCookie = cookies.get('profilephoto')
        console.log('profilephotoFromCookie', profilephotoFromCookie)
        if(profilephotoFromCookie !== undefined){
        setFile(profilephotoFromCookie)

        }
    },[])

    const handleChange = (e) =>{
        setFile(URL.createObjectURL(e.target.files[0]))
        setShow(true)
    }
    return (
        <>
            <NavBar></NavBar>
            <h2>Profile Photo</h2>
            <img src={file} className={show? 'image-visible': 'image-hidden'}/>
            <input type="file" id="img" onChange={handleChange}></input>
            <br></br>
            <br></br>
            <input type="button" value="Back" className="back-button" onClick={() => navigate("/title-and-overview/")}></input>

            <input type="button" value="Continue" className="continue-button" onClick={() => {navigate("/location/"); saveProfilePhoto()}}></input>
        </>
    )
}

export default ProfilePhoto