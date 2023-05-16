import style from "./CompanyNameContainer.module.css"
const CompanyNameContainer = () => {
  return (
    <div className={style.fondo}>
      <div className={style.contenido}>
        <div className='displayLarge'>Nombre de la Empresa</div>
        <div className='bodyLarge'>
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