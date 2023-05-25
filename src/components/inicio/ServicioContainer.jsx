/* eslint-disable react/prop-types */
import style from "./ServicioContainer.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
import Slider from 'react-slick';
import "../../utils/slick-carousel/slick/slick-theme.css"
import "../../utils/slick-carousel/slick/slick.css"

const ServicioContainer = () => {
  let headline = useScreenSize(
    {
      small: 'headlineSmall',
      medium: 'headlineMedium',
      large: 'headlineLarge',
    }
  )
  let body = useScreenSize(
    {
      small: 'bodySmall',
      medium: 'bodyMedium',
      large: 'bodyLarge',
    }
  )
  let label = useScreenSize(
    {
      small: 'labelSmall',
      medium: 'labelMedium',
      large: 'labelLarge',
    }
  )
  let bordeIzq = useScreenSize(
    {
      small: ' bordeIzq',
      medium: ' bordeIzq',
      large: ' bordeIzq'
    },
  )
  const settings = {
    dots: true, // Muestra los puntos de navegación
    arrows: true, // Muestra las flechas de navegación
    infinite: true, // Permite navegar en bucle
    speed: 1500, // Velocidad de transición
    slidesToShow: 1, // Cantidad de elementos a mostrar al mismo tiempo
    autoplay: false, // Reproducción automática
    autoplaySpeed: 4000, // Velocidad de reproducción automática
    fade: false,
    cssEase: 'cubic-bezier(0.23, 1, 0.32, 1)',
    transform: 'translate3d(0, 0, 0)',
  };
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
                        <h2 className={headline}><span>Tratamiento</span> fitosanitario</h2>
                        <p className={body}>
                          {card.body}
                        </p>
                        <div className={style.botones}>
                          <button className={'botonBorder ' + label}>Más</button>
                          <button className={'botonFull ' + label}>Contáctenos</button>
                        </div>
                      </div>
                    </div>
                </div>
                );
              })}
        </Slider>
    );
  }
  let caca = [
    {
      servicio: 'Alonso TimberCraft',
      body: 'El tratamiento fitosanitario es un conjunto de técnicas utilizadas en la agricultura para proteger las plantas y cultivos de plagas, enfermedades y malezas. Involucra la aplicación de productos químicos, biológicos o métodos de control integrado para mantener la salud de las plantas y garantizar una producción agrícola eficiente y sostenible.',
      img: 'ServiciosInicio.png',
    },
    {
      servicio: 'Alonso TimberCraft',
      body: 'El tratamiento fitosanitario es un conjunto de técnicas utilizadas en la agricultura para proteger las plantas y cultivos de plagas, enfermedades y malezas. Involucra la aplicación de productos químicos, biológicos o métodos de control integrado para mantener la salud de las plantas y garantizar una producción agrícola eficiente y sostenible.',
      img: 'ServiciosInicio.png',
    },
  ]
  return (
    <div className={style.servicios}>
      <div className={style.servicio}>
        <h2 className={bordeIzq + ' ' + headline }><span>Nuestros</span> Servicios</h2>
      </div>
      <Carrucel cards={caca}/>
    </div>
  )
}

export default ServicioContainer
