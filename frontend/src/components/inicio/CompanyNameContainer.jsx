/* eslint-disable react/prop-types */
import style from "./CompanyNameContainer.module.css"
import Slider from 'react-slick';
import "../../utils/slick-carousel/slick/slick-theme.css"
import "../../utils/slick-carousel/slick/slick.css"
import {useScreenSize} from '../../utils/useScreenSize'
const CompanyNameContainer = () => {
  let display = useScreenSize(
    {
      small: 'displaySmall',
      medium: 'displayMedium',
      large: 'displayLarge',
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
  let botonBorder = useScreenSize(
    {
      small: 'botonBorder',
      medium: 'botonBorderMedium',
      large: 'botonBorderLarge',
    }
  )
  let botonFull = useScreenSize(
    {
      small: 'botonFull',
      medium: 'botonFullMedium',
      large: 'botonFullLarge',
    }
  )
  let arrows = useScreenSize(
    {
      small: false,
      medium: true,
      large: true,
    }
  )

  const settings = {
    dots: true, // Muestra los puntos de navegación
    arrows: arrows, // Muestra las flechas de navegación
    infinite: true, // Permite navegar en bucle
    speed: 700, // Velocidad de transición
    slidesToShow: 1, // Cantidad de elementos a mostrar al mismo tiempo
    autoplay: true, // Reproducción automática
    autoplaySpeed: 6000, // Velocidad de reproducción automática
    fade: false,
    cssEase: 'cubic-bezier(0.23, 1, 0.32, 1)',
    transform: 'translate3d(0, 0, 0)',
  };
  const Carrucel = ({ cards }) => {
    return (
        <Slider {...settings}> 
            {cards.map((card) => {
              return (
                <div key={card.title}>
                  {/* <div className={style.fondo} > */}
                    <div className= {style.contenedor}>
                      <div className={style.contenido}>
                          <h1 className={display}><span>{card.title.split(" ")[0]}</span> {card.title.split(" ").slice(1).join(" ")}</h1>
                          <div className={body}>{card.body}</div>
                          <div className={style.botones}>
                            <button className={botonBorder + ' ' + label}><a href={card.href1}>{card.firstButton}</a></button>
                            <button className={botonFull + ' ' + label}><a href={card.href2}>{card.secondButton}</a></button>
                          </div>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
                );
              })}
        </Slider>
    );
  }
  let caca = [
    {
      title: 'Alonso TimberCraft',
      body: 'Expertos en madera para soluciones confiables y duraderas.',
      firstButton: 'Sobre Nosotros',
      href1: '/nosotros',
      href2: '/contacto',
      secondButton: 'Contáctenos',
    },
    {
      title: 'Nuestros Servicios',
      body: 'Soluciones personalizadas en tratamiento, aserrado y fabricación de pallets para transporte y almacenamiento eficiente, con enfoque en la calidad y el cuidado del medio ambiente.',
      firstButton: 'Servicios',
      href1: '/servicios',
      href2: '/contacto',
      secondButton: 'Contáctenos',
    },
  ]
  return (
    <div className={style.fondo}>
      <Carrucel cards={caca}/>
    </div>
  )
}

export default CompanyNameContainer