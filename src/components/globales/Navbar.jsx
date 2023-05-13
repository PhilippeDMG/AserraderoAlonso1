import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbars}>
      <img className={styles.iconos} alt='' src='/iconos4.svg' />
      <div className={styles.empresa}>Empresa</div>
      <ul className={styles.navbarLinks}>
        <li className={styles.linkButtons2}><div className={styles.home}>Home</div></li>
        <li className={styles.linkButtons2}><div className={styles.home}>Nosotros</div></li>
        <li className={styles.linkButtons2}><div className={styles.home}>Servicios</div></li>
        <li className={styles.linkButtons2}><div className={styles.home}>Contacto</div></li>
      </ul>
      {/* <div className={styles.navbarLinks}>
        <div className={styles.linkButtons2}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.linkButtons2}>
          <div className={styles.home}>Nosotros</div>
        </div>
        <div className={styles.linkButtons2}>
          <div className={styles.home}>Servicios</div>
        </div>
        <div className={styles.linkButtons2}>
          <div className={styles.home}>Contacto</div>
        </div>
      </div> */}
    </div>
  )
}

export default Navbar
