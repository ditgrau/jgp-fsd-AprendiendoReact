import {useState} from 'react'; 
const TURNS = {
  X: 'X',
  O: 'O'
}



const Square = ({children, updateBoard, index}) => {
  return(
    <div className='square'>
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(['o', 'x', 'x', 'x', 'o', 'x', 'o', 'x', 'o'])

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <section className='game'>{
        board.map((_, index) => {
          return (
            <Square
            key={index}
            index={index}>
              {board[index]}
            </Square>
          )
        })
      }</section>
    </main>
  )
}

export default App
