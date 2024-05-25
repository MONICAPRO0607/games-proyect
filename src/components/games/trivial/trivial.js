import './trivial.css'

// Creación de la caja de games
export const trivialGame = () => {
  // Seleccionar el contenedor del juego trivial
  const trivialGameContainer = document.getElementById('trivial-game')

  // Array de preguntas y respuestas
  let questions = [
    {
      question: '¿Cuál es la capital de Francia?',
      options: ['Madrid', 'París', 'Londres', 'Roma'],
      answer: 'París'
    },
    {
      question: '¿Cuántos planetas tiene nuestro sistema solar?',
      options: ['6', '8', '10', '12'],
      answer: '8'
    },
    {
      question: "¿Qué animal es conocido como el 'Rey de la selva'?",
      options: ['Elefante', 'León', 'Tigre', 'Jirafa'],
      answer: 'León'
    },
    {
      question: '¿Cuál es el río más largo del mundo?',
      options: ['Nilo', 'Amazonas', 'Misisipi', 'Yangtsé'],
      answer: 'Amazonas'
    }
  ]

  // Mezclar las preguntas para que estén en un orden aleatorio
  questions = shuffleArray(questions)

  // Índice para rastrear la pregunta actual
  let currentIndex = 0

  // Función para mezclar un array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  // Función para mostrar la pregunta actual y sus opciones
  const showCurrentQuestion = () => {
    trivialGameContainer.classList.remove('finished')
    const currentQuestion = questions[currentIndex]
    const questionElement = document.createElement('div')
    questionElement.className = 'question'

    // Crear el elemento <p> para el texto de la pregunta
    const questionText = document.createElement('p')
    questionText.textContent = currentQuestion.question
    questionText.classList.add('questionParagraph')
    questionElement.appendChild(questionText)

    // Crear el contenedor para el grid de opciones
    const optionsGrid = document.createElement('div')
    optionsGrid.className = 'options-grid'

    // Agregar opciones al grid
    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement('div')
      optionElement.className = 'option'
      optionElement.textContent = option
      optionElement.addEventListener('click', () => {
        if (!optionElement.classList.contains('answered')) {
          const isCorrect = option === currentQuestion.answer
          handleOptionClick(optionElement, currentQuestion.answer, isCorrect)
          optionElement.classList.add('answered')
          if (isCorrect) {
            // Deshabilitar todas las opciones de respuesta después de responder correctamente
            questionElement.querySelectorAll('.option').forEach((opt) => {
              if (opt.textContent !== currentQuestion.answer) {
                opt.classList.add('disabled')
              }
            })
            setTimeout(() => {
              currentIndex++
              if (currentIndex < questions.length) {
                showCurrentQuestion()
              } else {
                // Si se han mostrado todas las preguntas, mostrar un mensaje de fin de juego
                trivialGameContainer.classList.add('finished')
                trivialGameContainer.innerHTML =
                  "<p class='game-over'>¡Fin del juego!</p><br><button id='restart-button'>Reiniciar</button>"

                // Agregar evento de clic al botón de reinicio
                const restartButton = document.getElementById('restart-button')
                restartButton.addEventListener('click', () => {
                  // Reiniciar el juego
                  currentIndex = 0
                  questions = shuffleArray(questions)
                  showCurrentQuestion()
                })
              }
            }, 1500) // Intervalo de 1500ms antes de mostrar la siguiente pregunta
          }
        }
      })
      optionsGrid.appendChild(optionElement)
    })

    // Agregar el grid de opciones al contenedor de pregunta
    questionElement.appendChild(optionsGrid)

    trivialGameContainer.innerHTML = ''
    trivialGameContainer.appendChild(questionElement)
  }

  // Función para manejar el clic en las opciones
  const handleOptionClick = (optionElement, answer, isCorrect) => {
    if (isCorrect) {
      optionElement.classList.add('correct')
      const optionsContainer = optionElement.closest('.options-grid')
      optionsContainer.querySelectorAll('.option').forEach((option) => {
        if (option != optionElement) {
          option.classList.add('disabled')
        }
      })
    } else {
      optionElement.classList.add('incorrect')
    }
  }

  // Mostrar la primera pregunta al cargar el juego
  showCurrentQuestion()
}

export const TrivialGame = () => {
  return trivialGame()
}
