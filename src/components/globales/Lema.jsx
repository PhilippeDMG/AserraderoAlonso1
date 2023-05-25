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
  let label = useScreenSize({
    small:'labelSmall',
    medium: 'labelMedium',
    large: 'labelLarge'
  });
  return (
    <div className={style.lema}>
      <h4 className={title}>Madera que inspira confianza</h4>
      <h2 className={headline}><span>Alonso</span> TimberCraft</h2>
      <div className={`${style.tarjeta} ${label}`}>Localización:</div>
      <div className={body}>
        Osvaldo Magnasco
        <br />
        Concordia, Entre Ríos, Argentina
      </div>
      <div className={style.mipalo}></div>
      <div className={body}>
        <p>¿Consultas? Llámenos </p>
        <li>+54 9 345 403 2282</li>
      </div>
    </div>
  )
}

export default Lema
