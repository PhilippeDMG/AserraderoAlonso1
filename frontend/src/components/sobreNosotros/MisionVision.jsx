import style from "./MisionVision.module.css"
import { useScreenSize } from "../../utils/useScreenSize"

const MisionVision = () => {
  let headline = useScreenSize({
    small: "headlineSmall",
    medium: "headlineMedium",
    large: "headlineLarge",
  })
  let body = useScreenSize({
    small: "bodySmall",
    medium: "bodyMedium",
    large: "bodyLarge",
  })
  return (
    <div className={style.misionVision}>
      <div className={style.contenedor}>
        <div className={style.texto}>
          <div className={headline + " bordeIzq"}>Misión</div>
          <div className={body}>
            Nuestra misión es ser líderes en la industria como proveedores
            confiables de servicios de tratamiento fitosanitario, aserrado de
            madera y fabricación de pallets. Nos comprometemos a ofrecer
            soluciones seguras y de alta calidad, cumpliendo con los estándares
            internacionales y las regulaciones fitosanitarias. Buscamos
            proporcionar valor a nuestros clientes, garantizando la protección
            de sus productos y facilitando el flujo eficiente de la cadena de
            suministro. Nos esforzamos por mantener relaciones sólidas y
            duraderas con nuestros clientes, basadas en la confianza, el
            profesionalismo y la satisfacción mutua.
          </div>
        </div>
        <div className={style.imagenes}>
          <picture>
            <img src='/PalletsAlonso.webp' alt='' />
          </picture>
          <div className={style.imagen1}>
            <div className={style.imagen3}></div>
          </div>
          <div className={style.imagen2}></div>
        </div>
      </div>
      <div className={style.contenedor}>
        <div className={style.imagenes}>
          <picture>
            <img src='/PalletsMaquina.webp' alt='' />
          </picture>
          <div className={style.imagen1}>
            <div className={style.imagen3}></div>
          </div>
          <div className={style.imagen2}></div>
        </div>
        <div className={style.texto}>
          <div className={headline + " bordeIzq"}>Visión</div>
          <div className={body}>
            Nuestra visión es ser reconocidos como referentes en la industria,
            destacando por nuestra excelencia en el tratamiento fitosanitario,
            aserrado de madera y fabricación de pallets. Buscamos expandir
            nuestro alcance a nivel global, siendo la elección preferida de
            empresas que valoran la calidad, la seguridad y la eficiencia en el
            manejo de sus productos. Nos esforzamos por innovar y mejorar
            continuamente nuestros procesos, adoptando prácticas sostenibles y
            tecnologías de vanguardia. Como empresa familiar, nos enorgullece
            mantener los valores tradicionales de honestidad, compromiso y
            servicio personalizado, brindando soluciones adaptadas a las
            necesidades únicas de cada cliente.
          </div>
        </div>
      </div>
    </div>
  )
}
export default MisionVision
