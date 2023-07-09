/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from "./Instalaciones.module.css"
import { Pagination, Navigation } from 'swiper/modules';

// import { useScreenSize } from "../../utils/useScreenSize"
const Instalaciones = () => {
  // let slides = useScreenSize({
  //   small: 2,
  //   medium: 4,
  //   large: 6,
  // })

  const Carrucel = ({ imgs }) => {
    return (
      <div className={style.instalaciones}>
        <div className={style.texto}>
          <div className={'headline' + " bordeIzq"}>Nuestras Instalaciones</div>
          <div className={'body'}>
            Nuestras instalaciones cuentan con equipos especializados para tratamiento fitosanitario y fabricación de pallets. Espacios funcionales y personal capacitado aseguran servicios de calidad.
          </div>
        </div>
        <Swiper
          lazyPreloadPrevNext={3}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          navigation= {true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            800: {
              slidesPerView: 3
            }
          }}
          className={style.swiper}
        >
          {imgs.map((img) => {
            return (
              <SwiperSlide className={style.swiperCard} key={img.alt}>
                <div>
                  <div>
                    <picture>
                      <source />
                      <source />
                      <img
                        src={img.url}
                        alt={img.alt}
                        className={style.carouselImage}
                        loading="lazy"
                        />
                    </picture>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    )
  }

  const cartas = [
    {
      url: "/img/catem.webp",
      alt: "catem",
    },
    {
      url: "/img/recinto-catem-4.webp",
      alt: "pallets exportación",
    },
    {
      url: "/img/cargando-pallets-4.webp",
      alt: "despachando pallets tratados",
    },
    {
      url: "/img/recinto-catem-2.webp",
      alt: "catem recinto",
    },
    {
      url: "/img/catem-horno-exterior.webp",
      alt: "catem-1",
    },
    {
      url: "/img/tablas-galpon.webp",
      alt: "tratamiento fitosanitario de tablas",
    },
    {
      url: "/img/recinto-catem-pallet-8.webp",
      alt: "recinto catem pallets",
    },
    {
      url: "/img/autoelevador-pallets-tablas.webp",
      alt: "aserradero",
    },
    {
      url: "/img/pallets-dentro-horno-1.jpg",
      alt: "pallets adentro de catem",
    },
    {
      url: "/img/pallets-dentro-horno-2.jpg",
      alt: "pallets adentro de catem-1",
    },
    {
      url: "/img/pallets-dentro-horno.jpg",
      alt: "ingresando pallets en catem",
    },
    {
      url: "/img/pallets-dentro-catem.jpg",
      alt: "ingresando pallets en catem-1",
    },
  ]

  return (
    <Carrucel imgs={cartas}/>
  )
}
export default Instalaciones
