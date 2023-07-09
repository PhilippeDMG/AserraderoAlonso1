import Portada from "../../components/globales/Portada"
import Navbar from "../../components/globales/Navbar"
import Footer from "../../components/globales/Footer"
import Contactos from "../../components/globales/Contactos"
import Direccion from "../../components/globales/Direccion"
import styles from "./App.module.css"
import WhatsAppIcon from "../../components/globales/WhatsAppIcon"
const App = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Portada
        titulo={"Contáctenos"}
        cuerpo={
          "Estamos para ayudarlo. Contáctenos y descubra cómo podemos cumplir sus necesidades"
        }
        nombreImagen={"img/sellos-4.webp"}
      />
      <Direccion />
      <Contactos />
      <Footer />
      <WhatsAppIcon />
    </div>
  )
}
export default App
