import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

export const FormWithCustomHook = () => {
  const [formState, handleInputChange] = useForm({ 
    name: '', 
    email: '',
		password: '' 
  })

  const { name, email, password } = formState;

	useEffect(() => {
		console.log("Se cambio el email")
	}, [email])
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
	}

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="form-group">
        <input 
          type="password" 
          name="password"
          className="form-control"
          placeholder="****"
          value={password}
          onChange={handleInputChange}
        />
      </div>
			<button type='submit' className='btn btn-primary'>
				Enviar
			</button>
    </form>
  )
}
