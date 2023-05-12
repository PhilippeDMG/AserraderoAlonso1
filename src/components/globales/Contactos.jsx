import "./Contactos.css"
import Lema from "./Lema"
const Contactos = (props) => {
  return (
    <div className='contactenos'>
      <div className='contactForm'>
        <div className='displayLarge'>Contáctenos</div>
        <input className='input' type='text' placeholder={"Nombre"} />
        <input className='input' type='text' placeholder={"Email"} />
        <input className='input' type='text' placeholder={"Título"} />
        <textarea className='text' type='text' placeholder={"Mensaje"} />
        <div className='botonBorder'>Enviar Consulta</div>
      </div>
      <Lema />
      {props.children}
    </div>
  )
}

export default Contactos
