import React from 'react'

export default function CustomInput({type, name, placeholder, design, handleInput, functionCheck}) {
  return (
    <input type={type} className={design} placeholder={placeholder} name={name} onChange={(e)=>handleInput(e)} onBlur={(e)=>functionCheck(e)}>
    </input>
  )
}
