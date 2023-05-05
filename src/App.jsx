import AboutUsContainer from "./components/AboutUsContainer"
import CompanyNameContainer from "./components/CompanyNameContainer"
import ContactContainer from "./components/ContactContainer"
import EmpresaContainer from "./components/EmpresaContainer"
import Footer from "./components/Footer"
import ServicioContainer from "./components/ServicioContainer"
import WhyUsContainer1 from "./components/WhyUsContainer1"
import styles from "./Inicio1101.module.css"
const Inicio1101 = () => {
  return (
    <div className={styles.inicio1101}>
      <div className={styles.test}>
        <EmpresaContainer />
        <CompanyNameContainer />
        <AboutUsContainer />
        <WhyUsContainer1 />
        <ServicioContainer />
        <ContactContainer />
        <Footer />
      </div>
    </div>
  )
}

export default Inicio1101
