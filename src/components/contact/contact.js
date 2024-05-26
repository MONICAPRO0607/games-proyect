import './contact.css'

export const contact = () => {
  // Se crea el elemento contact
    const contactSection = document.createElement("section"); 
    contactSection.id = 'contactSection'

// Se crea el título del contact
 contactSection.innerHTML = `
 <h2>FORMULARIO DE CONTACTO</h2>

 <div class="rellenable">
   <p class="contact">
     No dudes en ponerte en contacto para cualquier sugerencia, petición,
     aclaración, ampliación de información, etc. Rellena el formulario y
     responderemos lo más pronto posible.
   </p>

   <form id="contactForm" action="">
     <div class="input-field">
       <label for="name">Nombre</label>
       <input type="text" name="name" />
     </div>

     <div class="input-field">
       <label for="email">Email</label>
       <input type="email" name="email" />
     </div>

     <div class="input-field">
       <label for="message">Mensaje</label>
       <textarea name="message" rows="5" cols="50"></textarea>
     </div>

     <div class="input-field">
          <button type="submit">Enviar</button>
      </div>
   </form>
 </div>`

// Se agregan los elementos del contact al body
document.body.appendChild(contactSection);
}


// Exportación de la caja contact para usarla en el main.js
export const Contact = () => {
  return contact();
};