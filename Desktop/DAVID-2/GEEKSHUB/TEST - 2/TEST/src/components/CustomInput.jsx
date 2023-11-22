import React from 'react'

export default function CustomInput({name, placeholder, design, functionChange}) {
  return (
    <input type="input" className={design} placeholder={placeholder} name={name} functionChange={(e)=>handleInput(e)}>
    </input>
  )
}
