import style from "./Contactos.module.css"
import Lema from "./Lema"
import ContactForm from "./ContactForm"
// eslint-disable-next-line react/prop-types
const Contactos = ({ usarMapa }) => {
  return (
    <div className={usarMapa? style.contactenos : style.contactTwo}>
      <div className={usarMapa? style.mapConteiner : style.inactive}>
        {/* <source
          media="(min-width: 800px)"
          srcSet="/mapa.png"
          style={usarMapa ? null : { display: "none" }}
          className={style.miMapa}
        />
        <source
          media="(min-width: 600px)"
          srcSet="/mapa.png"
          style={usarMapa ? null : { display: "none" }}
          className={style.miMapa}
        /> */}
        <div
          className={style.miMapa}
          style={usarMapa ? null : { display: "none" }}
        ></div>
      </div>
      <div className={usarMapa ? style.contactLema : style.contactLemaTwo}>
        <ContactForm />
        <Lema />
      </div>
    </div>
  )
}

export default Contactos