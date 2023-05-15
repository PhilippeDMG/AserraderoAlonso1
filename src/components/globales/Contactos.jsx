import "./Contactos.css"
import Lema from "./Lema"
import ContactForm from "./ContactForm"
const Contactos = ({ usarMapa }) => {
  return (
    <div className='contactenos'>
      <img
        src='/mapa.png'
        className='miMapa'
        style={usarMapa ? null : { display: "none" }}
      />
      <ContactForm />
      <Lema />
    </div>
  )
}

export default Contactos
