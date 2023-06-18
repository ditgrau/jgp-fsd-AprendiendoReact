import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [enabled, setEnable] = useState(false)
const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log('effect ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x:clientX , y:clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
  }, [enabled]) //dependencia del efecto. Este solo se ejecutara cuando el valor de la dependencia cambie

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#ff8000',
        borderRadius: '50%',
        opacity: 0.6,
        pointerEvent: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
      <button onClick={() => setEnable(!enabled)
      }>
        {enabled ? 'Desactivar' : 'Activar'}</button>
    </main>
  )
}

export default App
