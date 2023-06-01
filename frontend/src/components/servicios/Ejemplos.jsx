import style from "./Ejemplos.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
const Ejemplos = () => {
  let headline = useScreenSize(
    {
      small: 'headlineSmall',
      medium: 'headlineMedium',
      large: 'headlineLarge',
    }
  )
  let body = useScreenSize(
    {
      small: 'bodySmall',
      medium: 'bodyMedium',
      large: 'bodyLarge',
    }
  )
  let label = useScreenSize(
    {
      small: 'labelSmall',
      medium: 'labelMedium',
      large: 'labelLarge',
    }
  )
  let bordeIzq = useScreenSize(
    {
      small: 'bordeIzq',
      medium: 'bordeIzq',
      large: 'bordeIzq'
    }
  )
  return (
    <div className={style.ejemplos}>
      <div className={style.carta}>
        <div className={style.texto}>
          <div className={`${headline} ${bordeIzq}`}>
          <span>Tratamiento</span> fitosanitario de pallets
          </div>
          <div className={body}>
            Nuestro servicio de tratamiento fitosanitario de pallets es una
            etapa esencial en la cadena logística y comercial. Mediante un
            proceso cuidadoso de calentamiento controlado, eliminamos plagas y
            organismos dañinos que puedan estar presentes en la madera.
            Cumplimos con las normativas fitosanitarias internacionales,
            asegurando que los pallets tratados cumplan con los requisitos para
            el comercio internacional. Este proceso garantiza la bioseguridad,
            evitando la propagación de enfermedades y plagas forestales, y
            protegiendo la integridad de los productos transportados. Además,
            los pallets tratados son más resistentes al deterioro, prolongando
            su vida útil y asegurando un rendimiento confiable en el manejo y
            almacenamiento de mercancías.
          </div>
          <button className={`botonBorderLarge ${label}`}><a href="/contacto">Consúltenos</a></button>
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
            <img src="/palletsAdentroDeHorno.jpeg" alt="" className={style.imgServ}/>
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
            <img src="/paquetesTablasCamion.jpeg" alt="" className={style.imgServ}/>
          </picture>
        </div>
        <div className={style.texto}>
          <div className={`${headline} ${bordeIzq}`}>
          <span>Tratamiento</span> fitosanitario de tablas
          </div>
          <div className={body}>
            Nuestro servicio de tratamiento fitosanitario de tablas de madera es
            esencial para garantizar su calidad, durabilidad y cumplimiento
            fitosanitario. A través de un proceso de calentamiento controlado,
            eliminamos eficazmente plagas, insectos y organismos dañinos que
            puedan comprometer la integridad de las tablas. Esto asegura que las
            tablas estén libres de riesgos biológicos y sean aptas para su uso
            en diversos proyectos de construcción, mueblería y otras
            aplicaciones industriales. Con nuestro tratamiento fitosanitario,
            las tablas cumplen con los estándares internacionales, brindando
            tranquilidad a nuestros clientes y garantizando la conformidad con
            las regulaciones fitosanitarias.
          </div>
          <button className={`botonBorderLarge ${label}`}><a href="/contacto">Consúltenos</a></button>
        </div>
      </div>
      <div className={style.carta}>
        <div className={style.texto}>
          <div className={`${headline} ${bordeIzq}`}><span>Fabricación</span> de pallets tratados</div>
          <div className={body}>
            Nuestro servicio de fabricación de pallets tratados es la solución
            perfecta para sus necesidades de transporte y almacenamiento
            seguros. Utilizando madera sometida a un riguroso proceso de
            tratamiento fitosanitario, construimos pallets duraderos y
            confiables que cumplen con los estándares de calidad y bioseguridad
            requeridos para el comercio internacional. Nuestro equipo de
            artesanos altamente capacitados se encarga de fabricar pallets a
            medida, adaptándolos a sus especificaciones y requisitos únicos. Con
            nuestra fabricación de pallets tratados, garantizamos la protección
            de sus productos y la eficiencia en su cadena de suministro,
            brindando soluciones confiables y seguras para su negocio.
          </div>
          <button className={`botonBorderLarge ${label}`}><a href="/contacto">Consúltenos</a></button>
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
            <img src="/tresPalletsConFilm.jpeg" alt="" className={style.imgServ}/>
          </picture>
        </div>
      </div>
    </div>
  )
}

export default Ejemplos
