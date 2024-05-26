// memory.js
import './memory.css'

// Función para crear el juego de memoria
export const memoryGame = () => {
  const memoryGameContainer = document.getElementById('memory-game')
  if (!memoryGameContainer) {
    console.error("No se encontró el contenedor con la clase 'memory-game'")
    return
  }

  // Array con las imágenes de las letras
  const cardsData = [
    { name: 'a', image: 'public/assets/a.png' },
    { name: 'b', image: 'public/assets/b.png' },
    { name: 'c', image: 'public/assets/c.png' },
    { name: 'd', image: 'public/assets/d.png' },
    { name: 'e', image: 'public/assets/e.png' },
    { name: 'f', image: 'public/assets/f.png' },
    { name: 'g', image: 'public/assets/g.png' },
    { name: 'h', image: 'public/assets/h.png' },
    { name: 'i', image: 'public/assets/i.jpg' },
    { name: 'j', image: 'public/assets/j.png' },
    { name: 'k', image: 'public/assets/k.jpg' },
    { name: 'l', image: 'public/assets/l.jpg' },
    { name: 'm', image: 'public/assets/m.png' },
    { name: 'n', image: 'public/assets/n.jpg' },
    { name: 'ñ', image: 'public/assets/ñ.png' },
    { name: 'o', image: 'public/assets/o.jpg' },
    { name: 'p', image: 'public/assets/p.png' },
    { name: 'q', image: 'public/assets/q.png' },
    { name: 'r', image: 'public/assets/r.png' },
    { name: 's', image: 'public/assets/s.png' },
    { name: 't', image: 'public/assets/t.png' },
    { name: 'u', image: 'public/assets/u.png' },
    { name: 'v', image: 'public/assets/v.png' },
    { name: 'w', image: 'public/assets/w.png' },
    { name: 'x', image: 'public/assets/x.png' },
    { name: 'y', image: 'public/assets/y.jpg' },
    { name: 'z', image: 'public/assets/z.png' }
  ]

  // Función para crear un juego nuevo
  const createNewGame = () => {
    memoryGameContainer.innerHTML = '' // Limpiar el contenedor

    const deck = [] // Barajar para el juego actual
    const selectedPairs = new Set() // Pares de cartas seleccionados

    let gridCards = 8

    if (window.matchMedia('(max-width: 749px)').matches) {
      gridCards = 6
    } 
    
    while (selectedPairs.size < gridCards) {
      const randomIndex = Math.floor(Math.random() * cardsData.length)
      const cardData = cardsData[randomIndex]
      if (!selectedPairs.has(cardData.name)) {
        selectedPairs.add(cardData.name)
        deck.push(cardData, cardData) // Duplicar el par de cartas
      }
    }

    deck.sort(() => Math.random() - 0.5) // Barajar las cartas

    // Crear las cartas en el DOM
    deck.forEach((cardData) => {
      const card = document.createElement('div')
      card.className = 'memory-card'
      card.dataset.name = cardData.name
      card.innerHTML = `
        <div class="memory-card-inner">
          <div class="memory-card-front"></div>
          <div class="memory-card-back">
            <img src="${cardData.image}" alt="${cardData.name}">
          </div>
        </div>
      `
      memoryGameContainer.appendChild(card)
    })

    // Resetear variables
    firstCard = null
    secondCard = null
    lockBoard = false
  }

  // Crear botón de reseteo
  const resetButton = document.createElement('button')
  resetButton.textContent = 'Iniciar Juego'
  resetButton.addEventListener('click', createNewGame)
  const memoryGameHeader = document.getElementById('memory-game-header')
  memoryGameHeader.appendChild(resetButton)

  let firstCard = null
  let secondCard = null
  let lockBoard = false

  // Evento de clic en las cartas
  memoryGameContainer.addEventListener('click', (event) => {
    const clickedCard = event.target.closest('.memory-card')
    if (
      !clickedCard ||
      lockBoard ||
      clickedCard.classList.contains('flipped')
    ) {
      return
    }

    clickedCard.classList.add('flipped')

    if (!firstCard) {
      firstCard = clickedCard
    } else if (!secondCard) {
      secondCard = clickedCard

      if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard = null
        secondCard = null
      } else {
        lockBoard = true
        setTimeout(() => {
          firstCard.classList.remove('flipped')
          secondCard.classList.remove('flipped')
          firstCard = null
          secondCard = null
          lockBoard = false
        }, 1000)
      }
    }
  })

  // Verificar si todas las cartas están volteadas
  setInterval(() => {
    if (
      memoryGameContainer.querySelectorAll('.memory-card:not(.flipped)')
        .length === 0
    ) {
      setTimeout(createNewGame, 2000) // Resetear el juego después de 2 segundos
    }
  }, 1000)
}

// Componente de juego de memoria
export const MemoryGame = () => {
  memoryGame()
}
