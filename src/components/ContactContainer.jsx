import styles from "./ContactContainer.module.css";
const ContactContainer = () => {
  return (
    <div className={styles.lema}>
      <div className={styles.lemaChild} />
      <div className={styles.consultasLlmenos}>¿CONSULTAS? LLÁMENOS</div>
      <div className={styles.div}>+12 345 67890123</div>
      <div className={styles.avEjemplo123Container}>
        <span className={styles.avEjemplo123Container1}>
          <p className={styles.provincia}>Av. ejemplo 123</p>
          <p className={styles.provincia}>Provincia</p>
          <p className={styles.argentina}>Argentina</p>
        </span>
      </div>
      <div className={styles.empresa}>EMPRESA</div>
      <div className={styles.lemaDeLa}>“LEMA DE LA EMPRESA”</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.localizacin}>localización</div>
      </div>
      <div className={styles.buttonsDesktop}>
        <img
          className={styles.buttonsDesktopChild}
          alt=""
          src="/rectangle-3131.svg"
        />
        <div className={styles.enabled}>Contáctenos</div>
      </div>
      <img className={styles.redonditosIcon} alt="" src="/redonditos.svg" />
      <img className={styles.lemaItem} alt="" src="/vector-11.svg" />
    </div>
  );
};

export default ContactContainer;
