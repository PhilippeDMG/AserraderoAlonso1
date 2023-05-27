import style from "./Navbar_.module.css"
import {useScreenSize} from '../../utils/useScreenSize'
const Navbar = () => {
  let body = useScreenSize(
    {
      small: 'bodySmall',
      medium: 'bodyMedium',
      large: 'bodyLarge'
    }
  )
    
  let label = useScreenSize(
    {
      small: 'labelSmall',
      medium: 'labelMedium',
      large: 'labelLarge'
    }
  )
  return (
    <div className={style.navbar}>
      {/* <img className={style.icono} alt='' src='/home.svg' /> */}
      <div className={body}><span>Alonso</span> TimberCraft</div>
      <img className={style.burger} alt='' src='/burger.svg'></img>
      <ul className={style.navbarLinks}>
        <li className={`${style.linkButtons} ${label}`}>Home</li>
        <li className={`${style.linkButtons} ${label}`}>Nosotros</li>
        <li className={`${style.linkButtons} ${label}`}>Servicios</li>
        <li className={`${style.linkButtons} ${label}`}>Contactos</li>
      </ul>
    </div>
  )
}

export default Navbar
