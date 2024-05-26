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
    { name: 'a', image: '/a.png' },
    { name: 'b', image: '/b.png' },
    { name: 'c', image: '/c.png' },
    { name: 'd', image: '/d.png' },
    { name: 'e', image: '/e.png' },
    { name: 'f', image: '/f.png' },
    { name: 'g', image: '/g.png' },
    { name: 'h', image: '/h.png' },
    { name: 'i', image: '/i.jpg' },
    { name: 'j', image: '/j.png' },
    { name: 'k', image: '/k.jpg' },
    { name: 'l', image: '/l.jpg' },
    { name: 'm', image: '/m.png' },
    { name: 'n', image: '/n.jpg' },
    { name: 'ñ', image: '/ñ.png' },
    { name: 'o', image: '/o.jpg' },
    { name: 'p', image: '/p.png' },
    { name: 'q', image: '/q.png' },
    { name: 'r', image: '/r.png' },
    { name: 's', image: '/s.png' },
    { name: 't', image: '/t.png' },
    { name: 'u', image: '/u.png' },
    { name: 'v', image: '/v.png' },
    { name: 'w', image: '/w.png' },
    { name: 'x', image: '/x.png' },
    { name: 'y', image: '/y.jpg' },
    { name: 'z', image: '/z.png' }
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
