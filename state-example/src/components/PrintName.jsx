import React, { useState } from 'react'

export default function PrintName() {
    const [name,setName]=useState('')
     const handleClickEvent = () => {
        setName('Jeevan')
     }
  return (
    <div>

      <h1>Hello {name}</h1>
    <button onClick={handleClickEvent}>Click</button>
    </div>
  )
}
