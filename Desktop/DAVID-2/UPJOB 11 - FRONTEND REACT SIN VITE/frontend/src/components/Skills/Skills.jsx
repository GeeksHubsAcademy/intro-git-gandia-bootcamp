import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar.jsx'
import './Skills.css'
import Cookies from 'universal-cookie';


function Skills() {

    const navigate = useNavigate()

    const [skills, setSkills] = useState([])

    const addSkill = (e) => {
        if (e.keyCode === 13) {
            const newSkill = {id: Date.now(), name: e.target.value, selected: true}
            //setItems([newToDo, ...items]); // ESTE FUNCIONA
            setSkills((prevState)=>([ ...prevState, newSkill])) //ESTE TMBN FUNCIONA
            e.target.value = ""
         }

    }

    const saveSkills = () =>{    
        const cookies = new Cookies(null, {path: '/'});
        cookies.set('skills', JSON.stringify(skills))   
    }

    useEffect(()=>{
        const cookies = new Cookies(null, {path: '/'});
        
        console.log(cookies.get('skills'))
        let skillsFromCookie = cookies.get('skills')
        console.log(cookies.get('skills'))

        if(skillsFromCookie !== undefined){

        
        setSkills(skillsFromCookie)

        
    
    }

    },[])

    // const unselectSkill = (e) => {
    //     const newArray = skills.filter((value)=>{
            
    //             return value.id !== key
            
    //     })
    //     setSkills(newArray)

    // }

    // const unselectSkill = (key) => {
    //     let newArray = skills.map((value)=>{
            
    //         if (value.id === key){
    //             value = { id: value.id, name: value.name, selected: !value.selected}
    //             return value
    //         }
    //         return value
    //     })
    //     setSkills(newArray)

    // }

    const deleteSkill = (key) => {
        let newArray = skills.filter((value)=>{
            
                return value.id !== key
            
        })
        setSkills(newArray)

    }
    return (
        <div><NavBar></NavBar>
    <h1>Skills</h1>
    <div>Select at least 1 skill and no more than 10 skills.
        <br></br>
        Not what you are looking for?</div>
        <br></br>
        <input type="text" onKeyUp={(e)=>addSkill(e)} className="input-for-skills"></input>
        <div className="div-with-skills">
        {skills!== undefined && skills.map((value) =>{
            return ( <span className="button-to-delete" key={value.id}>{value.name} 
            {/* {value.selected? (<input type="button" onClick={()=>unselectSkill(value.id)} value="V"></input>) : (<input type="button" onClick={()=>deleteSkill(value.id)} value="X"></input>)} */}
            <input type="button" className="x-of-button" onClick={()=>deleteSkill(value.id)} value="X"></input>
            </span>) 
        })}</div>


        <div className="div-with-buttons">

        <input type="button" value="Back" className="back-button" onClick={ () => navigate("/category-and-subcategory/") }></input>
        <input type="button" value="Continue" className="continue-button" onClick={ () => {navigate("/expertise-level/"); saveSkills() }}></input>
        </div>
        </div>
    )
}

export default Skills