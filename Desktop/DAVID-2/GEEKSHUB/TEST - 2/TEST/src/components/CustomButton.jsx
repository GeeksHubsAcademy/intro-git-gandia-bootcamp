import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ButtonNav({className, destination, name}) {

    const navigate = useNavigate()
  return (
    <div className={className} onClick={()=>navigate(destination)}>{name}</div>
  )
}
