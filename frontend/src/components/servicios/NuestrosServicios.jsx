import style from "./NuestrosServicios.module.css"
import Portada from "../globales/Portada"
import { useScreenSize } from "../../utils/useScreenSize"
const NuestrosServicios = () => {
  let title = useScreenSize({
    small: "titleSmall",
    medium: "titleMedium",
    large: "titleLarge",
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
  return (
    <div className={style.nuestrosServicios}>
      <Portada
        titulo={"Nuestros Servicios"}
        cuerpo={
          "Tratamiento, aserrado y construcción de pallets a medida, brindando soluciones integrales para el transporte y almacenamiento eficiente"
        }
        nombreImagen={"NuestrosServiciosFondo.webp"}
      />
      <div className={style.resumen}>
        <div className={style.cartas}>
          <div className={style.miCarta}>
            <div className={title}>Tratamiento Fitosanitario</div>
            <div className={body}>
              Nuestro tratamiento térmico fitosanitario elimina plagas en embalajes, previniendo su propagación internacional. Certificado por SENASA, indispensable para aduanas.
            </div>
          </div>
          <div className={style.miCarta}>
            <div className={title}>Soluciones de Pallets</div>
            <div className={body}>
              Ofrecemos una amplia variedad de pallets de alta calidad para satisfacer tus necesidades logísticas. Adaptados a tus especificaciones y requerimientos.
            </div>
          </div>
          <div className={style.miCarta}>
            <div className={title}>Tablas Aserradas de Calidad</div>
            <div className={body}>
              Nuestras tablas aserradas son producidas con maderas seleccionadas y procesos de aserrado de última generación. Garantizamos calidad y medidas precisas para tus proyectos.
            </div>
          </div>
        </div>
        <button className={`${label} botonBorderLarge`}>
          <a href='/contacto'>Consúltenos</a>
        </button>
      </div>
    </div>
  )
}

export default NuestrosServicios
