import Portada from "../../components/globales/Portada"
import Navbar from "../../components/globales/Navbar"
import Footer from "../../components/globales/Footer"
import Contactos from "../../components/globales/Contactos"
import Direccion from "../../components/globales/Direccion"
import "./Contactenos.css"
const Contactenos = () => {
  return (
    <div className='main'>
      <Navbar />
      <Portada
        titulo={"Contáctenos"}
        cuerpo={
          "¡Estamos aquí para ayudarte! Contáctanos y descubre cómo podemos cumplir tus necesidades."
        }
        nombreImagen={"NuestrosServiciosFondo.png"}
      />
      <Direccion />
      <Contactos />
      <Footer />
    </div>
  )
}
export default Contactenos