import styles from "./CompanyNameContainer.module.css"
const CompanyNameContainer = () => {
  return (
    <div className={styles.inicio}>
      <div className={styles.nombreDeEmpresaParent}>
        <div className={styles.nombreDeEmpresa}>Nombre de Empresa</div>
        <div className={styles.brevesPalabrasCon}>
          breves palabras con frase o algo como esto que puede ser medianamente
          largo.
        </div>
        <div className={styles.buttonsDesktopParent}>
          <div className={styles.buttonsDesktop}>
            <img
              className={styles.buttonsDesktopChild}
              alt=''
              src='/rectangle-311.svg'
            />
            <div className={styles.enabled}>Sobre Nosotros</div>
          </div>
          <div className={styles.buttonsDesktop1}>
            <img
              className={styles.buttonsDesktopChild}
              alt=''
              src='/rectangle-3112.svg'
            />
            <div className={styles.enabled1}>Contáctenos</div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt='' src='/ellipse-30.svg' />
        <img className={styles.frameChild} alt='' src='/ellipse-29.svg' />
      </div>
    </div>
  )
}

export default CompanyNameContainer
