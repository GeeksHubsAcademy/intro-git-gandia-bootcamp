import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import CustomSelect from '../CustomSelect'
import Cookies from 'universal-cookie'

function PhoneNumber() {

    const array_of_prefixes = ['+34','+41','+46']
    const [prefix, setPrefix] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')


    const navigate = useNavigate()

    let savingPhoneNumber = () => {
      const cookies = new Cookies(null, { path: '/' });
      cookies.set('phonenumber', phonenumber)
      cookies.set('prefix', prefix)
    }

    useEffect(()=>{
      // console.log(prefix)
      // console.log(phonenumber)
      const cookies = new Cookies(null, { path: '/' });
      const phonenumberFromCookie = cookies.get('phonenumber')
      console.log('phonenumber', phonenumberFromCookie)
      if (phonenumberFromCookie !== undefined) {
          setPhoneNumber(phonenumberFromCookie)
      }

      const prefixFromCookie = cookies.get('prefix')
      console.log('prefix', prefixFromCookie)
      if (prefixFromCookie !== undefined) {
          setPrefix(prefixFromCookie)
      }
    },[])
  return (
    <><NavBar></NavBar>
    <h2>Phone Number</h2>

    <label htmlFor="prefixes"/>
    <CustomSelect id="prefixes" value={prefix} name="prefixes" nullvalue="Choose your phone prefix" arrayToIterate={array_of_prefixes} functionCheck={setPrefix}>
    </CustomSelect>

    <input type="text" value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)}></input>
    <br></br>
    <br></br>
    <input type="button" value="Back" className="back-button" onClick={() => navigate("/location/")}></input>

    

    <input type="button" value="Continue" className="continue-button" onClick={() => {navigate("/freelancer-profile/"); savingPhoneNumber()}}></input>
    </>   

  )
}

export default PhoneNumber