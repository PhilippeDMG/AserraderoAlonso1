import "./Instalaciones.css"

const Instalaciones = () => {
  return (
    <div className='instalaciones'>
      <div className='esteTexto'>
        <div className='headlineLarge'>Instalaciones</div>
        <div className='bodyLarge'>
          Nuestras instalaciones eficientes y funcionales están equipadas con
          equipos especializados para el tratamiento fitosanitario y la
          fabricación de pallets. Contamos con espacios adecuados y un equipo
          capacitado para garantizar la calidad en nuestros servicios.
        </div>
      </div>
      <div className='carrusel'>
        {/* <img src='../../../public/flechaIzquierda.jpg' /> */}
        <img src='/Instalaciones.png' />
        {/* <img src='../../../public/flechaDerecha.jpg' /> */}
      </div>
    </div>
  )
}
export default Instalaciones
