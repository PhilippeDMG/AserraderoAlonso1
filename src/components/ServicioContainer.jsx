import styles from "./ServicioContainer.module.css"
const ServicioContainer = () => {
  return (
    <div className={styles.cards}>
      <img className={styles.iconos} alt='' src='/iconos11.svg' />
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=''
            src='/rectangle-611@2x.png'
          />
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.frameItem}
              alt=''
              src='/rectangle-581@2x.png'
            />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.servicioParent}>
            <div className={styles.servicio}>Servicio</div>
            <div
              className={styles.loremIpsumLorem}
            >{`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  `}</div>
          </div>
          Más
        </div>
      </div>
      <img className={styles.iconos} alt='' src='/iconos21.svg' />
    </div>
  )
}

export default ServicioContainer
