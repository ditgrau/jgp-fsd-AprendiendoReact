import { useState } from 'react';
const TURNS = {
  X: 'X',
  O: 'O'
}



const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  //handleclick ejecuta la funcion updateBoard
  const handleClick = () => {
    updateBoard(index)
  }

  return ( //cuando haga clic en cualquier square ejecuta handleclick
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}



function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)


  const updateBoard = (index) => {
    // define el actualizador del tablero, asignando el valor de turn a una posicion del array, que entra por params
    const newBoard = [...board]
    newBoard[index] = turn // 'x' u 'o'
    setBoard(newBoard)
    //updateBoard define el actualizador del turno 'setTurn'
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <section className='game'>{
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}>
              {/* el updateBoard se esta pasando como prop a Square */}
              {board[index]}
            </Square>
          )
        })
      }</section>
      {/* En esta section estamos renderizando cada uno de los Squares, con el map */}
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

      </section>
    </main>
  )
}

export default App
