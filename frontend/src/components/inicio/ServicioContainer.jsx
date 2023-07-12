/* eslint-disable react/prop-types */
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import style from "./ServicioContainer.module.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

const ServicioContainer = () => {
  const Carrucel = ({ cards }) => {
    return (
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Navigation,Autoplay]}
        className={style.swiperCont}
      >
        {cards.map((card) => {
          return (
            <SwiperSlide className={style.slide} key={card.servicio}>
              <div className={style.carrusel}>
                <picture>
                  <source />
                  <source />
                  <img src={card.img} loading='lazy' />
                </picture>
                <div className={style.mitexto}>
                  <div className={style.texto}>
                    <h2 className={"headline"}>
                      <span>{card.servicio.split(" ")[0]}</span>{" "}
                      {card.servicio.split(" ").slice(1).join(" ")}
                    </h2>
                    <p className={"body"}>
                      {card.body.split(" ").map((word, index) => {
                        if (card.palabrasClave.includes(word)) {
                          return <b key={index}>{word} </b>
                        }
                        return (
                          <React.Fragment key={index}>{word} </React.Fragment>
                        )
                      })}
                    </p>
                  </div>
                  <div className={style.botones}>
                    <button className={"botonBorder " + "label"}>
                      <a href='/servicios'>Más</a>
                    </button>
                    <button className={"botonFull " + "label"}>
                      <a href='/contacto'>Contáctenos</a>
                    </button>
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
      servicio: "Tratamiento fitosanitario",
      body: "Este tratamiento, ya sea térmico o químico, tiene como objetivo eliminar plagas presentes en los embalajes para prevenir su propagación en los envíos internacionales. Los embalajes tratados se marcan con sellos y se emite un certificado avalado por SENASA, necesario para la aduana de cualquier país de destino.",
      img: "/img/sellando-pallet.webp",
      palabrasClave: ["SENASA,"],
    },
    {
      servicio: "Construcción de pallets",
      body: "La construcción de pallets implica la fabricación de estructuras de madera diseñadas para facilitar el transporte y almacenamiento de mercancias. Los pallets se construyen con madera resistente y se diseñan para ser fácilmente manipulables con montacargas. Son ampliamente utilizados en la industria logística y de almacenamiento para optimizar el manejo de productos y mejorar la eficiencia de la cadena de suministro.",
      img: "/img/cargando-pallets-5.webp",
      palabrasClave: ["pallets"],
    },
    {
      servicio: "Aserrado de madera",
      body: "El aserrado de madera es un proceso mediante el cual los troncos de árboles se cortan en tablas, vigas o piezas de madera de diferentes tamaños y formas. Se utiliza maquinaria especializada, como sierras, para realizar cortes precisos y obtener productos de madera utilizados en la fabricación de pallets, construcción y otros fines.",
      img: "/img/recinto-catem-tablas-2.webp",
      palabrasClave: ["aserrado", "fabricación"],
    },
  ]
  return (
    <div className={style.servicios}>
      <div className={style.servicio}>
        <h2 className={"bordeIzq" + " headline"}>
          <span>Nuestros</span> Servicios
        </h2>
      </div>
      <Carrucel cards={cartas} />
    </div>
  )
}

export default ServicioContainer
