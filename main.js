import './style.css'
import { Header } from './src/components/header/header.js';
import { Begin } from './src/components/begin/begin.js';
import { About } from './src/components/about/about.js';
import { Cards } from './src/components/cards/cards.js';
import { Contact } from './src/components/contact/contact.js';
import { Games } from './src/components/games/games.js';
import { Footer } from './src/components/footer/footer.js';

// Llamar a las cajas hijas
Header(); 
Begin();
About();
Cards();
Games();
Contact();
Footer();

// Código para mostrar/ocultar la flecha "volver arriba"
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
});