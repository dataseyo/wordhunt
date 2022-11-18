import React from 'react'

import './styles.css'

type Tile = {
    tile: string
}


const Tile = ({tile}: Tile) => {
  return (
    <div className="tile">
        {tile}
    </div>
  )
}

export default Tile