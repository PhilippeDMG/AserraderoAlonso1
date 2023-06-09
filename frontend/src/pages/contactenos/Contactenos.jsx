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
          "Estamos para ayudarlo. Contáctenos y descubra cómo podemos cumplir sus necesidades"
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
