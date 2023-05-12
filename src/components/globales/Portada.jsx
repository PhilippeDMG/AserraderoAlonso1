import "./Portada.css"

const Portada = ({ titulo, cuerpo, nombreImagen }) => {
  return (
    <div
      className='fondo'
      style={{ backgroundImage: `url(../../../public/${nombreImagen})` }}
    >
      <div className='texto1'>
        <div className='displayLarge white'>{titulo}</div>
        <div className='bodyLarge white'>{cuerpo}</div>
      </div>
    </div>
  )
}

export default Portada
