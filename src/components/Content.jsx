import { useEffect, useState } from "react"
import Tile from "./Tile"

const Content = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    for(let i=1; i<21; i++){
      setItems((items) => [
        ...items,
        [{
          "id": i,
          "src": `./assets/${i}.jpg`
        }]
      ])
    }}, [])
  
  return (
    <main>
      {items.map((item) => (
        <Tile src={item[0].src} id={item[0].id}/>
      ))}
    </main>
  )
}

export default Content