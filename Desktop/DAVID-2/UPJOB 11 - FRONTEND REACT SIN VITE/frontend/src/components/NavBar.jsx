import React from 'react'
import CustomInput from './CustomInput.jsx'
import CustomButton from './CustomButton.jsx'

export default function NavBar() {


  return (
    <nav>
      <div className="navBarLeft">
        <img src="./upjob.png" className="logo"></img>
        <div className="navBarItem1">Find Talent</div>
        <div className="navBarItem1">Find Work</div>
        <div className="navBarItem1">Why Upjob</div>
        <div className="navBarItem1">Enterprise</div>
      </div>

      <div className="navBarRight">

        <CustomButton className="navBarItemLogIn" destination='/logout/' name="Log Out" />

      </div>
    </nav>
  )
}
