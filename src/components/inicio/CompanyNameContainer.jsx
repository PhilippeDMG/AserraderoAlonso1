import styles from "./CompanyNameContainer.module.css"
const CompanyNameContainer = () => {
  return (
    <div className={styles.fondo}>
      <div className={styles.contenido}>
        <div className={styles.titulo}>Nombre de la Empresa</div>
        <div className={styles.subtitulo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          condimentum ex quis massa fermentum, quis suscipit leo tincidunt.
          Aenean vel dignissim turpis.
        </div>
        <div className={styles.botones}>
          <div className={styles.botonBorder}>Sobre Nosotros</div>
          <div className={styles.botonFill}>Contáctenos</div>
        </div>
      </div>
    </div>
  )
}

export default CompanyNameContainer
