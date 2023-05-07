import styles from "./WhyUsContainer1.module.css"
const WhyUsContainer1 = () => {
  return (
    <div className={styles.porQueElegirnos}>
      <div className={styles.textoArriba}>
        <div className={styles.titulo}>Por que elegirnos</div>
        <div className={styles.subtitulo}>
          Con mas de 20 años de experiencia en el sector bla bla
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.accountCircleParent}>
          <img
            className={styles.accountCircleIcon}
            alt=''
            src='/account-circle21.svg'
          />
          <div className={styles.personalAltamenteCualificado}>
            Personal altamente cualificado
          </div>
        </div>
        <div className={styles.accountCircleParent}>
          <img className={styles.accountCircleIcon} alt='' src='/eco.svg' />
          <div className={styles.personalAltamenteCualificado}>
            Personal altamente cualificado
          </div>
        </div>
        <div className={styles.accountCircleParent}>
          <img
            className={styles.accountCircleIcon}
            alt=''
            src='/health-and-safety.svg'
          />
          <div className={styles.personalAltamenteCualificado}>
            Personal altamente cualificado
          </div>
        </div>
        <div className={styles.accountCircleParent}>
          <img
            className={styles.accountCircleIcon}
            alt=''
            src='/apartment.svg'
          />
          <div className={styles.personalAltamenteCualificado}>
            Personal altamente cualificado
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUsContainer1
