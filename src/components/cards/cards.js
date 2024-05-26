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
      image: '/assets/a.png'
    },
    {
      name: 'b',
      image: '/assets/b.png'
    },
    {
      name: 'c',
      image: '/assets/c.png'
    },
    {
      name: 'd',
      image: '/assets/d.png'
    },
    {
      name: 'e',
      image: '/assets/e.png'
    },
    {
      name: 'f',
      image: '/assets/f.png'
    },
    {
      name: 'g',
      image: '/assets/g.png'
    },
    {
      name: 'h',
      image: '/assets/h.png'
    },
    {
      name: 'i',
      image: '/assets/i.jpg'
    },
    {
      name: 'j',
      image: '/assets/j.png'
    },
    {
      name: 'k',
      image: '/assets/k.png'
    },
    {
      name: 'l',
      image: '/assets/l.jpg'
    },
    {
      name: 'm',
      image: '/assets/m.png'
    },
    {
      name: 'n',
      image: '/assets/n.jpg'
    },
    {
      name: 'ñ',
      image: '/assets/ñ.png'
    },
    {
      name: 'o',
      image: '/assets/o.jpg'
    },
    {
      name: 'p',
      image: '/assets/p.png'
    },
    {
      name: 'q',
      image: '/assets/q.png'
    },
    {
      name: 'r',
      image: '/assets/r.png'
    },
    {
      name: 's',
      image: '/assets/s.png'
    },
    {
      name: 't',
      image: '/assets/t.png'
    },
    {
      name: 'u',
      image: '/assets/u.png'
    },
    {
      name: 'v',
      image: '/assets/v.png'
    },
    {
      name: 'w',
      image: '/assets/w.png'
    },
    {
      name: 'x',
      image: '/assets/x.png'
    },
    {
      name: 'y',
      image: '/assets/y.jpg'
    },
    {
      name: 'z',
      image: '/assets/z.png'
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
