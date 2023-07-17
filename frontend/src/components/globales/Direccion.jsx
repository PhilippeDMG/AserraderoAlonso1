import style from "./Direccion.module.css"
const MapComponent = () => {
  return (
    <iframe
      src="https://storage.googleapis.com/maps-solutions-g4shstlsrr/locator-plus/a4sm/locator-plus.html"
      width='100%'
      height='100%'
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
      title='Google Maps'
      className={style.miMapa}
    ></iframe>
  )
}
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
              <div className={"body"}>+54 9 3454 24-4769 <br />+54 9 3454 48-9270</div>
              <div className={"title"}>Email</div>
              <div className={"body"}>contact@ecatem.com.ar</div>
            </div>
          </div>
        </div>
        <a href='/contacto'>
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
  )
}
export default Direccion
