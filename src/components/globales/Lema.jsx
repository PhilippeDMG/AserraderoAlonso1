import style from "./Lema.module.css"
import { useScreenSize } from '../../utils/useScreenSize';

const Lema = () => {

  let title = useScreenSize({
    small:'titleSmall',
    medium: 'titleMedium',
    large: 'titleLarge'
  });
  let headline = useScreenSize({
    small:'headlineSmall',
    medium: 'headlineMedium',
    large: 'headlineLarge'
  });
  let body = useScreenSize({
    small:'bodySmall',
    medium: 'bodyMedium',
    large: 'bodyLarge'
  });
  return (
    <div className={style.lema}>
      <div className={title}>Madera que inspira confianza</div>
      <div className={headline}>Alonso TimberCraft</div>
      <div className={style.tarjeta}>LOCALIZACIÓN</div>
      <div className={body}>
        Av. ejemplo 123
        <br />
        Provincia
        <br />
        Argentina
      </div>
      <div className={style.mipalo}></div>
      <div className={body}>
        <p>¿CONSULTAS?</p>
        <p>LLÁMENOS +123 456 7890</p>
      </div>
    </div>
  )
}

export default Lema
