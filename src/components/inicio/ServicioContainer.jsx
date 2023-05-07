import styles from "./ServicioContainer.module.css"
const ServicioContainer = () => {
  return (
    <div className={styles.servicios}>
      <div className={styles.imagenes}>
        <img
          src='../../public/rectangle-611@2x.png'
          loading='lazy'
          className={styles.imagen1}
        />
        <img
          src='../../public/rectangle-581@2x.png'
          loading='lazy'
          className={styles.imagen2}
        />
      </div>
      <div className={styles.texto}>
        <div className={styles.titulo}>Servicio</div>
        <div className={styles.cuerpo}>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum
        </div>
        <div className={styles.botones}>
          <div className={styles.botonBorder}>Más</div>
          <div className={styles.botonFill}>Contáctenos</div>
        </div>
      </div>
    </div>
  )
}

export default ServicioContainer
