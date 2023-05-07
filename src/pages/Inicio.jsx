import AboutUsContainer from "../components/inicio/AboutUsContainer"
import CompanyNameContainer from "../components/inicio/CompanyNameContainer"
import Lema from "../components/inicio/Lema"
import EmpresaContainer from "../components/inicio/EmpresaContainer"
import Footer from "../components/inicio/Footer"
import ServicioContainer from "../components/inicio/ServicioContainer"
import WhyUsContainer1 from "../components/inicio/WhyUsContainer1"
import styles from "../Inicio1101.module.css"
const Inicio = () => {
  return (
    <div className={styles.test}>
      <EmpresaContainer />
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
