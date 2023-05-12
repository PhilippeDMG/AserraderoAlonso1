import styles from "./PortadaInicio.module.css"
import typography from "../../global.module.css"

const PortadaInicio = () => {
  return (
    <div className={styles.fondo}>
      <div className={styles.cuadro}>
        <div className={styles.texto}>
          <div className={typography.displayMedium}>Alonso TimberCraft</div>
          <div className={typography.bodyMedium}>
            Expertos en madera para soluciones confiables y duraderas.
          </div>
        </div>
        <div className={styles.contenedorBotones}>
          <div className={typography.botonBorder}>Sobre Nosotros</div>
          <div className={typography.botonFull}>Contáctenos</div>
        </div>
      </div>
    </div>
  )
}
export default PortadaInicio
