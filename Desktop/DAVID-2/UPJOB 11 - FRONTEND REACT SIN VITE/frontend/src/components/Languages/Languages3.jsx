import React, { useEffect, useState } from 'react'
import './Languages.css'

function Languages3() {
    // const [languages, setSlanguages] = useState(["chinese", "english", "spanish", "portuguese"])

    const [seleccionados, setSeleccionados] = useState({
        seleccionados : {seleccion1: "",
        seleccion2: ""}, available : ["chinese", "english", "spanish", "portuguese"] 
    })

    useEffect(()=>{console.log(seleccionados)})

    // const filtraLenguaje = (e) => {

        

    //     // let all_languages = ["chinese", "english", "spanish", "portuguese"]

    //     // if(all_languages.length >)

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

    //EMPIEZA LO BUENO

    // const createState = (prevState, e) => {

    //     let filtrado = seleccionados.available.filter(
    //         (clave) => {
    //             console.log('e.target.value', e.target.value)
    //             console.log('e.target.value', e.target.value)
    //             // console.log('seleccionados[e.target.name]', seleccionados[e.target.name])

    //             if(e.target.name === seleccionados.seleccionados[e.target.name]){
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
        

    // }

    //ACABA LO BUENO

    const createState = (prevState, e) => {
        console.log(prevState)
        let newState = {...prevState}
        console.log(newState)
        // newState.seleccionados[e.target.name] = {...prevState.seleccionados[e.target.name] = e.target.value}

        // newState.seleccionados = {...prevState.seleccionados, [e.target.name] : e.target.value}

        return newState
    }

    return (
        <div className="idiomasDesign">
            {/* <select name="seleccion1" onChange={(e)=>{setSeleccionados(prevState=>{createState(prevState,e)})}}> */}
            <select name="seleccion1" onChange={(e) => {setSeleccionados(prevState=>{createState(prevState, e)})}}>
                <option>{seleccionados.seleccionados.seleccion1 !== "" ? seleccionados.seleccionados.seleccion1 : "Selecciona el primer lenguaje"}</option>
                {
                    seleccionados.available.map((lenguaje) => {
                        return (
                            <option key={lenguaje} value={lenguaje}>{lenguaje}</option>
                        )
                    })
                }
            </select>
            <select name="seleccion2">
            <option>{seleccionados.seleccionados.seleccion2 !== "" ? seleccionados.seleccionados.seleccion2 : "Selecciona el segundo lenguaje"}</option>
                {
                    seleccionados.available.map((lenguaje) => {
                        return (
                            <option key={lenguaje} value={lenguaje}>{lenguaje}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Languages3