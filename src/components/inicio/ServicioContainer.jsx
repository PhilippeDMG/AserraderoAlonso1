import styles from "./ServicioContainer.module.css"

const ServicioContainer = () => {
  return (
    <div className={styles.servicios}>
      <div className={styles.carrusel}>
        <img src='../../public/ServiciosInicio.png' loading='lazy' />
      </div>
      <div className={styles.texto}>
        <div className='displayLarge'>Tratamiento fitosanitario</div>
        <div className='bodyLarge'>
          El tratamiento fitosanitario es un conjunto de técnicas utilizadas en
          la agricultura para proteger las plantas y cultivos de plagas,
          enfermedades y malezas. Involucra la aplicación de productos químicos,
          biológicos o métodos de control integrado para mantener la salud de
          las plantas y garantizar una producción agrícola eficiente y
          sostenible.
        </div>
        <div className={styles.botones}>
          <div className='botonBorder'>Más</div>
          <div className='botonFull'>Contáctenos</div>
        </div>
      </div>
    </div>
  )
}

export default ServicioContainer
