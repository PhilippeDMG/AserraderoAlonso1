import Portada from "../components/globales/Portada"
import Navbar from "../components/globales/Navbar"
import Footer from "../components/globales/Footer"
import styles from "./SobreNosotros.module.css"
const Contactenos = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Portada
        titulo={"Contáctenos"}
        cuerpo={
          "Estamos aquí para ayudarte! Contáctanos y descubre cómo podemos cumplir tus necesidades"
        }
        nombreImagen={"NuestrosServiciosFondo.png"}
      />
      <Footer />
    </div>
  )
}
export default Contactenos
