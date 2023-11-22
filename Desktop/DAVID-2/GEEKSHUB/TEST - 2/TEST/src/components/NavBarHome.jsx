import React from 'react'
import CustomInput from './CustomInput.jsx'

export default function NavBarHome() {


  return (
    <nav>
      <div className="navBarLeft">
        <img src="./upjob.png"></img>
        <div className="navBarItem1">Find Talent</div>
        <div className="navBarItem1">Find Work</div>
        <div className="navBarItem1">Why Upwork</div>
        <div className="navBarItem1">Enterprise</div>
      </div>

      <div className="navBarRight">


      <CustomInput className="navBarItem2" type="button" value="Log In"/>
      </div>
    </nav>
  )
}

