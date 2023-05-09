import AboutUsContainer from "../components/inicio/AboutUsContainer"
import CompanyNameContainer from "../components/inicio/CompanyNameContainer"
import Lema from "../components/inicio/Lema"
import Navbar from "../components/globales/Navbar"
import Footer from "../components/globales/Footer"
import ServicioContainer from "../components/inicio/ServicioContainer"
import WhyUsContainer1 from "../components/inicio/WhyUsContainer1"
import styles from "./Inicio1101.module.css"
const Inicio = () => {
  return (
    <div className={styles.test}>
      <Navbar />
      <CompanyNameContainer />
      <AboutUsContainer />
      <WhyUsContainer1 />
      <ServicioContainer />
      <Lema />
      <Footer />
    </div>
  )
}
export default Inicio
