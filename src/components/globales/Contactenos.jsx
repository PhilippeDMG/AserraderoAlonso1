import styles from "./Contactenos.module.css"
import typography from "../../global.module.css"
import Lema from "../inicio/Lema"
const Contactenos = () => {
  return (
    <div className={styles.contactenos}>
      <div className={styles.contactForm}>
        <div className={typography.displayLarge}>Contáctenos</div>
        <input className={styles.input} type='text' placeholder={"Nombre"} />
        <input className={styles.input} type='text' placeholder={"Email"} />
        <input className={styles.input} type='text' placeholder={"Título"} />
        <textarea className={styles.text} type='text' placeholder={"Mensaje"} />
        <div className={typography.botonBorder}>Enviar Consulta</div>
      </div>
      <Lema />
      <img src='../../../public/mapa.png' className={styles.mapa} />
    </div>
  )
}

export default Contactenos
