import style from "./Portada.module.css"
// eslint-disable-next-line react/prop-types
const Portada = ({ titulo, cuerpo, nombreImagen }) => {
  return (
    <div className={style.fondo} style={{ background: `linear-gradient(rgba(1,1,1,0.4), rgba(1,1,1,0.4)), url(/${nombreImagen})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', backgroundRepeat: 'no-repeat'}}>
      <div className={style.texto1}>
        <div className={'display'}>{titulo}</div>
        <div className={'body'}>{cuerpo}</div>
      </div>
    </div>
  )
}

export default Portada
