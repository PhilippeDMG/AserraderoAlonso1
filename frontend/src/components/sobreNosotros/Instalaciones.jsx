/* eslint-disable react/prop-types */
import style from "./Instalaciones.module.css"
import Slider from 'react-slick';
import { useScreenSize } from "../../utils/useScreenSize"
import "../../utils/slick-carousel/slick/slick-theme.css"
import "../../utils/slick-carousel/slick/slick.css"
const Instalaciones = () => {

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
  let slides = useScreenSize(
    {
      small: 1,
      medium: 2,
      large: 3,
    }
  )
  const settings = {
    dots: true, // Muestra los puntos de navegación
    arrows: true, // Muestra las flechas de navegación
    infinite: true, // Permite navegar en bucle
    speed: 1500, // Velocidad de transición
    slidesToShow: slides, // Cantidad de elementos a mostrar al mismo tiempo
    rows: 2,
    slidesPerRow: 1,
    autoplay: true, // Reproducción automática
    autoplaySpeed: 4000, // Velocidad de reproducción automática
    fade: false, 
    cssEase: 'cubic-bezier(0.23, 1, 0.32, 1)',
    transform: 'translate3d(0, 0, 0)',
  };

  const Carrucel = ({ imgs }) => {
    return (
      <Slider {...settings}> 
          {imgs.map((img) => {
              return (
                  <div key={img.alt}>
                      <picture>
                          <source />
                          <source />
                          <img src={img.url} alt={img.alt} className={style.carouselImage}/>
                      </picture>
                  </div>
              );
          })}
      </Slider>
    );
  }

  let caca = [
    {
      url: 'https://www.argentinaforestal.com/wp-content/uploads/2019/04/Aserradero-Garupa-2.jpg',
      alt: 'foto1'
    },
    {
      url: 'https://us.123rf.com/450wm/shablovskyistock/shablovskyistock2111/shablovskyistock211100204/178121291-aserradero-tablones-de-madera-en-un-aserradero-o-en-un-taller-de-carpinter%C3%ADa-aserrado-y-secado-de.jpg',
      alt: 'foto2'
    },
    {
      url: 'https://palletsjauregui.com.ar/site/wp-content/uploads/2018/07/aserradero-madera-pallets-4.jpg'
    },
    {
      url: 'https://ss-static-01.esmsv.com/id/112648/galeriaimagenes/obtenerimagen/?id=19&tipoEscala=stretch&width=977&height=733',
      alt: 'foto4'
    },
    {
      url: 'https://exportpack.com.ar/wp-content/uploads/2013/11/horno-expor-pack.png',
      alt: 'foto5'
    },
    {
      url: 'https://powdertronic.com/wp-content/uploads/2022/10/hornoMadera-scaled.jpg',
      alt: 'foto6'
    },
    {
      url: 'https://www.argentinaforestal.com/wp-content/uploads/2019/04/Aserradero-Garupa-2.jpg',
      alt: 'foto7'
    },
    {
      url: 'https://palletchacabuco.com.ar/wp-content/uploads/2022/05/catem-palletchacabuco.jpg',
      alt: 'foto8'
    }
  ];

  return (
    <div className={style.instalaciones}>
      <div className={style.texto}>
        <div className={headline + " bordeIzq"}>Instalaciones</div>
        <div className={body}>
          Nuestras instalaciones eficientes y funcionales están equipadas con
          equipos especializados para el tratamiento fitosanitario y la
          fabricación de pallets. Contamos con espacios adecuados y un equipo
          capacitado para garantizar la calidad en nuestros servicios.
        </div>
      </div>
      <div className= {style.container}>
        <Carrucel imgs={caca}/>
      </div>
    </div>
  )
}
export default Instalaciones
