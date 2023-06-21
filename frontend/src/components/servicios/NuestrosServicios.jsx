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
        nombreImagen={"tresPalletsConFilm.webp"}
      />
      <div className={style.resumen}>
        <div className={style.cartas}>
          <div className={style.miCarta}>
            <div className={title}>Tratamiento fitosanitario de pallets</div>
            <div className={body}>
              Eliminación de plagas mediante calor controlado para garantizar la
              bioseguridad en el transporte y almacenamiento.
            </div>
          </div>
          <div className={style.miCarta}>
            <div className={title}>Tratamiento fitosanitario de tablas</div>
            <div className={body}>
              Proceso de calentamiento controlado para eliminar plagas y
              organismos nocivos de las tablas de madera, asegurando su calidad
              y cumplimiento fitosanitario.
            </div>
          </div>
          <div className={style.miCarta}>
            <div className={title}>Fabricación de pallets tratados</div>
            <div className={body}>
              Fabricación de estructuras de madera para facilitar el transporte
              y almacenamiento eficiente de mercancías.
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
