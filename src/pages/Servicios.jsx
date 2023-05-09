import Navbar from "../components/globales/Navbar"
import NuestrosServicios from "../components/servicios/NuestrosServicios"
import Ejemplos from "../components/servicios/Ejemplos"
import Contactenos from "../components/globales/Contactenos"
import Footer from "../components/globales/Footer"
import styles from "./Servicios.css"
const Servicios = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <NuestrosServicios />
      <Ejemplos />
      <Contactenos />
      <Footer />
    </div>
  )
}
export default Servicios
