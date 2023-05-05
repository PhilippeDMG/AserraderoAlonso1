import styles from "./AboutUsContainer.module.css";
const AboutUsContainer = () => {
  return (
    <div className={styles.sobreNosotros}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.sobreNosotrosParent}>
            <div className={styles.sobreNosotros1}>Sobre Nosotros</div>
            <div
              className={styles.loremIpsumLorem}
            >{`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum `}</div>
          </div>
          <div className={styles.buttonsDesktopWrapper}>
            <div className={styles.buttonsDesktop}>
              <img
                className={styles.buttonsDesktopChild}
                alt=""
                src="/rectangle-3121.svg"
              />
              <div className={styles.enabled}>Más</div>
            </div>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-612@2x.png"
          />
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-582@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
