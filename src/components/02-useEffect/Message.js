import React, { useEffect } from 'react'

export const Message = () => {
  useEffect(() => {
    console.log('Se aperturo el hook');
    return () => {
      console.log('Se cerro el hook');
    }
  }, [])
  return (
    <div>
      <h2>Hola Jonathan!</h2>
    </div>
  )
}
