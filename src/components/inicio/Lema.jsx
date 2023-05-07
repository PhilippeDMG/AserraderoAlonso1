import styles from "./Lema.css"
const Lema = () => {
  return (
    <div className={styles.lema}>
      <div className={styles.subtitulo}>"LEMA DE LA EMPRESA"</div>
      <div className={styles.empresa}>EMPRESA</div>
      <div className={styles.tarjeta}>LOCALIZACION</div>
      <div className={`${styles.texto} ${styles.corto}`}>
        <p>Av. ejemplo 123 Provincia Argentina</p>
      </div>
      <div className={styles.palo}></div>
      <div className={styles.texto}>
        <p>¿CONSULTAS? LLÁMENOS +123 456 7890</p>
      </div>
      <div className={styles.redes}>
        <img src='../../public/insta-circulo.png' />
        <img src='../../public/mail-circulo.png' />
        <img src='../../public/wpp-circulo.png' />
      </div>
    </div>
  )
}

export default Lema
