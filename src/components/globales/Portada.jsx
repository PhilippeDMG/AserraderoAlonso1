import "./Portada.css"

const Portada = ({ titulo, cuerpo, nombreImagen }) => {
  return (
    <div className='fondo' style={{ backgroundImage: `url(/${nombreImagen})` }}>
      <div className='texto1'>
        <div className='displayLarge'>{titulo}</div>
        <div className='bodyLarge'>{cuerpo}</div>
      </div>
    </div>
  )
}

export default Portada
