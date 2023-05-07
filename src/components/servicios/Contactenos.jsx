import styles from "./Contactenos.css"
import typography from "../../global.css"
import Lema from "../components/inicio/Lema"
const Contactenos = () => {
  return (
    <div className={styles.contactenos}>
      <div className={styles.contactForm}>
        <div className={typography.displayLarge}>Contáctenos</div>
        <div className={styles.input}>Nombre</div>
        <div className={styles.input}>Email</div>
        <div className={styles.input}>Título</div>
        <div className={styles.text}>Mensaje</div>
        <div className={styles.botonBorder}>Enviar Consulta</div>
      </div>
      <Lema />
      <div className={styles.mapa}></div>
    </div>
  )
}

export default Contactenos
