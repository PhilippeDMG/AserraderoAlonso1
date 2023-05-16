import Portada from "../components/globales/Portada"
import Navbar from "../components/globales/Navbar"
import Footer from "../components/globales/Footer"
import MisionVision from "../components/sobreNosotros/MisionVision"
import Instalaciones from "../components/sobreNosotros/Instalaciones"
import PorQueElegirnos from "../components/globales/PorQueElegirnos"
import Contactos from "../components/globales/Contactos"
import "./SobreNosotros.css"
const SobreNosotros = () => {
  return (
    <div className='main'>
      <Navbar />
      <Portada
        titulo={"Sobre Nosotros"}
        cuerpo={
          "Pasión por la madera, calidad en cada detalle. Descubrí quiénes somos y lo que hacemos"
        }
        nombreImagen={"SobreNosotrosPortada.png"}
      />
      <MisionVision />
      <Instalaciones />
      <PorQueElegirnos />
      <Contactos usarMapa={true} />
      <Footer />
    </div>
  )
}
export default SobreNosotros
