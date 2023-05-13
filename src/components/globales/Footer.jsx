import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='titleLarge empresa'>Empresa</div>
      <div className='palo'></div>
      <div className='botones'>
        <div className='labelLarge'>Inicio</div>
        <div className='labelLarge'>Nosotros</div>
        <div className='labelLarge'>Servicios</div>
        <div className='labelLarge'>Contactos</div>
      </div>
      <div className='redes'>
        <div className='iconos'>
          <img src='/insta-circulo.png' />
          <img src='/mail-circulo.png' />
          <img src='/wpp-circulo.png' />
        </div>

        <div className='labelLarge'>ejemplo@mail.com</div>
      </div>
    </div>
  )
}

export default Footer
