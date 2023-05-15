import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contactForm'>
      <div className='displayLarge'>Contáctenos</div>
      <input className='input labelLarge' type='text' placeholder={"Nombre"} />
      <input className='input labelLarge' type='text' placeholder={"Email"} />
      <input className='input labelLarge' type='text' placeholder={"Título"} />
      <textarea
        className='text labelLarge'
        type='text'
        placeholder={"Mensaje"}
      />
      <div className='botonBorder labelLarge'>Enviar Consulta</div>
    </div>
  )
}

export default ContactForm
