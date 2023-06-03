import style from "./Portada.module.css"
import {useScreenSize} from '../../utils/useScreenSize' 
// eslint-disable-next-line react/prop-types
const Portada = ({ titulo, cuerpo, nombreImagen }) => {
  let display = useScreenSize(
    {
      small:'displaySmall',
      medium:'displayMedium',
      large:'displayLarge',
    }
  )
  let body = useScreenSize(
    {
      small:'bodySmall',
      medium:'bodyMedium',
      large:'bodyLarge',
    }
  )
  return (
    <div className={style.fondo} style={{ backgroundImage: `url(/${nombreImagen})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', backgroundRepeat: 'no-repeat'}}>
      <div className={style.texto1}>
        <div className={display}>{titulo}</div>
        <div className={body}>{cuerpo}</div>
      </div>
    </div>
  )
}

export default Portada