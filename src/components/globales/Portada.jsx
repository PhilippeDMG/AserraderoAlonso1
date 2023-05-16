import style from "./Portada.module.css"

// eslint-disable-next-line react/prop-types
const Portada = ({ titulo, cuerpo, nombreImagen }) => {
  return (
    <div className={style.fondo} style={{ backgroundImage: `url(/${nombreImagen})` }}>
      <div className={style.texto1}>
        <div className='displayLarge'>{titulo}</div>
        <div className='bodyLarge'>{cuerpo}</div>
      </div>
    </div>
  )
}

export default Portada
