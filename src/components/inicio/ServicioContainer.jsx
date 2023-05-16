import style from "./ServicioContainer.module.css"

const ServicioContainer = () => {
  return (
    <div className={style.servicios}>
      <div className={style.carrusel}>
        <img src='ServiciosInicio.png' loading='lazy' />
      </div>
      <div className={style.mitexto}>
        <div className='displayLarge'>Tratamiento fitosanitario</div>
        <div className='bodyLarge'>
          El tratamiento fitosanitario es un conjunto de técnicas utilizadas en
          la agricultura para proteger las plantas y cultivos de plagas,
          enfermedades y malezas. Involucra la aplicación de productos químicos,
          biológicos o métodos de control integrado para mantener la salud de
          las plantas y garantizar una producción agrícola eficiente y
          sostenible.
        </div>
        <div className={style.botones}>
          <div className='botonBorder labelLarge'>Más</div>
          <div className='botonFull labelLarge'>Contáctenos</div>
        </div>
      </div>
    </div>
  )
}

export default ServicioContainer
