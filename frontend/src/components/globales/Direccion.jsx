import style from "./Direccion.module.css";
const MapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13634.498795930094!2d-58.054182!3d-31.3141165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95adeb72d1c4b575%3A0x23341a822815bb52!2sEcatem!5e0!3m2!1ses-419!2sar!4v1697725436359!5m2!1ses-419!2sar"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"
      className={style.miMapa}
    ></iframe>
  );
};
const Direccion = () => {
  return (
    <div className={style.direccion}>
      <div className={style.rectangulo}>
        <div className={style.eltexto}>
          <div className={"headline" + " bordeIzq"}>Dónde encontrarnos</div>
          <div className={"body"}>
            Nuestra empresa se encuentra en Osvaldo Magnasco, ubicada en
            Concordia, Entre Ríos.
          </div>
          <div className={style.lascols}>
            <div>
              <div className={"title"}>Ubicación</div>
              <div className={"body"}>
                MWPW+9F
                <br />
                Osvaldo Magnasco
                <br />
                Entre Ríos
              </div>
            </div>
            <div>
              <div className={"title"}>WhatsApp</div>
              <div className={"body"}>
                +54 9 3454 24-4769 <br />
                +54 9 3454 48-9270
              </div>
              <div className={"title"}>Email</div>
              <div className={"body"}>contact@ecatem.com.ar</div>
            </div>
          </div>
        </div>
        <a href="/contacto">
          <button
            className={`${"botonBorder"} ${"label"}`}
            style={{ maxWidth: "100px" }}
          >
            Contáctenos
          </button>
        </a>
      </div>
      <MapComponent />
    </div>
  );
};
export default Direccion;
