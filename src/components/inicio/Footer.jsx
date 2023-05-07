import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.empresa}>Empresa</div>
      <div className={styles.palo}></div>
      <div className={styles.botones}>
        <div className={styles.boton}>Inicio</div>
        <div className={styles.boton}>Nosotros</div>
        <div className={styles.boton}>Servicios</div>
        <div className={styles.boton}>Contactos</div>
      </div>
      <div className={styles.redes}>
        <div className={styles.iconos}>
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
