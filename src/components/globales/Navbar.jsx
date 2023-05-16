import style from "./Navbar_.module.css"
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img className={style.icono} alt='' src='/home.svg' />
      <div className='bodyLarge'>Alonso TimberCraft</div>
      <img className={style.burger} alt='' src='/burger.svg'></img>
      <ul className='navbarLinks'>
        <li className={`${style.linkButtons} labelLarge`}>Home</li>
        <li className={`${style.linkButtons} labelLarge`}>Nosotros</li>
        <li className={`${style.linkButtons} labelLarge`}>Servicios</li>
        <li className={`${style.linkButtons} labelLarge`}>Contactos</li>
      </ul>
    </div>
  )
}

export default Navbar
