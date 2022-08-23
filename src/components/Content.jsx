import { useState } from "react"
import Tile from "./Tile"

const Content = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  
  return (
    <main>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </main>
  )
}

export default Content