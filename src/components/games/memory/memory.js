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
    { name: 'a', image: '/assets/a.png' },
    { name: 'b', image: '/assets/b.png' },
    { name: 'c', image: '/assets/c.png' },
    { name: 'd', image: '/assets/d.png' },
    { name: 'e', image: '/assets/e.png' },
    { name: 'f', image: '/assets/f.png' },
    { name: 'g', image: '/assets/g.png' },
    { name: 'h', image: '/assets/h.png' },
    { name: 'i', image: '/assets/i.jpg' },
    { name: 'j', image: '/assets/j.png' },
    { name: 'k', image: '/assets/k.jpg' },
    { name: 'l', image: '/assets/l.jpg' },
    { name: 'm', image: '/assets/m.png' },
    { name: 'n', image: '/assets/n.jpg' },
    { name: 'ñ', image: '/assets/ñ.png' },
    { name: 'o', image: '/assets/o.jpg' },
    { name: 'p', image: '/assets/p.png' },
    { name: 'q', image: '/assets/q.png' },
    { name: 'r', image: '/assets/r.png' },
    { name: 's', image: '/assets/s.png' },
    { name: 't', image: '/assets/t.png' },
    { name: 'u', image: '/assets/u.png' },
    { name: 'v', image: '/assets/v.png' },
    { name: 'w', image: '/assets/w.png' },
    { name: 'x', image: '/assets/x.png' },
    { name: 'y', image: '/assets/y.jpg' },
    { name: 'z', image: '/assets/z.png' }
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
