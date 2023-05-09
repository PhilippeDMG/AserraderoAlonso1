import styles from "./Portada.module.css"
import typography from "../../global.module.css"

const Portada = ({ titulo, cuerpo, nombreImagen }) => {
  return (
    <div
      className={styles.fondo}
      style={{ backgroundImage: `url(../../../public/${nombreImagen})` }}
    >
      <div className={styles.texto1}>
        <div className={`${typography.displayLarge} ${styles.white}`}>
          {titulo}
        </div>
        <div className={`${typography.bodyLarge} ${styles.white}`}>
          {cuerpo}
        </div>
      </div>
    </div>
  )
}

export default Portada
