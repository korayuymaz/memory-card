import React from 'react'

const Tile = ({src, id, handleClick}) => {
  return (
    <button onClick={handleClick} key={id}>
      <img src={src} alt={id} className="tile" />
    </button>
  )
}

export default Tile