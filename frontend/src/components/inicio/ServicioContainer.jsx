/* eslint-disable react/prop-types */
import style from "./ServicioContainer.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
import Slider from "react-slick"
import "../../utils/slick-carousel/slick/slick-theme.css"
import "../../utils/slick-carousel/slick/slick.css"

const ServicioContainer = () => {
  let headline = useScreenSize({
    small: "headlineSmall",
    medium: "headlineMedium",
    large: "headlineLarge",
  })
  let body = useScreenSize({
    small: "bodySmall",
    medium: "bodyMedium",
    large: "bodyLarge",
  })
  let label = useScreenSize({
    small: "labelSmall",
    medium: "labelMedium",
    large: "labelLarge",
  })
  let bordeIzq = useScreenSize({
    small: " bordeIzq",
    medium: " bordeIzq",
    large: " bordeIzq",
  })
  const settings = {
    dots: true, // Muestra los puntos de navegación
    arrows: true, // Muestra las flechas de navegación
    infinite: true, // Permite navegar en bucle
    speed: 700, // Velocidad de transición
    slidesToShow: 1, // Cantidad de elementos a mostrar al mismo tiempo
    autoplay: true, // Reproducción automática
    autoplaySpeed: 6000, // Velocidad de reproducción automática
    fade: false,
    cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
    transform: "translate3d(0, 0, 0)",
  }
  const Carrucel = ({ cards }) => {
    return (
      <Slider {...settings}>
        {cards.map((card) => {
          return (
            <div key={card.servicio}>
              <div className={style.carrusel}>
                <picture>
                  <source />
                  <source />
                  <img src={card.img} loading='lazy' />
                </picture>
                <div className={style.mitexto}>
                  <h2 className={headline}>
                    <span>{card.servicio.split(" ")[0]}</span>{" "}
                    {card.servicio.split(" ").slice(1).join(" ")}
                  </h2>
                  <p className={body}>{card.body}</p>
                  <div className={style.botones}>
                    <button className={"botonBorder " + label}>
                      <a href='/servicios'>Más</a>
                    </button>
                    <button className={"botonFull " + label}>
                      <a href='/contacto'>Contáctenos</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    )
  }
  const cartas = [
    {
      servicio: "Tratamiento fitosanitario",
      body: "El tratamiento fitosanitario es un conjunto de técnicas utilizadas en la agricultura para proteger las plantas y cultivos de plagas, enfermedades y malezas. Involucra la aplicación de productos químicos, biológicos o métodos de control integrado para mantener la salud de las plantas y garantizar una producción agrícola eficiente y sostenible.",
      img: "ServiciosInicio.webp",
    },
    {
      servicio: "Construcción de pallets",
      body: "La construcción de pallets implica la fabricación de estructuras de madera diseñadas para facilitar el transporte y almacenamiento de mercancías. Los pallets se construyen con madera resistente y se diseñan para ser fácilmente manipulables con montacargas. Son ampliamente utilizados en la industria logística y de almacenamiento para optimizar el manejo de productos y mejorar la eficiencia en la cadena de suministro.",
      img: "PalletsInicio.webp",
    },
    {
      servicio: "Aserrado de madera",
      body: "El aserrado de madera es un proceso mediante el cual los troncos de árboles se cortan en tablas, vigas o piezas de madera de diferentes tamaños y formas. Se utiliza maquinaria especializada, como sierras, para realizar cortes precisos y obtener productos de madera utilizados en la construcción, fabricación de muebles y otros fines.",
      img: "https://3.bp.blogspot.com/-aYNky1cYCmg/W3ENGc9KmvI/AAAAAAAAWzU/UU2mAddfVGwJXRRrSqtK-YMM55kDEbnzACLcBGAs/s1200/madera%2Baserrada.jpg",
    },
  ]
  return (
    <div className={style.servicios}>
      <div className={style.servicio}>
        <h2 className={bordeIzq + " " + headline}>
          <span>Nuestros</span> Servicios
        </h2>
      </div>
      <Carrucel cards={cartas} />
    </div>
  )
}

export default ServicioContainer
