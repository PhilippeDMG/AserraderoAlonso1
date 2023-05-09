import Portada from "../components/globales/Portada"
import Navbar from "../components/globales/Navbar"
import Footer from "../components/globales/Footer"
import styles from "./SobreNosotros.module.css"
const SobreNosotros = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Portada
        titulo={"Sobre Nosotros"}
        cuerpo={
          "Pasión por la madera, calidad en cada detalle. Descubrí quiénes somos y lo que hacemos"
        }
        nombreImagen={"SobreNosotrosPortada.png"}
      />
      <Footer />
    </div>
  )
}
export default SobreNosotros
