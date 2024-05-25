import './games.css'
import { TrivialGame } from './trivial/trivial.js'
import { MemoryGame } from './memory/memory.js'
import { FindGame } from './findTheWord/find.js'

// Creación de la caja de games
export const games = () => {
  const main = document.getElementById('app')
  const games = document.createElement('section')
  games.id = 'games'

  // Se le pone un h2 al apartado de juegos
  const gameTitle = document.createElement('h2')
  gameTitle.innerText = 'PRACTICA JUGANDO'
  games.appendChild(gameTitle)

  // Se crea un botón para cada juego
  const memoryButton = document.createElement('button')
  memoryButton.textContent = 'Juego de memoria'
  memoryButton.classList.add('memory-button')
  memoryButton.id = 'memory-game-button'
  const memoryHeader = document.createElement('div')
  memoryHeader.id = 'memory-game-header'
  const memoryGame = document.createElement('section')
  memoryGame.id = 'memory-game'
  main.appendChild(memoryHeader)
  main.appendChild(memoryGame)
  MemoryGame()

  const foundButton = document.createElement('button')
  foundButton.textContent = 'A leer la palabra'
  foundButton.classList.add('found-button')
  foundButton.id = 'hangman-game'
  const findGame = document.createElement('section')
  findGame.id = 'find-game'
  main.appendChild(findGame)
  FindGame()

  const trivialButton = document.createElement('button')
  trivialButton.textContent = 'Trivial'
  trivialButton.classList.add('trivial-button')
  trivialButton.id = 'trivial-game-button'
  const trivialGame = document.createElement('section')
  trivialGame.id = 'trivial-game'
  main.appendChild(trivialGame)
  TrivialGame()

  main.appendChild(games)
  games.appendChild(memoryButton)
  games.appendChild(foundButton)
  games.appendChild(trivialButton)
}

// Exportación de la caja games para usarla en el main.js
export const Games = () => {
  return games()
}
