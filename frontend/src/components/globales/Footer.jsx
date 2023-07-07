import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`${'title'} ${style.empresa}`}><span>E</span>Catem</div>
      <div className={style.palo}></div>
      <ul className={style.losBotones}>
        <li className={`${'label'} ${style.elBoton}`}><a href="/">Inicio</a></li>
        <li className={`${'label'} ${style.elBoton}`}><a href="/nosotros">Nosotros</a></li>
        <li className={`${'label'} ${style.elBoton}`}><a href="/servicios">Servicios</a></li>
        <li className={`${'label'} ${style.elBoton}`}><a href="/contacto">Contacto</a></li>
      </ul>
      <div className={style.redes}>
        <ul className={style.iconos}>
          <li><img src='/insta-circulo.svg' /></li>
          <li><img src='/mail-circulo.svg' /></li>
          <li><img src='/wpp-circulo.svg' /></li>
        </ul>
        <div className={`${'label'}`}>contact@ecatem.com.ar</div>
      </div>
    </div>
  )
}

export default Footer
