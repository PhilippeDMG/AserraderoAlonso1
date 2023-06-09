import style from "./PorQueElegirnos.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
const PorQueElegirnos = () => {
  let body = useScreenSize({
    small: "bodySmall",
    medium: "bodyMedium",
    large: "bodyLarge",
  })
  let headline = useScreenSize({
    small: "headlineSmall",
    medium: "headlineMedium",
    large: "headlineLarge",
  })
  let titulo = useScreenSize({
    small: "titleSmall",
    medium: "titleMedium",
    large: "titleLarge",
  })
  return (
    <div className={style.porQueElegirnos}>
      <div className={style.textoArriba}>
        <h2 className={headline + " bordeIzq"}>
          <span>Por</span> qué elegirnos
        </h2>
        <p className={body}>
          Con más de <span>20 años</span> de experiencia en el sector
        </p>
      </div>
      <div className={style.micuadro}>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/health-and-safety.svg'
          />
          <div className={style.contenedor}>
            <div className={titulo}>Seguridad</div>
            <div className={body}>
              Protección confiable para pallets y tablas: Seguridad garantizada
              en nuestro tratamiento fitosanitario de aserradero.
            </div>
          </div>
        </div>
        <div className={style.calidad}>
          <img className={style.accountCircleIcon} alt='' src='/eco.svg' />
          <div className={style.contenedor}>
            <div className={titulo}>Experiencia</div>
            <div className={body}>
              Experiencia en cada paso: Nuestro aserradero brinda conocimientos
              sólidos en tratamientos fitosanitarios para pallets y tablas.
            </div>
          </div>
        </div>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/account-circle21.svg'
          />
          <div className={style.contenedor}>
            <div className={titulo}>Confianza</div>
            <div className={body}>
              Confíe en nuestro aserradero: Garantizamos tratamientos
              fitosanitarios confiables y de calidad para pallets y tablas.
            </div>
          </div>
        </div>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/apartment.svg'
          />
          <div className={style.contenedor}>
            <div className={titulo}>Eficiencia</div>
            <div className={body}>
              Maximice la eficiencia en su producción: Nuestro aserradero ofrece
              tratamientos fitosanitarios rápidos y eficientes para pallets y
              tablas.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PorQueElegirnos
