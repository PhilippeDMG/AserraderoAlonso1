import style from "./Contactos.module.css"
import Lema from "./Lema"
import ContactForm from "./ContactForm"


const MapComponent = (usarMapa) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54538.67864354442!2d-58.0535699!3d-31.3129362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95adebccd0789a4b%3A0x3a12cebd728c37e7!2sAserradero%20Alonso!5e0!3m2!1ses!2sar!4v1687584218181!5m2!1ses!2sar"
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