import Portada from "../../components/globales/Portada"
import Separador from "../../components/globales/Separador"
import Navbar from "../../components/globales/Navbar"
import Footer from "../../components/globales/Footer"
import MisionVision from "../../components/sobreNosotros/MisionVision"
import Instalaciones from "../../components/sobreNosotros/Instalaciones"
import PorQueElegirnos from "../../components/globales/PorQueElegirnos"
import Contactos from "../../components/globales/Contactos"
import style from "./SobreNosotros.module.css"
const SobreNosotros = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <Portada
        titulo={"Sobre Nosotros"}
        cuerpo={
          "Pasión por la madera, calidad en cada detalle. Descubra quiénes somos y lo que hacemos"
        }
        nombreImagen={"IMG_6427.webp"}
      />
      <MisionVision />
      <Separador />
      <Instalaciones />
      <Separador />
      <PorQueElegirnos />
      <Contactos usarMapa={true} />
      <Footer />
    </div>
  )
}
export default SobreNosotros
