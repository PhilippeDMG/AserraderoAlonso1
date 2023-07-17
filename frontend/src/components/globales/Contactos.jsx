import style from "./Contactos.module.css"
import Lema from "./Lema"
import ContactForm from "./ContactForm"


const MapComponent = (usarMapa) => {
  return (
    <iframe
      src="https://storage.googleapis.com/maps-solutions-g4shstlsrr/locator-plus/a4sm/locator-plus.html"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
      className={style.miMapa}
      style={usarMapa ? null : { display: "none" }}
    ></iframe>
  );
};
// eslint-disable-next-line react/prop-types
const Contactos = ({ usarMapa }) => {
  return (
    <div className={usarMapa? style.contactenos : style.contactTwo}>
      <div className={usarMapa? style.mapConteiner : style.inactive}>
        <MapComponent />
      </div>
      <div className={usarMapa ? style.contactLema : style.contactLemaTwo}>
        <ContactForm />
        <Lema />
      </div>
    </div>
  )
}

export default Contactos