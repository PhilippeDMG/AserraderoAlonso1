import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.empresaWrapper}>
        <div className={styles.empresa}>Empresa</div>
      </div>
      <div className={styles.footerChild} />
      <div className={styles.inicioParent}>
        <div className={styles.inicio}>Inicio</div>
        <div className={styles.inicio}>Nosotros</div>
        <div className={styles.inicio}>Servicios</div>
        <div className={styles.inicio}>Contacto</div>
      </div>
      <div className={styles.redesParent}>
        <img className={styles.redesIcon} alt='' src='/redes3.svg' />
        <div className={styles.inicio}>ejemplo@gmail.com</div>
      </div>
    </div>
  )
}

export default Footer
