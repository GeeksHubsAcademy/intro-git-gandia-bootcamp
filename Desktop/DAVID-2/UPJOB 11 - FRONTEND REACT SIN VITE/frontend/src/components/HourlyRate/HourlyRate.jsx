import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar.jsx'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

function HourlyRate() {


    const navigate = useNavigate()
    const [hourlyrate, setHourlyRate] = useState(0)

    const changeHourlyRate = (e) => {
        if (e.target.name == 'total') {
            console.log(e.target.value)
            setHourlyRate(e.target.value)
        }
        else if (e.target.name == 'final') {
            console.log(e.target.value)
            setHourlyRate(e.target.value / 10 * 12)
        }


    }

    
    const saveHourlyRate = () => {
        const cookies = new Cookies(null, {path: '/'});
        cookies.set('hourlyrate', hourlyrate)

    }

    useEffect(()=>{
        const cookies = new Cookies(null, {path: '/'});
        const hourlyrateFromCookie = cookies.get('hourlyrate')
        console.log('hourlyrate', hourlyrateFromCookie)
        if(hourlyrateFromCookie !== undefined){
        setHourlyRate(hourlyrateFromCookie)
    }}, [])


    return (
        <>
            <NavBar></NavBar>
            <h1>Hourly Rate</h1>
            <p>Clients will see this rate on your profile and in search results once you publish your profile.You can adjust your rate every time you submit a proposal.</p>
            <h2>Hourly rate</h2>
            <p>Total amount the client will see</p>
            <input type="number" name="total" value={hourlyrate} onChange={(e) => changeHourlyRate(e)} min="3" max="999" placeholder="0.00"></input>
            <p>The hourly rate must be between $3 and $999.</p>
            <h2>Upjob Service Fee</h2>
            <p>Total amount the client will see</p>
            <input type="number" value={hourlyrate * 0.1} name="fee" min="0.3" max="99.9" placeholder="0.00" readOnly></input>
            <p>The Upjob Service Fee is 10% when you begin a contract with a new client. Once you bill over 500$ with your client, the fee will be 5%.</p>
            <h2>You'll receive</h2>
            <p>The estimated amount you will receive after service fees</p>
            <input type="number" value={hourlyrate * 0.9} name="final" onChange={changeHourlyRate} min="2.7" max="899.1" placeholder="0.00" readOnly></input>
            <h2>Upjob service fees can be as low as 2.5%</h2>
            <p>The estimated amount you will receive after service fees</p>
            <input className="back-button" type="button" value="Back" onClick={() => { navigate('/languages/') }}></input>
            <input className="continue-button" type="button" value="Continue" onClick={() => { navigate('/title-and-overview/'); saveHourlyRate()}}></input>
        </>
    )
}

export default HourlyRate