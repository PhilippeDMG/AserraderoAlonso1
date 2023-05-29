import style from "./Footer.module.css"
import {useScreenSize} from '../../utils/useScreenSize'
const Footer = () => {
  let title = useScreenSize({
    small: 'titleSmall',
    medium: 'titleMedium',
    large:'titleLarge'
  })
  let label = useScreenSize({
    small: 'labelSmall',
    medium: 'labelMedium',
    large:'labelLarge'
  })
  return (
    <div className={style.footer}>
      <div className={`${title} ${style.empresa}`}><span>Alonso</span> TimberCraft</div>
      <div className={style.palo}></div>
      <ul className={style.losBotones}>
        <li className={`${label} ${style.elBoton}`}><a href="/">Inicio</a></li>
        <li className={`${label} ${style.elBoton}`}><a href="/nosotros">Nosotros</a></li>
        <li className={`${label} ${style.elBoton}`}><a href="/servicios">Servicios</a></li>
        <li className={`${label} ${style.elBoton}`}><a href="/contacto">Contacto</a></li>
      </ul>
      <div className={style.redes}>
        <ul className={style.iconos}>
          <li><img src='/insta-circulo.svg' /></li>
          <li><img src='/mail-circulo.svg' /></li>
          <li><img src='/wpp-circulo.svg' /></li>
        </ul>
        <div className={`${label}`}>alonsotimbercraft@mail.com</div>
      </div>
    </div>
  )
}

export default Footer
