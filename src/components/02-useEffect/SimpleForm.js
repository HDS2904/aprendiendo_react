import React, { useEffect, useState } from 'react'
import './effects.css'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
  })
  const { name, email } = formState
  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name] : target.value
    })
  }
  useEffect(() => {
    console.log("Inicio");
  },[])
  useEffect(() => {
    console.log("Cambios en el Form");
  },[formState])
  useEffect(() => {
    console.log("Cambios en el email");
  },[email])
  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <div className="form-group">
        <input 
          type="text" 
          name="name"
          className="form-control"
          placeholder="Ingrese su nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          name="email"
          className="form-control"
          placeholder="Ingrese su email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  )
}
