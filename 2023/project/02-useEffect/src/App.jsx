import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [enabled , setEnable] = useState(false)

  useEffect(() => {
    console.log ('effect ', {enabled})
  }, [enabled]) //dependencia del efecto. Este solo se ejecutara cuando el valor de la dependencia cambie

  return (
    <>
      <h2>PROYECTO POINTER</h2>
      <button onClick={()=> setEnable(!enabled)
      }>
        {enabled ? 'Desactivar' :'Activar'}</button>
    </>
  )
}

export default App
