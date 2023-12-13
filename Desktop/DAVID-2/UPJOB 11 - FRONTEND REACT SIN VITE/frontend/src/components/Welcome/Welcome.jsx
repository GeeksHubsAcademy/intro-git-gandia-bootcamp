import React from 'react'
import NavBar from '../NavBar.jsx'
import './Welcome.css'


export default function Welcome() {
    return (<>
        <NavBar></NavBar>
        <div>
            <div className="mensaje">
                Welcome!
            </div>
            <div className="mensaje">
                To start as freelancer click <a href="/get-started/" >here.</a>
            </div>
            <div className="mensaje">
                To start as client click <a href="/get-started/" >here.</a>
            </div>
        </div>
    </>
    )
}