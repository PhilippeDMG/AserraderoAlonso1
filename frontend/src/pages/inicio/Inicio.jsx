import Navbar from "../../components/globales/Navbar"
import Separador from "../../components/globales/Separador"
import SwiperHeader from "../../components/inicio/swiperHeader/SwiperHeader"
import AboutUsContainer from "../../components/inicio/AboutUsContainer"
import PorQueElegirnos from "../../components/globales/PorQueElegirnos"
import ServicioContainer from "../../components/inicio/ServicioContainer"
import Footer from "../../components/globales/Footer"
import Direccion from "../../components/globales/Direccion"
import style from "./Inicio.module.css"

const Inicio = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <SwiperHeader />
      <AboutUsContainer />
      <Separador />
      <PorQueElegirnos />
      <Separador />
      <ServicioContainer />
      <Separador />
      <Direccion />
      <Footer />
    </div>
  )
}
export default Inicio
