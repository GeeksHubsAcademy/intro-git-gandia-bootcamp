import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar.jsx'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'



function ExpertiseLevel() {
    let navigate = useNavigate();
    const [expertise, setExpertise] = useState('');



    useEffect(()=>{
      const cookies = new Cookies(null, {path: '/'});
      if(cookies){
      console.log(cookies.get('expertise-level'))
      let expertiseFromCookie = cookies.get('expertise-level')
      console.log(cookies.get('expertise-level'))
      setExpertise(expertiseFromCookie)  
  }

  },[])

  const saveExpertise = (e)=>{
    const cookies = new Cookies(null, {path: '/'});
    setExpertise(e.target.value)
    cookies.set('expertise-level', e.target.value)
  }

  
  return (
    <div><NavBar></NavBar>
    <h1>Expertise Level</h1>
    <input type="radio" id="entry-level" onChange={saveExpertise} name="expertise" value="entry-level" checked={expertise === 'entry-level'}/>
    <label htmlFor="entry-level">Entry Level</label>
    <br></br>
  
    <input type="radio" id="intermediate" onChange={saveExpertise} name="expertise" value="intermediate" checked={expertise === 'intermediate'} />
    <label htmlFor="intermediate">Intermediate</label>
    <br></br>
    

    <input type="radio" id="expert" onChange={saveExpertise} name="expertise" value="expert" checked={expertise === 'expert'}/>
    <label htmlFor="expert">Expert</label>
    <br></br>
    <br></br>


    <input type="button" value="Back" className="back-button" onClick={()=>navigate('/skills/')}/>
    <input type="button" value="Continue" className="continue-button" onClick={()=>{navigate('/education/')}}/>
    </div>


  )
}

export default ExpertiseLevel