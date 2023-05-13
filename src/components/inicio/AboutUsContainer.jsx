import "./AboutUsContainer.css"

const AboutUsContainer = () => {
  return (
    <div className='sobreNosotros'>
      <div className='izquierda'>
        <div className='texto'>
          <div className='displayLarge'>Sobre Nosotros</div>
          <div className='bodyLarge'>
            Somos un aserradero familiar con más de 40 años de experiencia en el
            rubro. Nos enorgullece ofrecer una amplia gama de servicios, desde
            el aserrado de madera y la construcción de pallets, hasta el
            cepillado de tablas y el tratamiento fitosanitario. Nuestro
            compromiso con la calidad y la atención meticulosa nos ha convertido
            en referentes en la industria. Valoramos las relaciones duraderas
            con nuestros clientes y nos esforzamos por superar sus expectativas
            en cada proyecto. Confíe en nuestro conocimiento y experiencia para
            brindar soluciones a medida para sus necesidades de madera.
          </div>
        </div>
        <div className='botonBorder labelLarge'>Más</div>
      </div>
      <div className='imagenes'>
        <img className='imagen1' />
        <img className='imagen2' />
      </div>
    </div>
  )
}

export default AboutUsContainer
