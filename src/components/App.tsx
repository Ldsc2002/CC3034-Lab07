import React, { useState, useEffect } from 'react'
import './css/App.css'
import { hot } from 'react-hot-loader/root'
import Maze from './maze'
import Movements from './movements'

function App() {
  const [width, setWidth] = useState<number>(5)
  const [height, setHeight] = useState<number>(5)
  const [maze, setMaze] = useState<string[]>([])

  const handleWidth = (event) => {
    setWidth(event.target.value)
  }

  const handleHeight = (event) => {
    setHeight(event.target.value)
  }

  const goToMenu = () => {
    const start: HTMLElement | null = document.getElementById('start')
    const menu: HTMLElement | null = document.getElementById('menu')

    if (menu != null && start != null) {
      menu.style.display = 'flex'
      start.style.display = 'none'
    }
  }

  const startGame = () => {
    const menu: HTMLElement | null = document.getElementById('menu')
    const game: HTMLElement | null = document.getElementById('game')

    if (menu != null && game != null) {
      game.style.display = 'flex'
      menu.style.display = 'none'
    }
  }

  const restartGame = () => {
    setMaze([...[]])

    const menu: HTMLElement | null = document.getElementById('menu')
    const game: HTMLElement | null = document.getElementById('game')

    if (menu != null && game != null) {
      menu.style.display = 'flex'
      game.style.display = 'none'
    }
  }

  const getMaze = () => {
    const array : string[] = []

    fetch(`https://maze.juanelcaballo.club/?type=json&w=${width}&h=${height}`).then((response) => response.json()).then((responseInJSON) => {
      responseInJSON.map((obj1) => {
        let item = ''
        obj1.forEach((i) => {
          if (i === ' ') {
            item = `${item} `
          } else {
            item += i
          }
        })

        array.push(item)
        return array
      })

      setMaze(array)
      startGame()
    })
  }

  useEffect(() => {
    document.onkeydown = (e) => {
      e = e || window.event
      const newMaze = Movements(maze, e.key)
      setMaze([...newMaze])
    }
  })

  return (
    <div className="App">
      <div id="start">
        <button type="button" onClick={goToMenu}>New Game</button>
      </div>

      <div id="menu">
        <input placeholder="Ancho" onChange={handleWidth} />
        <input placeholder="Ancho" onChange={handleHeight} />

        <button type="submit" onClick={getMaze}>New Game</button>

      </div>

      <div id="game">
        <button type="button" onClick={restartGame}>New Game</button>

        <Maze maze={maze} />
      </div>
    </div>
  )
}

export default hot(App)
