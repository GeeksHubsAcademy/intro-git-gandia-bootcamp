import React, { useState } from 'react'


export default function CustomSelect({ arrayToIterate, name, id, nullvalue, functionCheck = ()=>{}, value}) {
   
  //console.log(arrayToIterate)


  return (
    <select name={name} id={id} value={value} onChange={(e)=> functionCheck(e.target.name, e.target.value)}>
      <option value={nullvalue}>{nullvalue}</option>
      {arrayToIterate.map((name) => {
        return <option key={name} value={name}>{name}</option>
      })}
    </select>
  )
}
