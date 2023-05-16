import style from "./PortadaInicio.module.css"

const PortadaInicio = () => {
  return (
    <div className={style.fondo}>
      <div className={style.cuadro}>
        <div className={style.estediv}>
          <div className='displayMedium'>Alonso TimberCraft</div>
          <div className='bodyMedium'>
            Expertos en madera para soluciones confiables y duraderas.
          </div>
        </div>
        <div className={style.contenedorBotones}>
          <div className='botonBorder labelLarge'>Sobre Nosotros</div>
          <div className='botonFull labelLarge'>Contáctenos</div>
        </div>
      </div>
    </div>
  )
}
export default PortadaInicio
