import React, { useEffect, useState } from 'react'
import CustomSelectForLanguages from '../CustomSelectForLanguages'
import './Languages.css'
import NavBar from '../NavBar.jsx'
import { useNavigate } from 'react-router-dom'

function Languages() {
    const navigate = useNavigate()
    const languages_to_choose = ['Spanish', 'Italian', 'Portuguese']
    console.log(languages_to_choose)
    const proficiency_levels = ['Basic', 'Fluent', 'Advanced', 'Native']

    const [languages, setLanguages] = useState([{ 'id': 1, 'language': 'English', 'proficiency': '', 'languages_to_choose': [...languages_to_choose] }])
    //const [currentLanguage, setCurrentLanguage] = useState(1)

    function addLanguage() {

        const languages_to_choose = ['Spanish', 'Italian', 'Portuguese']
        console.log(languages_to_choose)

        let array_of_languages_to_not_include_only_languages = []
        for (let itemlanguage of languages) {
            console.log('itemlanguage', itemlanguage.language)
            array_of_languages_to_not_include_only_languages.push(itemlanguage.language)
        }

        console.log('array to substract', array_of_languages_to_not_include_only_languages)

        const toRemove = [...array_of_languages_to_not_include_only_languages]

        console.log('toRemove', toRemove)

        // const new_languages_to_choose = [...languages_to_choose]

        let new_languages_to_choose = languages_to_choose.filter((x) =>{ return !toRemove.includes(x)})
        // let new_languages_to_choose = []
        // for (let i; i<languages_to_choose.length; i++){
        //     if()

        // }

        
        console.log('new_languages_to_choose', new_languages_to_choose)

        let newLanguage = { 'id': Date.now(), 'language': '', 'proficiency': '', 'languages_to_choose': [...new_languages_to_choose] }

        console.log([...new_languages_to_choose])

        console.log(newLanguage)
        setLanguages([...languages, newLanguage])

    }

    function deleteLanguage(pk) {
        let newState = languages.filter(item => item.id !== pk)
        setLanguages(newState)
    }

    const saveEnglishProficiency = (property, value) => {
        let languages2 = [...languages]
        languages2[0] = { ...languages2[0], ['proficiency']: value }
        setLanguages(languages2)

    }

    // function get_languages_to_choose(index){
    //     console.log([...languages[index]['languages_to_choose']])
    //     return [...languages[index]['languages_to_choose']]
    // }


    const saveProficiencyOrLanguage = (name, val, pk) => {
        console.log(name, val, pk)

        if (name == 'language') {

            // let language0 = [...languages]
            // const index0 = languages.findIndex(item => item.id == pk)
            // //language0[index0][name] : val
            // language0[index0] = {...language0[index0], [name] : val}
            // setLanguages(language0)

            const index = languages.findIndex(item => item.id == pk)
            console.log('index is', index)
            // language_to_exclude_from_deletion = languages[index]['language']
            // console.log('language to exclude from deletion is', language_to_exclude_from_deletion)

            function getNextState(prevState) {
                let array_of_languages_to_delete_from_inputs = languages.filter((language) => { if (language.id !== pk) { return language } })
                // console.log('array_of_languages_to_delete is', array_of_languages_to_delete)
                // let array_of_languages_to_delete_only_language = array_of_languages_to_delete_from_inputs.map((languageitem)=>{return languageitem.language})

                let array_of_languages_to_delete_only_languages = []
                for (let itemlanguage of array_of_languages_to_delete_from_inputs) {
                    array_of_languages_to_delete_only_languages.push(itemlanguage.language)
                }
                const array_of_languages_to_delete = [val, ...array_of_languages_to_delete_only_languages]
                console.log('array_of_languages_to_delete is', array_of_languages_to_delete)

                let final_array_of_languages = []
                for (let item of languages_to_choose) {
                    if (!array_of_languages_to_delete.includes(item)) {
                        final_array_of_languages.push(item)
                    }

                }
                console.log('final_array_of_languages is', final_array_of_languages)

                var newLanguages = [...languages]

                for (let i = 0; i < languages.length; i++) {
                    if (i == 0) {

                    } else {
                        if (i !== index) {
                            // languages[i][]
                            const previous_language = prevState[i]['language'].length ? true : false
                            newLanguages[i] = { ...newLanguages[i], ['languages_to_choose']: [...final_array_of_languages].concat(previous_language ? prevState[i]['language'] : []), ['language']: prevState[i]['language'] }

                            console.log('prevState is ', [...prevState])
                        }
                        else {

                            let final_array_of_languages_plus_current = [...final_array_of_languages, val]
                            newLanguages[i] = { ...newLanguages[i], [name]: val, ['languages_to_choose']: final_array_of_languages_plus_current }
                        }

                    }

                    // setLanguages(prevState => [...prevState, languages : [...newLanguages]])
                    //setLanguages((prevState) => ([...newLanguages]))
                }

                // let languages2 = [languages.map((language, key)=> {return {...language[key], ['languages_to_choose'] : final_array_of_languages}})]
                // languages2[index] = {...languages2[index], [name] : val}
                // setLanguages(languages2)
                console.log([...newLanguages])
                return [...newLanguages]

            }
            setLanguages((prevState) => (getNextState(prevState)))
        } else {
            let language0 = [...languages]
            const index0 = languages.findIndex(item => item.id == pk)
            //language0[index0][name] : val
            language0[index0] = { ...language0[index0], [name]: val }
            setLanguages(language0)

        }
    }

    useEffect(() => { console.log('languages', languages) })
    return (<>
        <NavBar></NavBar>
        <h1>Languages</h1>
        <div>What is your English proficiency?</div>
        <br></br>
        <CustomSelectForLanguages arrayToIterate={proficiency_levels} nullvalue="Not chosen" name="proficiency" id="proficiency" functionCheck={saveEnglishProficiency} value={languages[0].proficiency}></CustomSelectForLanguages>
        <br></br>
        <br></br>
        <div>What other languages do you speak?</div>

        {languages.map((value, index) => {
            if (index !== 0) {
                return (<div><CustomSelectForLanguages arrayToIterate={languages[index]['languages_to_choose']} name="language" value={languages[index]['language']} functionCheck={(name, val) => saveProficiencyOrLanguage(name, val, value.id)} nullvalue="Choose your language"></CustomSelectForLanguages>
                    <CustomSelectForLanguages name="proficiency" value={languages[index]['proficiency']} functionCheck={(name, val) => saveProficiencyOrLanguage(name, val, value.id)} nullvalue="Choose your proficiency" arrayToIterate={proficiency_levels}> </CustomSelectForLanguages><input type="button" value="Delete" className="delete-button" onClick={() => deleteLanguage(value.id)}></input></div>)
            }
        })}
        <input className="add-language-button" type="button" value="Add Language" onClick={addLanguage}></input>
        <br></br>
        <br></br>

        <input className="back-button" type="button" value="Back" onClick={() => { navigate('/employment/') }}></input>
        <input className="continue-button" type="button" value="Continue" onClick={() => { navigate('/hourly-rate/') }}></input>
    </>
    )
}

export default Languages