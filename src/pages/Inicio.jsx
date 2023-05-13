import Navbar from "../components/globales/Navbar"
import PortadaInicio from "../components/inicio/PortadaInicio"
import AboutUsContainer from "../components/inicio/AboutUsContainer"
import PorQueElegirnos from "../components/globales/PorQueElegirnos"
import ServicioContainer from "../components/inicio/ServicioContainer"
import Footer from "../components/globales/Footer"
import Direccion from "../components/inicio/Direccion"
import "./Inicio.css"

const Inicio = () => {
  return (
    <div className='main'>
      <Navbar />
      <PortadaInicio />
      <AboutUsContainer />
      <PorQueElegirnos />
      <ServicioContainer />
      <Direccion />
      <Footer />
    </div>
  )
}
export default Inicio
