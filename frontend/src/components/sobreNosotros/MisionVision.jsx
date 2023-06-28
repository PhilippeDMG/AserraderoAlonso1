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
          <h2 className={headline + " bordeIzq"}>Misión</h2>
          <p className={body}>
            Nuestra misión es liderar la industria como proveedores confiables de servicios de tratamiento fitosanitario, aserrado de madera y fabricación de pallets. Nos comprometemos a ofrecer soluciones seguras y de alta calidad, cumpliendo con estándares internacionales y regulaciones fitosanitarias. Valoramos la protección de los productos de nuestros clientes y facilitamos el flujo eficiente de la cadena de suministro. Establecemos relaciones sólidas y duraderas basadas en la confianza, el profesionalismo y la satisfacción mutua.
          </p>
        </div>
        <div className={style.imagenes}>
          <picture>
            <img src='/PalletsAlonso.webp' alt='' />
          </picture>
        </div>
      </div>
      <div className={style.contenedor}>
        <div className={style.imagenes}>
          <picture>
            <img src='/PalletsMaquina.webp' alt='' />
          </picture>
        </div>
        <div className={style.texto}>
          <h2 className={headline + " bordeIzq"}>Visión</h2>
          <p className={body}>
            Nuestra visión es ser reconocidos como referentes en la industria, destacando por nuestra excelencia en el tratamiento fitosanitario, aserrado de madera y fabricación de pallets. Buscamos expandir nuestro alcance globalmente y convertirnos en la opción preferida de empresas que valoran la calidad, la seguridad y la eficiencia en el manejo de sus productos. Innovamos y mejoramos continuamente nuestros procesos, adoptando prácticas sostenibles y tecnologías de vanguardia. Como empresa familiar, nos enorgullece mantener valores tradicionales de honestidad, compromiso y servicio personalizado, brindando soluciones adaptadas a las necesidades únicas de cada cliente.
          </p>
        </div>
      </div>
    </div>
  )
}
export default MisionVision
