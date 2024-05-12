import './cards.css'

// Creación de la caja cards
export const cards = () => {
  // Se crea el elemento de las tarjetas
  const cards = document.createElement("cards");

  // Se recoge la caja padre main para almacenar las letras
  const main = document.getElementById('app');

  const cardsContainer =  document.createElement('section');
  cardsContainer.id = 'cards';
  cardsContainer.classList.add('cardsContainer');

  const cardsList = [
    {
      name:"a",
      image: "./public/assets/a.png"
    },
    {
      name:"b",
      image: "./public/assets/b.png"
    },
    {
      name:"c",
      image: "./public/assets/c.png"
    },
    {
      name:"d",
      image: "./public/assets/d.png"
    },
    {
      name:"e",
      image: "./public/assets/e.png"
    },
    {
      name:"f",
      image: "./public/assets/f.png"
    },
    {
      name:"g",
      image: "./public/assets/g.png"
    },
    {
      name:"h",
      image: "./public/assets/h.png"
    },
    {
      name:"i",
      image: "./public/assets/i.jpg"
    },
    {
      name:"j",
      image: "./public/assets/j.png"
    },
    {
      name:"k",
      image: "./public/assets/k.png"
    },
    {
      name:"l",
      image: "./public/assets/l.jpg"
    },
    {
      name:"m",
      image: "./public/assets/m.png"
    },
    {
      name:"n",
      image: "./public/assets/n.jpg"
    },
    {
      name:"ñ",
      image: "./public/assets/ñ.png"
    },
    {
      name:"o",
      image: "./public/assets/o.jpg"
    },
    {
      name:"p",
      image: "./public/assets/p.png"
    },
    {
      name:"q",
      image: "./public/assets/q.jpg"
    },
    {
      name:"r",
      image: "./public/assets/r.png"
    },
    {
      name:"s",
      image: "./public/assets/s.png"
    },
    {
      name:"t",
      image: "./public/assets/t.png"
    },
    {
      name:"u",
      image: "./public/assets/u.png"
    },
    {
      name:"v",
      image: "./public/assets/v.png"
    },
    {
      name:"w",
      image: "./public/assets/w.png"
    },
    {
      name:"x",
      image: "./public/assets/x.png"
    },
    {
      name:"y",
      image: "./public/assets/y.jpg"
    },
    {
      name:"z",
      image: "./public/assets/z.png"
    },
  ]

  cardsList.forEach(card => {
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
  });
  main.appendChild(cardsContainer);
}

export const Cards = () => {
  return cards();
};