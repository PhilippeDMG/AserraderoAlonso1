import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`titleLarge ${style.empresa}`}>Empresa</div>
      <div className={style.palo}></div>
      <div className={style.losBotones}>
        <div className={`labelLarge ${style.elBoton}`}>Inicio</div>
        <div className={`labelLarge ${style.elBoton}`}>Nosotros</div>
        <div className={`labelLarge ${style.elBoton}`}>Servicios</div>
        <div className={`labelLarge ${style.elBoton}`}>Contactos</div>
      </div>
      <div className={style.redes}>
        <div className={style.iconos}>
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
