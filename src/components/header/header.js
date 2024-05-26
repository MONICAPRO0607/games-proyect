import './header.css'

// Creación de la caja header
export const header = () => {
  // Se crea el elemento header
  const headerElement = document.createElement('header')
  headerElement.id = 'header'; // Corregir el id

  // Se crea un elemento <img> para el logo
  const logo = document.createElement('img')
  logo.src = '/manoscolores.png'
  logo.alt = 'logo'
  logo.classList.add('logo') // Se agrega la clase 'logo' al elemento

  // Se crea un botón para el menú
  const menuButton = document.createElement('button')
  menuButton.textContent = '\u2630 Menu' // Unicode para el ícono de menú
  menuButton.classList.add('menu-button') // Se agrega la clase 'menu-button' al elemento

  // Se crea una lista desordenada para los enlaces
  const linksList = document.createElement('ul')
  linksList.classList.add('links') // Se agrega la clase 'links' a la lista

  // Se crean los elementos de la lista y se agregan los enlaces
  const linkItems = [
    { text: 'Sobre nosotros', href: '#about-us' },
    { text: 'Letras', href: '#cards' },
    { text: 'Practica jugando', href: '#games' },
    { text: 'Contacto', href: '#contactSection' }
  ]

  linkItems.forEach((item) => {
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.textContent = item.text
    link.href = item.href
    listItem.appendChild(link)
    linksList.appendChild(listItem)
  })

  // Scroll suave al hacer clic en los enlaces del header
  document.addEventListener('click', (event) => {
    const clickedElement = event.target
    // Verificar si el clic se realizó en un enlace dentro del header
    if (clickedElement.matches('header a')) {
      event.preventDefault() // Prevenir el comportamiento predeterminado del enlace
      const targetSelector = clickedElement.getAttribute('href')
      let targetElement
      // Verificar si el href es un ID
      if (targetSelector.startsWith('#')) {
        const targetId = targetSelector.substring(1)
        targetElement = document.getElementById(targetId)
      } else {
        // Si no es un ID, asumimos que es una clase
        targetElement = document.querySelector(targetSelector)
      }
      // Verificar si se encontró un elemento objetivo
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  // Se agregan los elementos al encabezado
  headerElement.appendChild(logo)
  headerElement.appendChild(menuButton)
  headerElement.appendChild(linksList)
  document.body.insertBefore(headerElement, document.body.firstChild)
};

// Exportación de la caja header para usarla en el main.js
export const Header = () => {
  return header()
}
