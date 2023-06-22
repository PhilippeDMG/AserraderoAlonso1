import style from "./Ejemplos.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
const Ejemplos = () => {
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
  let label = useScreenSize({
    small: "labelSmall",
    medium: "labelMedium",
    large: "labelLarge",
  })
  let bordeIzq = useScreenSize({
    small: "bordeIzq",
    medium: "bordeIzq",
    large: "bordeIzq",
  })
  return (
    <div className={style.ejemplos}>
      <div className={style.carta}>
        <div className={style.texto}>
          <div className={`${headline} ${bordeIzq}`}>
            <span>Tratamiento</span> fitosanitario
          </div>
          <div className={body}>
            Nuestro servicio de tratamiento térmico fitosanitario garantiza la eliminación eficaz de plagas presentes en los embalajes, evitando su propagación en los envíos internacionales. Utilizamos métodos térmicos o químicos, avalados por las normativas fitosanitarias internacionales. Todos los embalajes tratados son marcados con sellos de certificación y emitimos un certificado avalado por SENASA, que es un requisito fundamental para las aduanas de cualquier país de destino. Con nuestra solución de tratamiento fitosanitario, puedes confiar en un proceso seguro y legalmente respaldado.
          </div>
          <button className={`botonBorderLarge ${label}`}>
            <a href='/contacto'>Consúltenos</a>
          </button>
        </div>
        <div className={style.imgContainer}>
          <div className={style.fig1}></div>
          <div className={style.fig2}></div>
          <picture>
            {/* <source
              media="(min-width: 800px)"
              srcSet="/mapa.png"
              style={usarMapa ? null : { display: "none" }}
              className={style.imgServ}
            />
            <source
              media="(min-width: 600px)"
              srcSet="/mapa.png"
              style={usarMapa ? null : { display: "none" }}
              className={style.imgServ}
            /> */}
            <img
              src='/palletsAdentroDeHorno.webp'
              alt=''
              className={style.imgServ}
            />
          </picture>
        </div>
      </div>
      <div className={style.carta}>
        <div className={style.imgContainer}>
          <div className={`${style.fig1} ${style.mod1}`}></div>
          <div className={style.fig2}></div>
          <picture>
            {/* <source
              media="(min-width: 800px)"
              srcSet="/mapa.png"
              style={usarMapa ? null : { display: "none" }}
              className={style.imgServ}
            />
            <source
              media="(min-width: 600px)"
              srcSet="/mapa.png"
              style={usarMapa ? null : { display: "none" }}
              className={style.imgServ}
            /> */}
            <img
              src='/paquetesTablasCamion.webp'
              alt=''
              className={style.imgServ}
            />
          </picture>
        </div>
        <div className={style.texto}>
          <div className={`${headline} ${bordeIzq}`}>
            <span>Soluciones</span> de Pallets
          </div>
          <div className={body}>
            En nuestra empresa, ofrecemos una amplia gama de soluciones de pallets para cubrir todas tus necesidades logísticas. Nuestros pallets están diseñados y fabricados con los más altos estándares de calidad, asegurando su resistencia y durabilidad. Además, contamos con opciones personalizadas para adaptarnos a tus especificaciones y requerimientos específicos. Ya sea que necesites pallets estándar, pallets de exportación o soluciones a medida, nuestro equipo se encargará de brindarle productos confiables y de calidad para optimizar tu cadena de suministro.
          </div>
          <button className={`botonBorderLarge ${label}`}>
            <a href='/contacto'>Consúltenos</a>
          </button>
        </div>
      </div>
      <div className={style.carta}>
        <div className={style.texto}>
          <div className={`${headline} ${bordeIzq}`}>
            <span>Tablas Aserradas</span> de Calidad
          </div>
          <div className={body}>
            Nuestras tablas aserradas son producidas utilizando maderas seleccionadas y los procesos de aserrado más avanzados. Nos enorgullece ofrecer tablas de alta calidad, con medidas precisas y acabados impecables, que cumplen con tus estándares más exigentes. Ya sea para proyectos de construcción, fabricación de muebles o cualquier otra aplicación, nuestras tablas aserradas son una elección confiable. Además, podemos adaptar las dimensiones y características de las tablas según tus necesidades específicas. Confía en nuestra experiencia y calidad para obtener el material perfecto para tu proyecto.
          </div>
          <button className={`botonBorderLarge ${label}`}>
            <a href='/contacto'>Consúltenos</a>
          </button>
        </div>
        <div className={style.imgContainer}>
          <div className={style.fig1}></div>
          <div className={`${style.fig2} ${style.mod2}`}></div>
          <picture>
            {/* <source
              media="(min-width: 800px)"
              srcSet="/mapa.png"
              style={usarMapa ? null : { display: "none" }}
              className={style.imgServ}
            />
            <source
              media="(min-width: 600px)"
              srcSet="/mapa.png"
              style={usarMapa ? null : { display: "none" }}
              className={style.imgServ}
            /> */}
            <img
              src='/tresPalletsConFilm.webp'
              alt=''
              className={style.imgServ}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default Ejemplos
