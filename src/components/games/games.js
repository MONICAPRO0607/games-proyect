import './games.css'

// Creación de la caja de games
export const games = () => {
  const games = document.createElement('section');
  games.id = 'games';

  const gameTitle= document.createElement('h2');
  gameTitle.innerText = 'PRACTICA JUGANDO';
  games.appendChild(gameTitle);

  const memoryButton = document.createElement('button');
  memoryButton.textContent = 'Juego de memoria';
  memoryButton.classList.add('memory-button');
  
  const foundButton = document.createElement('button');
  foundButton.textContent = 'A leer la palabra';
  foundButton.classList.add('found-button');

  const trivialButton = document.createElement('button');
  trivialButton.textContent = 'Trivial';
  trivialButton.classList.add('trivial-button');

  const main = document.getElementById('app');
  main.appendChild(games);
  games.appendChild(memoryButton);
  games.appendChild(foundButton);
  games.appendChild(trivialButton);
}

// Exportación de la caja games para usarla en el main.js
export const Games = () => {
  return games();
};