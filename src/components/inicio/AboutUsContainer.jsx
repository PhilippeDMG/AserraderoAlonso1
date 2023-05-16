import style from "./AboutUsContainer.module.css"

const AboutUsContainer = () => {
  return (
    <div className={style.sobreNosotros}>
      <div className={style.izquierda}>
        <div className={style.texto}>
          <div className={style.displayLarge}>Sobre Nosotros</div>
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
        <div className={`botonBorder labelLarge`}>Más</div>
      </div>
      <div className={style.imagenes}>
        <img className={style.imagen1} />
        <img className={style.imagen2} />
      </div>
    </div>
  )
}

export default AboutUsContainer
