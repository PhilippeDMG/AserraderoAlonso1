import style from "./Direccion.module.css"
import { useScreenSize } from "../../utils/useScreenSize"

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
    </div>
  )
}
export default Direccion
