/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useScreenSize } from "../../../utils/useScreenSize"
import style from "./swiperHeader.module.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function SwiperHeader() {
  let display = useScreenSize({
    small: "displaySmall",
    medium: "displayMedium",
    large: "displayLarge",
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
  let botonBorder = useScreenSize({
    small: "botonBorder",
    medium: "botonBorderMedium",
    large: "botonBorderLarge",
  })
  let botonFull = useScreenSize({
    small: "botonFull",
    medium: "botonFullMedium",
    large: "botonFullLarge",
  })
  const Carrucel = ({ cards }) => {
    return (
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className= {style.swiperCont}
      >
        <div
          slot="container-start"
          className={style.parallaxbg}
          data-swiper-parallax="-23%"
        ></div>
        {cards.map((card) => {
          return (
            <SwiperSlide className={style.swiperCard} key={card.title}>
              <div>
                <div className={style.contenedor}>
                  <div className={style.contenido}>
                    <h1 className={display} data-swiper-parallax="-300">
                      <span>{card.title.split(" ")[0]}</span>{" "}
                      {card.title.split(" ").slice(1).join(" ")}
                    </h1>
                    <div className={body} data-swiper-parallax="-200">{card.body} </div>
                    <div className={style.botones} data-swiper-parallax="-100">
                      <button className={botonBorder + " " + label}>
                        <a href={card.href1}>{card.firstButton}</a>
                      </button>
                      <button className={botonFull + " " + label}>
                        <a href={card.href2}>{card.secondButton}</a>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            </SwiperSlide>
          )
        })}
        </Swiper>
    )
  }
  const cartas = [
    {
      title: "E Catem",
      body: "Expertos en madera para soluciones confiables y duraderas.",
      firstButton: "Sobre Nosotros",
      href1: "/nosotros",
      href2: "/contacto",
      secondButton: "Contáctenos",
    },
    {
      title: "Nuestros Servicios",
      body: "Soluciones personalizadas en tratamiento, aserrado y fabricación de pallets para transporte y almacenamiento eficiente, con enfoque en la calidad y el cuidado del medio ambiente.",
      firstButton: "Servicios",
      href1: "/servicios",
      href2: "/contacto",
      secondButton: "Contáctenos",
    },
  ]
  return (
    <>
    <Carrucel cards={cartas}/>
    </>
  );
}
