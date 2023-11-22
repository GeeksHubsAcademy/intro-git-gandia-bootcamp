import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ButtonNav({destination, name}) {

    const navigate = useNavigate
  return (
    <div onClick={()=>navigate(destination)}>{name}</div>
  )
}
