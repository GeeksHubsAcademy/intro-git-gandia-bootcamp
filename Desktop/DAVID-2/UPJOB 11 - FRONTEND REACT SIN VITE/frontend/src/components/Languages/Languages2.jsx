import React, { useEffect, useState } from 'react'
import './Languages.css'

function Languages2() {
    const [languages, setSlanguages] = useState(["chinese", "english", "spanish", "portuguese"])

    const [seleccionados, setSeleccionados] = useState({
        seleccion1: "",
        seleccion2: ""
    })

    useEffect(()=>{console.log(seleccionados, languages)})

    //const filtraLenguaje = (e) => {

        

        // let all_languages = ["chinese", "english", "spanish", "portuguese"]

        // if(all_languages.length >)

    //     let filtrado = languages.filter(
    //         (clave) => {
    //             console.log('e.target.value', e.target.value)
    //             // console.log('seleccionados[e.target.name]', seleccionados[e.target.name])

    //             if(e.target.name === seleccionados[e.target.name]){
    //                 // console.log('seleccionados[e.target.name] is', e.target.name)
    //                 // console.log('e.target.name is', e.target.name)
    //                 // console.log('returning true')
    //                 return true
    //             }
    //             // console.log('clave is', clave)
    //             // console.log('e.target.value is', e.target.value)
    //             // console.log('returning comparison')   
    //             return clave !== e.target.value
    //         }
    //     );

    //     setSeleccionados((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }));


    //     setSlanguages(filtrado)
    // }

    const createState = (prevState, e) => {

        let filtrado = languages.filter(
            (clave) => {
                console.log('e.target.value', e.target.value)
                // console.log('seleccionados[e.target.name]', seleccionados[e.target.name])

                if(e.target.name === seleccionados[e.target.name]){

                    if (prevState[e.target.name] === e.target.value){
                        return true

                    } else {
                        setSlanguages([...languages, prevState[e.target.name]])
                    }
                    // console.log('seleccionados[e.target.name] is', e.target.name)
                    // console.log('e.target.name is', e.target.name)
                    // console.log('returning true')
                    return true
                }
                // console.log('clave is', clave)
                // console.log('e.target.value is', e.target.value)
                // console.log('returning comparison')   
                return clave !== e.target.value
            }
        );

        //console.log(filtrado)
        //setSlanguages(filtrado)

        console.log(e.target.name)
        console.log(e.target.value)
        console.log([...languages, prevState[e.target.name]])
        let newState = {...prevState, [e.target.name] : e.target.value}
        //newState[e.target.name] = e.target.value
        return(newState)

        // return(filtrado)
        

    }

    return (
        <div className="idiomasDesign">
            <select name="seleccion1" onChange={(e)=>{setSeleccionados((prevState)=>createState(prevState, e))}}>
                <option>{seleccionados.seleccion1 !== "" ? seleccionados.seleccion1 : "Selecciona el primer lenguaje"}</option>
                {
                    languages.map((lenguaje) => {
                        return (
                            <option key={lenguaje} value={lenguaje}>{lenguaje}</option>
                        )
                    })
                }
            </select>
            {/* <select name="seleccion2" onChange={(e)=>{setSeleccionados((prevState)=>({...prevState, [e.target.name] : e.target.value}))}}> */}
            <select name="seleccion2" onChange={(e)=>{setSeleccionados((prevState)=>createState(prevState, e))}}>
            <option>{seleccionados['seleccion2'] !== "" ? seleccionados.seleccion2 : "Selecciona el segundo lenguaje"}</option>
                {
                    languages.map((lenguaje) => {
                        return (
                            <option key={lenguaje} value={lenguaje}>{lenguaje}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Languages2