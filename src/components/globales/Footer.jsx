import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='empresa'>Empresa</div>
      <div className='palo'></div>
      <div className='botones'>
        <div className='boton'>Inicio</div>
        <div className='boton'>Nosotros</div>
        <div className='boton'>Servicios</div>
        <div className='boton'>Contactos</div>
      </div>
      <div className='redes'>
        <div className='iconos'>
          <img src='../../public/insta-circulo.png' />
          <img src='../../public/mail-circulo.png' />
          <img src='../../public/wpp-circulo.png' />
        </div>

        <div>ejemplo@mail.com</div>
      </div>
    </div>
  )
}

export default Footer
