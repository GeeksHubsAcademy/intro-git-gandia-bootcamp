import React from 'react'

export default function CustomInput({type, name, placeholder, design, functionChange}) {
  return (
    <input type={type} className={design} placeholder={placeholder} name={name} functionChange={(e)=>handleInput(e)}>
    </input>
  )
}
