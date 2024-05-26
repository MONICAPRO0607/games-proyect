import './games.css';
import { TrivialGame } from './trivial/trivial.js';
import { MemoryGame } from './memory/memory.js';
import { FindGame } from './findTheWord/find.js';

// Creación de la caja de games
export const games = () => {
  const main = document.getElementById('app');
  const gamesSection = document.createElement('section');
  gamesSection.id = 'games';

  // Se le pone un h2 al apartado de juegos
  const gameTitle = document.createElement('h2');
  gameTitle.innerText = 'PRACTICA JUGANDO';

  function createButtonWithText(buttonText, buttonClass, buttonId, imageUrl) {
    const button = document.createElement('button');
    button.classList.add(buttonClass);
    button.id = buttonId;

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('button-image');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = buttonText;

    imageDiv.appendChild(img);

    const textDiv = document.createElement('div');
    textDiv.classList.add('button-text');
    textDiv.textContent = buttonText;

    button.appendChild(imageDiv);
    button.appendChild(textDiv);

    return button;
  }

  const memoryButton = createButtonWithText('Juego de memoria', 'memory-button', 'memory-game-button', 'assets/memoryGame.jpeg');
  const foundButton = createButtonWithText('Encuentra la palabra', 'found-button', 'hangman-game', 'assets/adivinaLaPalabra.jpeg');
  const trivialButton = createButtonWithText('Trivial', 'trivial-button', 'trivial-game-button', 'assets/trivialGame.jpeg');

  const memoryHeader = document.createElement('div');
  memoryHeader.id = 'memory-game-header';
  memoryHeader.classList.add('hidden');

  const memoryGame = document.createElement('section');
  memoryGame.id = 'memory-game';
  memoryGame.classList.add('hidden');

  const findGame = document.createElement('section');
  findGame.id = 'find-game';
  findGame.classList.add('hidden');

  const trivialGame = document.createElement('section');
  trivialGame.id = 'trivial-game';
  trivialGame.classList.add('hidden');

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  buttonContainer.appendChild(memoryButton);
  buttonContainer.appendChild(foundButton);
  buttonContainer.appendChild(trivialButton);

  memoryButton.addEventListener('click', function () {
    memoryHeader.classList.remove('hidden');
    memoryGame.classList.remove('hidden');
    trivialGame.classList.add('hidden');
    findGame.classList.add('hidden');
  });

  foundButton.addEventListener('click', function () {
    findGame.classList.remove('hidden');
    memoryHeader.classList.add('hidden');
    memoryGame.classList.add('hidden');
    trivialGame.classList.add('hidden');
  });

  trivialButton.addEventListener('click', function () {
    trivialGame.classList.remove('hidden');
    memoryHeader.classList.add('hidden');
    memoryGame.classList.add('hidden');
    findGame.classList.add('hidden');
  });

  main.appendChild(gamesSection);
  gamesSection.appendChild(gameTitle);
  gamesSection.appendChild(buttonContainer);
  main.appendChild(memoryHeader);
  main.appendChild(memoryGame);
  main.appendChild(findGame);
  main.appendChild(trivialGame);

  MemoryGame();
  FindGame();
  TrivialGame();
};

// Exportación de la caja games para usarla en el main.js
export const Games = () => {
  return games();
};
