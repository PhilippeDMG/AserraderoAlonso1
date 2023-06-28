import style from "./Direccion.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
const MapComponent = () => {
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
    ></iframe>
  );
};
const Direccion = () => {
  let headline = useScreenSize({
    small: "headlineSmall",
    medium: "headlineMedium",
    large: "headlineLarge",
  })
  let body = useScreenSize({
    small: "bodySmall",
    medium: "bodyMedium",
    large: "bodyLarge",
  })
  let title = useScreenSize({
    small: "titleSmall",
    medium: "titleMedium",
    large: "titleLarge",
  })
  let label = useScreenSize({
    small: "labelSmall",
    medium: "labelMedium",
    large: "labelLarge",
  })
  let button = useScreenSize({
    small: "botonBorder",
    medium: "botonBorderLarge",
    large: "botonBorderLarge",
  })
  return (
    <div className={style.direccion}>
      <div className={style.rectangulo}>
        <div className={style.eltexto}>
          <div className={headline + " bordeIzq"}>Dónde encontrarnos</div>
          <div className={body}>
            Nuestra empresa se encuentra en Osvaldo Magnasco, ubicada en
            Concordia, Entre Ríos.
          </div>
          <div className={style.lascols}>
            <div>
              <div className={title}>Ubicación</div>
              <div className={body}>
                MWPW+9F
                <br />
                Osvaldo Magnasco
                <br />
                Entre Ríos
              </div>
            </div>
            <div>
              <div className={title}>WhatsApp</div>
              <div className={body}>+54 9 345 403 2282 </div>
              <div className={title}>Email</div>
              <div className={body}>alonsotimbercraft@gmail.com</div>
            </div>
          </div>
        </div>
        <a href='/contacto'>
          <button
            className={`${button} ${label}`}
            style={{ maxWidth: "100px" }}
          >
            Contáctenos
          </button>
        </a>
      </div>
      <MapComponent />
    </div>
  )
}
export default Direccion
