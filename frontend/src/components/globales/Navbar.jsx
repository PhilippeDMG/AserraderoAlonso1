import style from "./Navbar_.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
import { useState, useEffect } from "react"

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
  useEffect(() => {
    const hide = () => {
      setVisible(false);
    };

    window.addEventListener('popstate', hide);

    return () => {
      window.removeEventListener('popstate', hide);
    };
  }, []);
  return (
    <div className={style.navbar}>
      {/* <img className={style.icono} alt='' src='/home.svg' /> */}
      <div className={body}>
        <span>Alonso</span> TimberCraft
      </div>
      <img
        className={style.burger}
        alt=''
        src={visible ? '/flechaDesplegable.svg' : '/burger.svg'}
        onClick={toggleVisible}
      />
      <ul className={visible ? style.navbarLinks + ' ' + style.active : style.navbarLinks}>
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
