import styles from "./AboutUsContainer.module.css"
import typography from "../../global.css"

const AboutUsContainer = () => {
  return (
    <div className={styles.sobreNosotros}>
      <div className={styles.izquierda}>
        <div className={styles.texto}>
          <div className={typography.displayLarge}>Sobre Nosotros</div>
          <div className={styles.cuerpo}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum
          </div>
        </div>
        <div className={styles.botonBorder}>Más</div>
      </div>
      <div className={styles.imagenes}>
        <img className={styles.imagen1} />
        <img className={styles.imagen2} />
      </div>
    </div>
  )
}

export default AboutUsContainer
