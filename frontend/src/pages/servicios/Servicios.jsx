import Navbar from "../../components/globales/Navbar"
import Separador from "../../components/globales/Separador"
import NuestrosServicios from "../../components/servicios/NuestrosServicios"
import Ejemplos from "../../components/servicios/Ejemplos"
import Contactos from "../../components/globales/Contactos"
import Footer from "../../components/globales/Footer"
import style from "./Servicios.module.css"
import Tratamiento from "../../components/servicios/Tratamiento"
const Servicios = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <NuestrosServicios />
      <Separador />
      <Ejemplos />
      <Separador />
      <Tratamiento />
      <Separador />
      <Contactos usarMapa={true} />
      <Footer />
    </div>
  )
}
export default Servicios
