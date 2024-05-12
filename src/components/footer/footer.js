import './footer.css'

// Creación de la caja footer
export const footer = () => {
  // Se crea el elemento footer
    const footer = document.createElement("footer"); 

// Se crea el título del footer
const footerTitle = document.createElement('p');
footerTitle.classList.add('copyright');
footerTitle.textContent = 'Copyright MONICA SANCHEZ CARRILLO 2024';
footer.appendChild(footerTitle);

// Se agregan los elementos del footer al body
document.body.appendChild(footer);
}

// Exportación de la caja footer para usarla en el main.js
export const Footer = () => {
  return footer();
};