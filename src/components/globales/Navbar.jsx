import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='icono' alt='' src='/home.svg' />
      <div className='bodyLarge'>Empresa</div>
      <ul className='navbarLinks'>
        <li className='linkButtons labelLarge'>Home</li>
        <li className='linkButtons labelLarge'>Nosotros</li>
        <li className='linkButtons labelLarge'>Servicios</li>
        <li className='linkButtons labelLarge'>Contactos</li>
      </ul>
    </div>
  )
}

export default Navbar
