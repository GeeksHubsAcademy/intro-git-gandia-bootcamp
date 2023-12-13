import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import Cookies from 'universal-cookie'

function TitleAndOverview() {

    const [title, setTitle] = useState('')
    const [overview, setOverview] = useState('')
    
    const navigate = useNavigate()

    const saveTitleAndOverview = () => {
        const cookies = new Cookies(null, { path: '/' });

        cookies.set('title', JSON.stringify(title))
        cookies.set('overview', JSON.stringify(overview))

    }

    useEffect(() => {
        const cookies = new Cookies(null, { path: '/' });
        const titleFromCookie = cookies.get('title')
        console.log('hourlyrate', titleFromCookie)
        if (titleFromCookie !== undefined) {
            setTitle(titleFromCookie)
        }
        const OverviewFromCookie = cookies.get('overview')
        console.log('hourlyrate', OverviewFromCookie)
        if (OverviewFromCookie !== undefined) {
            setOverview(OverviewFromCookie)
        }
    }, [])
    return (
        <>
            <NavBar></NavBar>
            <h1>Title And Overview</h1>
            <p>Learn more about writing a great profile or browse profiles in your category</p>
            <h2>Title</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <br></br>
            <h2>Professional Overview</h2>
            <textarea value={overview} rows="25" cols="80" onChange={(e) => setOverview(e.target.value)}></textarea>
            <br></br>
            <input type="button" value="Back" className="back-button" onClick={() => navigate("/hourly-rate/")}></input>

            <input type="button" value="Continue" className="continue-button" onClick={() =>{ navigate("/profile-photo/"); saveTitleAndOverview()}}></input></>

    )
}

export default TitleAndOverview