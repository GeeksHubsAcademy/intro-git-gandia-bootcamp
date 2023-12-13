import React, { useEffect, useState } from 'react'
import './Languages.css'
import NavBar from '../NavBar'
import CustomSelectForLanguages from '../CustomSelectForLanguages.jsx'


function Languages2() {
    const [languages, setSlanguages] = useState(["Chinese", "Spanish", "Portuguese"])
    const proficiency_levels = ['Basic', 'Fluent', 'Advanced', 'Native']


    const [seleccionados, setSeleccionados] = useState([{
        language: "English", proficiency: ""
    }])

    useEffect(() => { console.log(seleccionados, languages) })

    function addLanguage() {
        const newSeleccionado = {language: '', proficiency: ''}
        setSeleccionados([...seleccionados, newSeleccionado])
    }

    function deleteLanguage(pk) {
        let newState = seleccionados.filter((item, index) => index !== pk)
        setSeleccionados(newState)
    }

    const saveEnglishProficiency = (property, value) => {
        let languages2 = [...seleccionados]
        languages2[0] = { ...languages2[0], ['proficiency']: value }
        setSeleccionados(languages2)

    }

    const createState = (prevState, e, index) => {

        if(e.target.name == 'proficiency'){

            let newState = [...prevState]
            newState[index] = {proficiency : e.target.value, language : prevState[index]['language']}

            return (newState)



        } else if (e.target.name == 'language'){


        let filtrado = languages.filter(
            (clave) => {
                return clave !== e.target.value
            }
        );

        let newState = [...prevState]
        newState[index] = {proficiency : prevState[index]['proficiency'], language : e.target.value}

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
                if(index != 0){
                return (
                    <div>
                    <select name="language" value={seleccionados[index]['language'] !== "" ? seleccionados[index]['language'] : "Selecciona lenguaje"} onChange={(e) => { setSeleccionados((prevState) => createState(prevState, e, index)) }}>
                        <option>{seleccionados[index]['language']!== '' ? seleccionados[index]['language'] : "Selecciona lenguaje"}</option>
                        {languages.map((lenguaje) => {
                            return (<option key={lenguaje} value={lenguaje}>{lenguaje}</option>)
                        })}
                    </select>
                    <CustomSelectForLanguages name="proficiency" value={languages[index]['proficiency']} functionCheck={(e) => {setSeleccionados((prevState) => createState(prevState, e, index)) }} nullvalue="Choose your proficiency" arrayToIterate={proficiency_levels}></CustomSelectForLanguages>
                    <input type="button" value="Delete" className="delete-button" onClick={() => deleteLanguage(index)}></input>

                    </div>)
            }})}
                    <input className="add-language-button" type="button" value="Add Language" onClick={addLanguage}></input>
        </div>
        </>
    )
}

export default Languages2