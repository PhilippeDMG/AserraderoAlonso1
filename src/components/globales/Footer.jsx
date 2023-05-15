import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='titleLarge empresa'>Empresa</div>
      <div className='palo'></div>
      <div className='losBotones'>
        <div className='labelLarge elBoton'>Inicio</div>
        <div className='labelLarge elBoton'>Nosotros</div>
        <div className='labelLarge elBoton'>Servicios</div>
        <div className='labelLarge elBoton'>Contactos</div>
      </div>
      <div className='redes'>
        <div className='iconos'>
          <img src='/insta-circulo.svg' />
          <img src='/mail-circulo.svg' />
          <img src='/wpp-circulo.svg' />
        </div>

        <div className='labelLarge'>ejemplo@mail.com</div>
      </div>
    </div>
  )
}

export default Footer
