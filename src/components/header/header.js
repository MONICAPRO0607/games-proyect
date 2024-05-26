import './header.css'

// Creación de la caja header
export const header = () => {
  // Se crea el elemento header
  const headerElement = document.createElement('header') 
  headerElement.id = 'header'

  // Se crea un elemento imagen para el logo y se le da clase
  const logo = document.createElement('img')
  logo.src = '/assets/manoscolores.png'
  logo.alt = 'logo'
  logo.classList.add('logo')

  // Se crea un botón para el menú y se le da clase
  const menuButton = document.createElement('button')
  menuButton.textContent = '\u2630 Menu'
  menuButton.classList.add('menu-button')

  // Se crea una lista para los enlaces
  const linksList = document.createElement('ul')
  linksList.classList.add('links')

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

    // Se realizan los eventos
  menuButton.addEventListener('click', function() {
    linksList.classList.toggle('active')
  })

  linksList.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      linksList.classList.remove('active')
    })
  })

  // El scroll suave al hacer click en los enlaces
  document.addEventListener('click', (event) => {
    const clickedElement = event.target
    if (clickedElement.matches('header a')) {
      event.preventDefault()
      const targetSelector = clickedElement.getAttribute('href')
      let targetElement
      if (targetSelector.startsWith('#')) {
        const targetId = targetSelector.substring(1)
        targetElement = document.getElementById(targetId)
      } else {
        targetElement = document.querySelector(targetSelector)
      }
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })

  // Se agregan los elementos al encabezado
  headerElement.appendChild(logo)
  headerElement.appendChild(menuButton)
  headerElement.appendChild(linksList)
  document.body.insertBefore(headerElement, document.body.firstChild)
}

// Se exporta la caja para usarla en el main.js
export const Header = () => {
  return header()
}
