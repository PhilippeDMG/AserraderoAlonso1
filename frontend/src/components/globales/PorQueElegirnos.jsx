import style from "./PorQueElegirnos.module.css"
import {useScreenSize} from '../../utils/useScreenSize'
const PorQueElegirnos = () => {
  let body = useScreenSize(
    {
      small: 'bodySmall',
      medium: 'bodyMedium',
      large: 'bodyLarge'
    }
  )
  let headline = useScreenSize(
    {
      small: 'headlineSmall',
      medium: 'headlineMedium',
      large: 'headlineLarge'
    }
  )
  return (
    <div className={style.porQueElegirnos}>
      <div className={style.textoArriba}>
        <h2 className={headline + ' bordeIzq'}><span>Por</span> qué elegirnos</h2>
        <p className={body}>
          Con mas de <span>20 años</span> de experiencia en el sector
        </p>
      </div>
      <div className={style.micuadro}>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/account-circle21.svg'
          />
          <div className={body}>Seguridad</div>
        </div>
        <div className={style.calidad}>
          <img className={style.accountCircleIcon} alt='' src='/eco.svg' />
          <div className={body}>Experiencia</div>
        </div>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/health-and-safety.svg'
          />
          <div className={body}>Confianza</div>
        </div>
        <div className={style.calidad}>
          <img className={style.accountCircleIcon} alt='' src='/apartment.svg' />
          <div className={body}>Eficiencia</div>
        </div>
      </div>
    </div>
  )
}

export default PorQueElegirnos