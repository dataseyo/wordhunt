import React from 'react'

import './styles.css'
import Tile from './tile/Tile'

const letters = ["A", "B", "C", "D", "E", "F", "G"]

const testData = [
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
]

const generateGrid = () => {
    // const randomGrid = []

    // return randomGrid
}

type BoardRow = {
    tiles: string[]
}

type Board = {
    board: string[][]
}

const BoardRow = ({tiles}: BoardRow) => {
    return (
        <div>
            {
                tiles.map((tile, index) => {
                    return (
                        <Tile
                            tile={tile}
                        />
                    )
                })
            }
        </div>
    )
}

const Board = ({board}: Board) => {
  return (
    <div>
        <h1>Board</h1>
        <div className="board">
            {
                board.map((tiles, index) => {
                    return (
                        <BoardRow
                            tiles={tiles}
                        />
                    )
                })
            } 
        </div>
        
    </div>
  )
}

export default Board