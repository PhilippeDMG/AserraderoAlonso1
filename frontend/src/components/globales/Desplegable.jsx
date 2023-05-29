import styles from "./Desplegable.module.css"

const Desplegable = ({ visible }) => {
  if (visible) {
    return (
      <>
        <div className={styles.desplegable}>
          <img
            className={styles.icono}
            alt=''
            src='./flechaDesplegable.svg'
          ></img>

          <ul className={styles.botones}>
            <li className={styles.boton}>
              <img className={styles.icono} alt='' src='./home.svg'></img>
              Home
            </li>
            <li className={styles.boton}>
              <img className={styles.icono} alt='' src='./malIcono.svg'></img>
              Nosotros
            </li>
            <li className={styles.boton}>
              <img className={styles.icono} alt='' src='./servicios.svg'></img>
              Servicios
            </li>
            <li className={styles.boton}>
              <img className={styles.icono} alt='' src='./contacto.svg'></img>
              Contacto
            </li>
          </ul>
        </div>
      </>
    )
  }
  return
}
export default Desplegable
