import "./NuestrosServicios.css"
import Portada from "../globales/Portada"
const NuestrosServicios = () => {
  return (
    <div className='nuestrosServicios'>
      <Portada
        titulo={"Nuestros Servicios"}
        cuerpo={
          "Tratamiento, aserrado y construcción de pallets a medida, brindando soluciones integrales para el transporte y almacenamiento eficiente"
        }
        nombreImagen={"NuestrosServiciosFondo.png"}
      />
      <div className='resumen'>
        <div className='cartas'>
          <div className='miCarta'>
            <div className='titleLarge'>
              Tratamiento fitosanitario de pallets
            </div>
            <div className='bodyLarge'>
              Eliminación de plagas mediante calor controlado para garantizar la
              bioseguridad en el transporte y almacenamiento.
            </div>
          </div>
          <div className='miCarta'>
            <div className='titleLarge'>
              Tratamiento fitosanitario de tablas
            </div>
            <div className='bodyLarge'>
              Proceso de calentamiento controlado para eliminar plagas y
              organismos nocivos de las tablas de madera, asegurando su calidad
              y cumplimiento fitosanitario.
            </div>
          </div>
          <div className='miCarta'>
            <div className='titleLarge'>Fabricación de pallets tratados</div>
            <div className='bodyLarge'>
              Fabricación de estructuras de madera para facilitar el transporte
              y almacenamiento eficiente de mercancías.
            </div>
          </div>
        </div>
        <div className='botonBorder'>Consúltenos</div>
      </div>
    </div>
  )
}

export default NuestrosServicios
