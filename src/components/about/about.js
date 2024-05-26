 // Crear la sección "about-us"
 export const about = () => {
 const aboutUsSection = document.createElement('section');
 aboutUsSection.id = 'about-us';
 aboutUsSection.classList.add('description');

 // Crear el párrafo de la sección "about-us"
 const aboutUsParagraph = document.createElement('p');
 aboutUsParagraph.textContent = `La lengua de signos es un idioma de esencia natural y de carácter
 visual, gestual y espacial con gramática propia que reúne todas las
 características y cumple las mismas funciones que cualquier otra
 lengua. No hay una única lengua de signos en el mundo, cada país tiene
 una o varias lenguas de signos que han evolucionado en el seno de sus
 comunidades lingüísticas, con independencia de las lenguas orales. La
 lengua de signos facilita el aprendizaje en general, así como el
 acceso a la lengua oral además de propiciar la participación e
 inclusión social. No todas las personas sordas utilizan la lengua de signos para comunicarse, pues muchas aprenden a hablar y tienen restos auditivos para oir, a veces con apoyo de ayudas técnicas. La lengua de signos suma y aquí puedes empezar a conocerla y practicarla. Aprendiendo lengua de signos, amplías tu
 forma de ver, entender y pensar el mundo.`;

 aboutUsSection.appendChild(aboutUsParagraph);

 // Agregar la sección "about-us" al cuerpo del documento
 const appElement= document.getElementById('app');
 appElement.appendChild(aboutUsSection);
 }

 export const About = () => {
  return about();
 }