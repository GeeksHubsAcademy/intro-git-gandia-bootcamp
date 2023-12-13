import React, { useEffect, useState } from 'react'
import './Languages.css'

function Languages2() {
    const [languages, setSlanguages] = useState(["chinese", "spanish", "portuguese"])


    const [seleccionados, setSeleccionados] = useState(
        [{ id: '1', language: 'English' }]
    )

    useEffect(() => { console.log(seleccionados, languages) })

    const createState = (prevState, e) => {

        let filtrado = languages.filter(
            (clave) => {
                return clave !== e.target.value
            }
        );

        let newState = {
            ...prevState,
            [e.target.name]: e.target.value,
        };

        setSlanguages(filtrado)

        if (prevState[e.target.name] !== '') {
            setSlanguages([...filtrado, prevState[e.target.name]])
        }
        return (newState)

    }

    return (
        
    )
}


export default Languages2