import './cards.css'

// Creación de la caja cards
export const cards = () => {
  // Se crea el elemento de las tarjetas
  const cards = document.createElement('cards')

  // Se recoge la caja padre main para almacenar las letras
  const main = document.getElementById('app')

  const cardsContainer = document.createElement('section')
  cardsContainer.id = 'cards'
  cardsContainer.classList.add('cardsContainer')

  const cardsList = [
    {
      name: 'a',
      image: '/a.png'
    },
    {
      name: 'b',
      image: '/b.png'
    },
    {
      name: 'c',
      image: '/c.png'
    },
    {
      name: 'd',
      image: '/d.png'
    },
    {
      name: 'e',
      image: '/e.png'
    },
    {
      name: 'f',
      image: '/f.png'
    },
    {
      name: 'g',
      image: '/g.png'
    },
    {
      name: 'h',
      image: '/h.png'
    },
    {
      name: 'i',
      image: '/i.jpg'
    },
    {
      name: 'j',
      image: '/j.png'
    },
    {
      name: 'k',
      image: '/k.png'
    },
    {
      name: 'l',
      image: '/l.jpg'
    },
    {
      name: 'm',
      image: '/m.png'
    },
    {
      name: 'n',
      image: '/n.jpg'
    },
    {
      name: 'ñ',
      image: '/ñ.png'
    },
    {
      name: 'o',
      image: '/o.jpg'
    },
    {
      name: 'p',
      image: '/p.png'
    },
    {
      name: 'q',
      image: '/q.png'
    },
    {
      name: 'r',
      image: '/r.png'
    },
    {
      name: 's',
      image: '/s.png'
    },
    {
      name: 't',
      image: '/t.png'
    },
    {
      name: 'u',
      image: '/u.png'
    },
    {
      name: 'v',
      image: '/v.png'
    },
    {
      name: 'w',
      image: '/w.png'
    },
    {
      name: 'x',
      image: '/x.png'
    },
    {
      name: 'y',
      image: '/y.jpg'
    },
    {
      name: 'z',
      image: '/z.png'
    }
  ]

  cardsList.forEach((card) => {
    cardsContainer.innerHTML += `
    <section id="letras-${card.name}" class="card">
          <div class="card-inner">
            <article class="card-front">
              <span>${card.name.toUpperCase()}</span>
            </article>
            <article class="card-back">
              <img src="${card.image}" alt="letra ${card.name}" />
            </article>
          </div>
        </section>`
  })
  main.appendChild(cardsContainer)
}

export const Cards = () => {
  return cards()
}
