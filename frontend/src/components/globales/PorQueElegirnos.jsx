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
  let label = useScreenSize({
    small: "labelSmall",
    medium: "labelMedium",
    large: "labelLarge",
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
            <h3 className={label} style={{margin: '0'}}>Protección confiable para palets y tablas: Seguridad garantizada en nuestro tratamiento fitosanitario de aserradero.</h3>
            <p className={body}>
              Nuestro tratamiento fitosanitario de aserradero ofrece protección confiable para pallets y tablas, asegurando la eliminación de plagas y enfermedades, y cumpliendo con los estándares internacionales. Tu seguridad y la integridad de tus productos son nuestra prioridad.
            </p>
          </div>
        </div>
        <div className={style.calidad}>
          <img className={style.accountCircleIcon} alt='' src='/eco.svg' />
          <div className={style.contenedor}>
            <div className={titulo}>Calidad</div>
            <h3 className={label} style={{margin: '0'}}>Calidad insuperable: Pallets y madera tratados térmicamente con precisión.</h3>
            <p className={body}>
              Nos enorgullece ofrecer pallets y madera tratados térmicamente con precisión. Nuestro proceso garantiza la calidad superior de nuestros productos, libre de plagas y enfermedades, lo que te brinda la confianza de contar con materiales de la más alta calidad para tus necesidades.
            </p>
          </div>
        </div>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/account-circle21.svg'
          />
          <div className={style.contenedor}>
            <div className={titulo}>Cumplimiento Regulatorio</div>
            <h3 className={label} style={{margin: '0'}}>Cumplimiento sin compromisos: Tratamiento térmico fitosanitario que cumple con las regulaciones internacionales.</h3>
            <p className={body}>
              Con nosotros, no tendrás que preocuparte por el cumplimiento regulatorio. Nuestro tratamiento térmico fitosanitario cumple con las regulaciones internacionales más estrictas, asegurando que tus pallets y madera estén en conformidad con los estándares fitosanitarios, facilitando el comercio internacional y evitando retrasos y problemas en aduanas.
            </p>
          </div>
        </div>
        <div className={style.calidad}>
          <img
            className={style.accountCircleIcon}
            alt=''
            src='/apartment.svg'
          />
          <div className={style.contenedor}>
            <div className={titulo}>Compromiso con el Medio Ambiente</div>
            <h3 className={label} style={{margin: '0'}}>Sostenibilidad en cada paso: Promoviendo la conservación forestal y el comercio responsable.</h3>
            <div className={body}>
              Nos comprometemos con la sostenibilidad en cada paso. Nuestro tratamiento térmico fitosanitario es una alternativa ecológica y respetuosa con el medio ambiente, ya que no utiliza productos químicos dañinos. Al elegirnos, apoyas la conservación forestal y el comercio responsable, contribuyendo a un futuro más verde y sostenible.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PorQueElegirnos
