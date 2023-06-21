import style from "./AboutUsContainer.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
const AboutUsContainer = () => {
  let body = useScreenSize({
    small: "bodySmall",
    medium: "bodyMedium",
    large: "bodyLarge",
  })
  let label = useScreenSize({
    small: "labelSmall",
    medium: "labelMedium",
    large: "labelLarge",
  })
  let headline = useScreenSize({
    small: "headlineSmall",
    medium: "headlineMedium",
    large: "headlineLarge",
  })
  let bordeIzq = useScreenSize({
    small: " bordeIzq",
    medium: " bordeIzq",
    large: " bordeIzq",
  })
  let boton = useScreenSize({
    small: "botonBorder ",
    medium: "botonBorderMedium ",
    large: "botonBorderLarge ",
  })
  return (
    <div className={style.sobreNosotros}>
      <div className={style.izquierda}>
        <div className={style.texto}>
          <h2 className={headline + bordeIzq}>
            <span>Sobre</span> Nosotros
          </h2>
          <p className={body}>
            Somos un aserradero familiar con más de 20 años de experiencia en el
            rubro. Nos enorgullece ofrecer una amplia gama de servicios, desde
            el aserrado de madera y la construcción de pallets, hasta el
            cepillado de tablas y el tratamiento fitosanitario. Nuestro
            compromiso con la calidad y la atención meticulosa nos ha convertido
            en referentes en la industria. Valoramos las relaciones duraderas
            con nuestros clientes y nos esforzamos por superar sus expectativas
            en cada proyecto. Confíe en nuestro conocimiento y experiencia para
            brindar soluciones a medida para sus necesidades de madera.
          </p>
        </div>
        <button className={boton + label} style={{ maxWidth: "100px" }}>
          <a href='/contacto'>Contáctenos</a>
        </button>
      </div>
      <div className={style.imagenes}>
        <picture>
          <img src='/PalletsMaquina.webp' alt='' />
        </picture>
        <div className={style.imagen1}></div>
        <div className={style.imagen2}></div>
      </div>
    </div>
  )
}

export default AboutUsContainer
