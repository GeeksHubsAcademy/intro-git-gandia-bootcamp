import React, { useEffect, useState } from 'react'
import './Languages.css'
import NavBar from '../NavBar'
import CustomSelectForLanguages from '../CustomSelectForLanguages.jsx'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'


function Languages2() {
    const [languages, setSlanguages] = useState(["Chinese", "Spanish", "Portuguese"])
    const proficiency_levels = ['Basic', 'Fluent', 'Advanced', 'Native']

    const navigate = useNavigate()

    const [seleccionados, setSeleccionados] = useState([{
        language: "English", proficiency: ""
    }])

    const saveLanguages = () => {
        const cookies = new Cookies(null, {path: '/'});
        cookies.set('languages', seleccionados)
        cookies.set('languagesavailable', languages)

    }

    useEffect(() => { 
        console.log(seleccionados, languages) 

        const cookies = new Cookies(null, {path: '/'});
        const languagesFromCookie = cookies.get('languages')
        console.log('languagesFromCookie', languagesFromCookie)
        const languagesAvailableFromCookie = cookies.get('languagesavailable')
        if(languagesFromCookie !== undefined){
        setSeleccionados(languagesFromCookie)
        }
        if(languagesAvailableFromCookie !== undefined){
        setSlanguages(languagesAvailableFromCookie)

        }
    }, [])

    function addLanguage() {
        const newSeleccionado = { language: '', proficiency: '' }
        setSeleccionados([...seleccionados, newSeleccionado])
    }

    function deleteLanguage(pk) {
        const item = seleccionados[pk]
        console.log(item)
        const language_to_add = item.language
        if(language_to_add !== ''){
        setSlanguages([...languages, language_to_add])}
        let newState = seleccionados.filter((item, index) => index !== pk)
        setSeleccionados(newState)
    }

    const saveEnglishProficiency = (property, value) => {
        let languages2 = [...seleccionados]
        languages2[0] = { ...languages2[0], ['proficiency']: value }
        setSeleccionados(languages2)

    }

    const createState = (prevState, e, index) => {

        if (e.target.name == 'proficiency') {

            let newState = [...prevState]
            newState[index] = { proficiency: e.target.value, language: prevState[index]['language'] }

            return (newState)



        } else if (e.target.name == 'language') {


            let filtrado = languages.filter(
                (clave) => {
                    return clave !== e.target.value
                }
            );

            let newState = [...prevState]
            newState[index] = { proficiency: prevState[index]['proficiency'], language: e.target.value }

            // let newState = {
            //     ...prevState,
            //     [e.target.name]['language']: e.target.value,
            // };

            setSlanguages(filtrado)

            if (prevState[index]['language'] !== '') {
                setSlanguages([...filtrado, prevState[index][e.target.name]])
            }

            return (newState)
        }

    }
    return (<>
        <NavBar></NavBar>
        <h1>Languages</h1>
        <div>What is your English proficiency?</div>
        <br></br>
        <CustomSelectForLanguages arrayToIterate={proficiency_levels} nullvalue="Not chosen" name="proficiency" id="proficiency" functionCheck={saveEnglishProficiency} value={seleccionados[0].proficiency}></CustomSelectForLanguages>
        <br></br>
        <br></br>
        <div>What other languages do you speak?</div>
        <div className="idiomasDesign">
            {seleccionados.map((seleccionado, index) => {
                if (index != 0) {
                    return (
                        <div>
                            <select name="language" value={seleccionados[index]['language'] !== "" ? seleccionados[index]['language'] : "Select language"} onChange={(e) => { setSeleccionados((prevState) => createState(prevState, e, index)) }}>
                                <option>{seleccionados[index]['language'] !== '' ? seleccionados[index]['language'] : "Select language"}</option>
                                {languages.map((lenguaje) => {
                                    return (<option key={lenguaje} value={lenguaje}>{lenguaje}</option>)
                                })}
                            </select>
                            <select name="proficiency" value={seleccionados[index]['proficiency'] !== "" ? seleccionados[index]['language'] : "Select proficiency"} onChange={(e) => setSeleccionados((prevState) => createState(prevState, e, index))}>
                                <option>{seleccionados[index]['proficiency'] !== "" ? seleccionados[index]['proficiency'] : "Select proficiency"}</option>
                                {proficiency_levels.map((level) => {
                                    return (<option value={level}>{level}</option>)
                                })}</select>
                            <input type="button" value="Delete" className="delete-button" onClick={() => deleteLanguage(index)}></input>

                        </div>)
                }
            })}
            <input className="add-language-button" type="button" value="Add Language" onClick={addLanguage}></input>
            <br></br>
            <br></br>

            <input className="back-button" type="button" value="Back" onClick={() => { navigate('/employment/') }}></input>
            <input className="continue-button" type="button" value="Continue" onClick={() => { navigate('/hourly-rate/'); saveLanguages() }}></input>
        </div>
    </>
    )
}

export default Languages2