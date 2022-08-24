import React from 'react'

const Tile = ({src, id}) => {
  return (
    <button id={id}>
      <img src={src} alt="tile.png" className="tile" />
    </button>
  )
}

export default Tile