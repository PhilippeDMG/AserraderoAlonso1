import style from "./Contactos.module.css";
import Lema from "./Lema";
import ContactForm from "./ContactForm";

const MapComponent = (usarMapa) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13634.498795930094!2d-58.054182!3d-31.3141165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95adeb72d1c4b575%3A0x23341a822815bb52!2sEcatem!5e0!3m2!1ses-419!2sar!4v1697725436359!5m2!1ses-419!2sar"
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
    <div className={usarMapa ? style.contactenos : style.contactTwo}>
      <div className={usarMapa ? style.mapConteiner : style.inactive}>
        <MapComponent />
      </div>
      <div className={usarMapa ? style.contactLema : style.contactLemaTwo}>
        <ContactForm />
        <Lema />
      </div>
    </div>
  );
};

export default Contactos;
