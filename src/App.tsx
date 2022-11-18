import react from 'react'

import './App.css'
import { Board } from './components/board'

const testData = [
  ["A", "B", "C", "D"],
  ["A", "B", "C", "D"],
  ["A", "B", "C", "D"],
  ["A", "B", "C", "D"],
  ["A", "B", "C", "D"],
]

function App() {
  return (
    <div className="App">
      <Board
        board={testData}
      />
    </div>
  )
}

export default App
