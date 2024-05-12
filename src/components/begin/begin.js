import './begin.css'

// Creación de la caja begin
export const begin = () => { // Crear la sección "home"
 const homeSection = document.createElement('section');
 homeSection.id = 'home';
 homeSection.classList.add('hero');
 const main = document.getElementById('app');

 // Crear la imagen de fondo de la sección "home"
 const homeImg = document.createElement('img');
 homeImg.src = './public/assets/hero.jpg';
 homeImg.alt = 'campo';
 homeSection.appendChild(homeImg);

 // Crear el título de la sección "home"
 const homeTitle = document.createElement('h1');
 homeTitle.textContent = 'Conociendo el mundo en lengua de signos';
 homeSection.appendChild(homeTitle);

 // Agregar la sección "home" al cuerpo del documento
 main.appendChild(homeSection);
}

// Exportación de la caja begin para usarla en el main.js
export const Begin = () => {
  return begin();
};