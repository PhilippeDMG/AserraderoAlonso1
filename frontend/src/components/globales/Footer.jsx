import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={style.footerCont}>
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
          <div className={style.iconos+' label'}>
            {/* <li><img src='/insta-circulo.svg'/> </li> */}
            <p><img src='/mail-circulo.svg'/> contact@ecatem.com.ar</p>
            <p><img src='/wpp-circulo.svg'/> +54 9 3454 48-9270</p>
            <p><img src='/wpp-circulo.svg'/> +54 9 3454 24-4769</p>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
          <p>Copyright © 2023</p>
          <p>G&P Dev</p>
        </div>
    </div>
  )
}

export default Footer
