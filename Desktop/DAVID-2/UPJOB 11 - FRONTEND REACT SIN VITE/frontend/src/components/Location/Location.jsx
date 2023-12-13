import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import CustomSelect from '../CustomSelect'

import Cookies from 'universal-cookie'

function Location() {
    const navigate = useNavigate()

    const [country, setCountry] =  useState('')
    const [streetaddress, setStreetAddress] = useState('')
    const [streetaddress2, setStreetAddress2] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')

    const array_of_countries = ['España', 'Andorra', 'Portugal']

    const saveLocation = () =>{
      const cookies = new Cookies(null, {path: '/'});
      cookies.set('country', country)
      cookies.set('streetaddress', streetaddress)
      cookies.set('streetaddress2', streetaddress2)
      cookies.set('city', city)
      cookies.set('zipcode', zipcode)

  }


    useEffect(()=>{
      console.log(country)
      console.log(streetaddress)
      console.log(streetaddress2)
      console.log(city)
      console.log(zipcode)

      const cookies = new Cookies(null, {path: '/'});
      const countryFromCookie = cookies.get('country')
      console.log('countryFromCookie', countryFromCookie)
      if(countryFromCookie !== undefined){
      setCountry(countryFromCookie)
      }


      const streetaddressFromCookie = cookies.get('streetaddress')
      console.log('countryFromCookie', streetaddressFromCookie)
      if(streetaddressFromCookie !== undefined){
      setStreetAddress(streetaddressFromCookie)
      }

      const streetAddressFromCookie2 = cookies.get('streetaddress2')
      console.log('countryFromCookie', streetAddressFromCookie2)
      if(streetAddressFromCookie2 !== undefined){
      setStreetAddress2(streetAddressFromCookie2)
      }

      const cityFromCookie2 = cookies.get('city')
      console.log('countryFromCookie', cityFromCookie2)
      if(cityFromCookie2 !== undefined){
      setCity(cityFromCookie2)
      }

      const zipcodeFromCookie2 = cookies.get('zipcode')
      console.log('countryFromCookie', zipcodeFromCookie2)
      if(zipcodeFromCookie2 !== undefined){
      setZipcode(zipcodeFromCookie2)
      }
    }, [])
  return (
    <>
    <NavBar></NavBar>
    <h2>Location</h2>
    <label htmlFor="country"> Country</label>
    <br></br>
        <CustomSelect name="country" id="country" value={country} arrayToIterate={array_of_countries} functionCheck={setCountry} nullvalue="Select your country"></CustomSelect>
    
    <br></br>
    <br></br>
    <label htmlFor="street-address"> Street Address</label>
    <br></br>
    <input type="text" value={streetaddress} onChange={(e) =>setStreetAddress(e.target.value)}></input>
    <br></br>
    <input type="text" value={streetaddress2} onChange={(e) =>setStreetAddress2(e.target.value)}></input>
    <br></br>
    <br></br>
    <label htmlFor="city">City</label>
    <br></br>
    <input type="text" value={city} onChange={(e) =>setCity(e.target.value)}>
    </input>
    <br></br>
    <label htmlFor="zip-code">ZIP code</label>
    <br></br>
    <input type="text" value={zipcode} onChange={(e) =>setZipcode(e.target.value)}></input>
    <br></br>
    <br></br>
    <input type="button" value="Back" className="back-button" onClick={() => navigate("/profile-photo/")}></input>

    <input type="button" value="Continue" className="continue-button" onClick={() => {navigate("/phone-number/"); saveLocation()}}></input>
    </> 
  )
}

export default Location