import Navbar from "../../components/globales/Navbar"
import NuestrosServicios from "../../components/servicios/NuestrosServicios"
import Ejemplos from "../../components/servicios/Ejemplos"
import Contactos from "../../components/globales/Contactos"
import Footer from "../../components/globales/Footer"
import style from "./App.module.css"
import Tratamiento from "../../components/servicios/Tratamiento"
import Separador from "../../components/globales/Separador"
import WhatsAppIcon from "../../components/globales/WhatsAppIcon"

const App = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <NuestrosServicios />
      <Ejemplos />
      <Separador />
      <Tratamiento />
      <Separador />
      <Contactos usarMapa={true} />
      <Footer />
      <WhatsAppIcon />
    </div>
  )
}
export default App
