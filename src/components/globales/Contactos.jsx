import style from "./Contactos.module.css"
import Lema from "./Lema"
import ContactForm from "./ContactForm"
// eslint-disable-next-line react/prop-types
const Contactos = ({ usarMapa }) => {
  return (
    <div className={style.contactenos}>
      <img
        src='/mapa.png'
        className={style.miMapa}
        style={usarMapa ? null : { display: "none" }}
      />
      <ContactForm />
      <Lema />
    </div>
  )
}

export default Contactos
