import './find.css'

// Array de letras del alfabeto con sus imágenes correspondientes
const alphabet = [
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
  { name: 'y', image: '/assets/y.png' },
  { name: 'z', image: '/assets/z.png' }
]

// Array de palabras posibles
const words = [
  'signar',
  'aprender',
  'divertido',
  'javascript',
  'fiesta',
  'lengua',
  'manos',
  'desarrollo',
  'integrar',
  'sorprender'
]

// Función para obtener una palabra aleatoria del array
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex].toLowerCase() // Poner siempre la palabra en minúsculas
}

// Función principal para crear el juego
const createFindGame = (container) => {
  container.innerHTML = '' // Limpia el contenedor

  // Seleccionar una palabra aleatoria del array
  const wordToGuess = getRandomWord()

  // Crear los huecos de cada letra de la palabra
  const blankSpaces = wordToGuess.split('').map(() => '_')

  // Crear el elemento de palabra y agregarlo al contenedor
  const wordElement = document.createElement('div')
  wordElement.className = 'word'
  container.appendChild(wordElement)

  // Crear el elemento de mensaje y agregarlo al contenedor
  const messageElement = document.createElement('div')
  messageElement.className = 'message'
  container.appendChild(messageElement)

  // Crear el elemento para mostrar la letra incorrecta
  const incorrectLetterElement = document.createElement('div')
  incorrectLetterElement.className = 'incorrect-letter'
  container.appendChild(incorrectLetterElement)

  // Almacenar las letras incorrectas
  const incorrectLetters = []

  // Función para actualizar el contenido de la palabra con imágenes
  const updateWordDisplay = () => {
    wordElement.innerHTML = ''
    blankSpaces.forEach((letter, index) => {
      const letterContainer = document.createElement('div')
      letterContainer.className = 'letter-container'

      const letterElement = document.createElement('div')
      letterElement.className = 'letter'
      if (letter === '_') {
        letterElement.textContent = '_'
      } else {
        const letterData = alphabet.find((item) => item.name === letter)
        if (letterData) {
          const img = document.createElement('img')
          img.src = letterData.image
          img.alt = letterData.name
          letterElement.appendChild(img)

          // Añadir la letra debajo de la imagen
          const letterText = document.createElement('div')
          letterText.className = 'letter-text'
          letterText.textContent = letter
          letterContainer.appendChild(letterText)
        }
      }
      letterContainer.appendChild(letterElement)
      wordElement.appendChild(letterContainer)
    })
  }

  // Inicializar la visualización de la palabra
  updateWordDisplay()

  // Crear el input para que el usuario introduzca la palabra
  const inputField = document.createElement('input')
  inputField.type = 'text'
  inputField.placeholder = 'Introduce la palabra'
  inputField.maxLength = 1 // Limita a una letra
  container.appendChild(inputField)

  // Función para verificar si la palabra está completa
  const isWordComplete = () => {
    return !blankSpaces.includes('_')
  }

  // Verificar si es correcto
  inputField.addEventListener('input', () => {
    const userInput = inputField.value.toLowerCase()

    // Si la letra ingresada no está en la palabra y no está en las letras incorrectas
    if (
      userInput &&
      !wordToGuess.includes(userInput) &&
      !incorrectLetters.includes(userInput)
    ) {
      incorrectLetters.push(userInput)
      incorrectLetterElement.textContent = incorrectLetters.join(' ')
      inputField.value = ''
    }

    if (userInput && wordToGuess.includes(userInput)) {
      wordToGuess.split('').forEach((letter, index) => {
        if (letter === userInput) {
          blankSpaces[index] = userInput
        }
      })

      updateWordDisplay()

      if (isWordComplete()) {
        // Deshabilitar el input cuando la palabra esté completa
        inputField.disabled = true
        messageElement.textContent = '¡Bien hecho!'
      }
    }

    inputField.value = '' // Limpiar el campo de entrada
  })

  // Crear un botón para pasar a la siguiente palabra
  const nextButton = document.createElement('button')
  nextButton.textContent = 'Next Word'
  container.appendChild(nextButton)

  nextButton.addEventListener('click', () => {
    createFindGame(container)
  })
}

// Inicializar el juego
export const findGame = () => {
  // Tomar el contenedor con ID "find-game"
  const hangmanGameContainer = document.getElementById('find-game')

  // Verificar si el contenedor existe
  if (!hangmanGameContainer) {
    console.error('No se encontró el contenedor con ID "find-game".')
    return
  }

  // Iniciar el juego
  createFindGame(hangmanGameContainer)
}

export const FindGame = () => {
  return findGame()
}
