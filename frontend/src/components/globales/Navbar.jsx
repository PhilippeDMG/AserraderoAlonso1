import style from "./Navbar_.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
import Desplegable from "./Desplegable"
import { useState } from "react"

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }
  let body = useScreenSize({
    small: "bodySmall",
    medium: "bodyMedium",
    large: "bodyLarge",
  })

  let label = useScreenSize({
    small: "labelSmall",
    medium: "labelMedium",
    large: "labelLarge",
  })
  return (
    <div className={style.navbar}>
      {/* <img className={style.icono} alt='' src='/home.svg' /> */}
      <div className={body}>
        <span>Alonso</span> TimberCraft
      </div>
      <Desplegable visible={visible} />
      <img
        className={style.burger}
        alt=''
        src='/burger.svg'
        onClick={() => toggleVisible()}
      />
      <ul className={style.navbarLinks}>
        <li className={`${style.linkButtons} ${label}`}>
          <a href='/'>Inicio</a>
        </li>
        <li className={`${style.linkButtons} ${label}`}>
          <a href='/nosotros'>Nosotros</a>
        </li>
        <li className={`${style.linkButtons} ${label}`}>
          <a href='/servicios'>Servicios</a>
        </li>
        <li className={`${style.linkButtons} ${label}`}>
          <a href='/contacto'>Contacto</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
