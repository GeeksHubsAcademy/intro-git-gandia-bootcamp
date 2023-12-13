import React, { useState } from 'react'


export default function CustomSelect({ arrayToIterate, value, name, id, nullvalue, functionCheck=()=>{}}) {
   
  //console.log(arrayToIterate)


  return (
    <select name={name} value={value} id={id} onChange={(e)=> functionCheck(e.target.value)} onBlur={(e)=> functionCheck(e.target.value)}>
      <option value={nullvalue}>{nullvalue}</option>
      {arrayToIterate.map((name) => {
        return <option key={name} value={name}>{name}</option>
      })}
    </select>
  )
}
