import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbars}>
      <img className={styles.iconos} alt='' src='/iconos4.svg' />
      <div className={styles.empresa}>Empresa</div>
      <div className={styles.navbarLinks}>
        <div className={styles.linkButtons2}>
          <div className={styles.home}>Servicios</div>
        </div>
        <div className={styles.linkButtons2}>
          <div className={styles.home}>Servicios</div>
        </div>
        <div className={styles.linkButtons2}>
          <div className={styles.home}>Servicios</div>
        </div>
        <div className={styles.linkButtons2}>
          <div className={styles.home}>Contacto</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
