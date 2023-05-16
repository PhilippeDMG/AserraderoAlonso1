import style from "./PorQueElegirnos.module.css"
const PorQueElegirnos = () => {
  return (
    <div className={style.porQueElegirnos}>
      <div className={style.textoArriba}>
        <div className='headlineLarge'>Por qué elegirnos</div>
        <div className='bodyLarge'>
          Con mas de 20 años de experiencia en el sector
        </div>
      </div>
      <div className={style.micuadro}>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/account-circle21.svg'
          />
          <div className='bodyLarge'>Seguridad</div>
        </div>
        <div className={style.calidad}>
          <img className={style.accountCircleIcon} alt='' src='/eco.svg' />
          <div className='bodyLarge'>Experiencia</div>
        </div>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/health-and-safety.svg'
          />
          <div className='bodyLarge'>Confianza</div>
        </div>
        <div className={style.calidad}>
          <img className={style.accountCircleIcon} alt='' src='/apartment.svg' />
          <div className='bodyLarge'>Eficiencia</div>
        </div>
      </div>
    </div>
  )
}

export default PorQueElegirnos
