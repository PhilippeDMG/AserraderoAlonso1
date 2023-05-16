import "./CompanyNameContainer.module.css"
const CompanyNameContainer = () => {
  return (
    <div className='fondo'>
      <div className='contenido'>
        <div className='titulo'>Nombre de la Empresa</div>
        <div className='subtitulo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          condimentum ex quis massa fermentum, quis suscipit leo tincidunt.
          Aenean vel dignissim turpis.
        </div>
        <div className='botones'>
          <div className='botonBorder'>Sobre Nosotros</div>
          <div className='botonFill'>Contáctenos</div>
        </div>
      </div>
    </div>
  )
}

export default CompanyNameContainer