import "./ContactForm.css"
import { useRef } from "react"
import { sendEmail } from "../../services/email"

const ContactForm = () => {
  const nombreRef = useRef()
  const emailRef = useRef()
  const tituloRef = useRef()
  const mensajeRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmail = {
      nombre: nombreRef.current.value,
      email: emailRef.current.value,
      titulo: tituloRef.current.value,
      mensaje: mensajeRef.current.value,
    }
    sendEmail(newEmail)
      .then(console.log("Envío exitoso"))
      .catch((error) => console.log(error))
  }
  return (
    <div className='contactForm'>
      <div className='displayLarge'>Contáctenos</div>
      <form onSubmit={handleSubmit}>
        <input
          className='input labelLarge'
          type='text'
          placeholder={"Nombre"}
          ref={nombreRef}
        />
        <input
          className='input labelLarge'
          type='text'
          placeholder={"Email"}
          ref={emailRef}
        />
        <input
          className='input labelLarge'
          type='text'
          placeholder={"Título"}
          ref={tituloRef}
        />
        <textarea
          className='text labelLarge'
          type='text'
          placeholder={"Mensaje"}
          ref={mensajeRef}
        />
        <div className='botonBorder labelLarge' type='submit'>
          Enviar Consulta
        </div>
      </form>
    </div>
  )
}

export default ContactForm
