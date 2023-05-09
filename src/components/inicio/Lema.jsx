import styles from "./Lema.module.css"
import typography from "../../global.module.css"
const Lema = () => {
  return (
    <div className={styles.lema}>
      <div className={typography.titleLarge}>Madera que inspira confianza</div>
      <div className={typography.headlineLarge}>Alonso Timbercraft</div>
      <div className={styles.tarjeta}>LOCALIZACION</div>
      <div className={`${typography.bodyLarge} ${styles.corto}`}>
        <p>Av. ejemplo 123 Provincia Argentina</p>
      </div>
      <div className={styles.palo}></div>
      <div className={typography.bodyMedium}>
        <p>¿CONSULTAS?</p>
        <p>LLÁMENOS +123 456 7890</p>
      </div>
    </div>
  )
}

export default Lema
