import './trivial.css'

// Creación de la caja de games
export const trivialGame = () => {
  // Seleccionar el contenedor del juego trivial
  const trivialGameContainer = document.getElementById('trivial-game')

  // Array de preguntas y respuestas
  let questions = [
    {
      question: '¿Cuál de las siguientes opciones sobre la lengua de signos es correcta?',
      options: ['Existe una lengua de signos universal', 'Es una comunicación basada en la mímica', 'Es un código gestual sin estructura concreta', 'Existen 26 gestos distintos que representan letras'],
      answer: 'Existen 26 gestos distintos que representan letras'
    },
    {
      question: '¿Qué característica distingue a la lengua de signos de los gestos cotidianos?',
      options: ['Se utiliza sólo con la mano dominante', 'Es internacional y comprendida por todos', 'Tiene una gramática y estructura lingüística propia', 'Se basa únicamente en expresiones faciales'],
      answer: 'Tiene una gramática y estructura lingüística propia'
    },
    {
      question: "¿Qué papel juega la expresión facial en la lengua de signos?",
      options: ['No tiene importancia', 'Es crucial para transmitir significado', 'Es opcional', 'Se utiliza sólo en situaciones formales'],
      answer: 'Es crucial para transmitir significado'
    },
    {
      question: '¿Cuál es una de las principales ventajas de la lengua de signos?',
      options: ['No requiere aprender gramática', 'Es universal en todos los países', 'No tiene reglas específicas', 'Facilita la comunicación entre personas sordas y oyentes'],
      answer: 'Facilita la comunicación entre personas sordas y oyentes'
    },
    {
      question: '¿Qué se utiliza para deletrear palabras específicas en la lengua de signos?',
      options: ['Números', 'Gestos', 'Lengua', 'Alfabeto dactilológico'],
      answer: 'Alfabeto dactilológico'
    },
    {
      question: '¿Cuál es uno de los desafíos comunes al aprender la lengua de signos?',
      options: ['Aprender a que no es sustituir palabra por signo', 'Falta de expresión facial', 'Formar oraciones gramaticalmente correctas', 'la cultura del colectivo de las personas con sordera'],
      answer: 'Aprender a que no es sustituir palabra por signo'
    },
    {
      question: '¿Cuál es una de las ventajas de la lengua de signos sobre la comunicación oral en entornos ruidosos?',
      options: ['No requiere concentración', 'Es más fácil de entender en situaciones ruidosas', 'Es más lenta que la comunicación oral', ' No puede ser utilizada en entornos ruidosos'],
      answer: 'Es más fácil de entender en situaciones ruidosas'
    },   {
      question: '¿Cuál de las siguientes opciones describe mejor la relación entre la lengua de signos y la cultura sorda?',
      options: ['La lengua de signos es independiente de la cultura sorda', 'La cultura sorda no tiene influencia en la lengua de signos', 'La lengua de signos es solo una herramienta de comunicación, no relacionada con la cultura', 'La lengua de signos y la cultura sorda están intrínsecamente vinculadas'],
      answer: 'La lengua de signos y la cultura sorda están intrínsecamente vinculadas'
    },
    {
      question: '¿Qué se utiliza para enfatizar palabras o frases en la lengua de signos?',
      options: ['Silencio total', 'Movimientos de cadera', 'Elevación de cejas', 'Parpadero rápido'],
      answer: 'Elevación de cejas'
    },
    {
      question: '¿Cuál es una de las características principales de la lengua de signos que la distingue de la mímica?',
      options: ['Uso exclusivo de expresiones faciales', 'Uso de gramática y estructura lingüística', 'Uso de palabras habladas simultáneamente', 'Uso de gestos exagerados'],
      answer: 'Uso de gramática y estructura lingüística'
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
