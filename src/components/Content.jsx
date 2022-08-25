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
  
  const handleClick = (e) => {
    let clickedTile = e.target.alt
    console.log(clickedTile, "This one is clicked")
    if(clicked.includes(clickedTile)){
      setScore(0)
      setClicked([])
    }
    else{
      setClicked((clicked) => [
        ...clicked,
        e.target.alt
      ])
      setScore(score + 1)
      if(score === bestScore){
        setBestScore(bestScore + 1)
      }
    }

    let newList = items.sort(() => Math.random() - 0.5);
    setItems(newList)
  }    

  return (
    <main>
      <div className="tiles">
        {items.map((item) => (
          <Tile key={item[0].id} src={item[0].src} id={item[0].id} handleClick={handleClick}/>
        ))}
      </div>
      <div className="scores">
          <div className="score">Best Score: {bestScore}</div>
          <div className="score">Current Score: {score}</div> 
      </div>
    </main>
  )
}

export default Content