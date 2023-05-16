import Navbar from "../components/globales/Navbar"
import NuestrosServicios from "../components/servicios/NuestrosServicios"
import Ejemplos from "../components/servicios/Ejemplos"
import Contactos from "../components/globales/Contactos"
import Footer from "../components/globales/Footer"
import "./Servicios.css"
const Servicios = () => {
  return (
    <div className='main'>
      <Navbar />
      <NuestrosServicios />
      <Ejemplos />
      <Contactos usarMapa={true} />

      <Footer />
    </div>
  )
}
export default Servicios
