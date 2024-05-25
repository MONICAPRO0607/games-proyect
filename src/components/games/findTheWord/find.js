import './find.css'

// Array de letras del alfabeto con sus imágenes correspondientes
const alphabet = [
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
  { name: 'y', image: 'public/assets/y.png' },
  { name: 'z', image: 'public/assets/z.png' }
]

// Array de palabras posibles
const words = ['caballo', 'Mara', 'Monica', 'javascript', 'vite', 'queso']

// Función para obtener una palabra aleatoria del array
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex].toLowerCase() // Asegurarse de que la palabra esté en minúsculas
}

// Función principal para crear el juego
const createFindGame = (container) => {
  container.innerHTML = '' // Limpia el contenedor

  // Se selecciona una palabra aleatoria del array
  const wordToGuess = getRandomWord()

  // Se crean los huecos de cada letra de la palabra
  const blankSpaces = wordToGuess.split('').map(() => '_')

  // Se crea el elemento de palabra y se agrega al contenedor
  const wordElement = document.createElement('div')
  wordElement.className = 'word'
  container.appendChild(wordElement)

  // Se crea el elemento de mensaje y se agrega al contenedor
  const messageElement = document.createElement('div')
  messageElement.className = 'message'
  container.appendChild(messageElement)

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

  // Se crea el input para que la persona usuaria introduzca la palabra
  const inputField = document.createElement('input')
  inputField.type = 'text'
  inputField.placeholder = 'Guess a letter'
  inputField.maxLength = 1 // Limita a una letra
  container.appendChild(inputField)

  // Función para verificar si la palabra está completa
  const isWordComplete = () => {
    return !blankSpaces.includes('_')
  }

  // Se verifica si es correcto
  inputField.addEventListener('input', () => {
    const userInput = inputField.value.toLowerCase()

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

    inputField.value = '' // Limpia el campo de entrada
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
  // Se toma el contenedor con ID "find-game"
  const hangmanGameContainer = document.getElementById('find-game')

  // Verifica si el contenedor existe
  if (!hangmanGameContainer) {
    console.error('No se encontró el contenedor con ID "find-game".')
    return
  }

  // Inicia el juego
  createFindGame(hangmanGameContainer)
}

export const FindGame = () => {
  return findGame()
}
