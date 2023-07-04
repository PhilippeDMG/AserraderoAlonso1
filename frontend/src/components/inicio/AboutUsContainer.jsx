import style from "./AboutUsContainer.module.css"
import { useRef, useState, useEffect } from 'react';
const AboutUsContainer = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);

  useEffect(() => {
    const updateContainerHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.clientHeight;
        setContainerHeight(height);
      }
    };

    // Actualizar la altura al montar el componente y cada vez que el contenido cambie
    updateContainerHeight();

    // Observar cambios en el contenido del contenedor
    const observer = new MutationObserver(updateContainerHeight);
    observer.observe(containerRef.current, { childList: true, subtree: true });

    return () => {
      // Detener la observación al desmontar el componente
      observer.disconnect();
    };
  }, [containerHeight]);
  return (
    <div className={style.sobreNosotros}>
      <div ref={containerRef} className={style.izquierda}>
        <div className={style.texto}>
          <h2 className={'headline ' + 'bordeIzq'}>
            <span>Sobre</span> Nosotros
          </h2>
          <p className={'body'}>
            Somos una empresa familiar con más de 20 años de experiencia en el sector. En <strong>E-Catem</strong>, nos enorgullece ser especialistas en el <b>Tratado Térmico Fitosanitario de Maderas y Pallets</b>, ofreciendo soluciones confiables y efectivas para garantizar la seguridad y calidad de los productos de madera. <br />
            Nuestro compromiso con la protección del medio ambiente y la prevención de la propagación de plagas y enfermedades nos ha impulsado a destacar en la industria. Mediante la aplicación de técnicas de tratamiento térmico, nos aseguramos de que las maderas y pallets que comercializamos cumplan con las más estrictas regulaciones fitosanitarias internacionales. <br />
            <b>Además</b> de nuestro enfoque en el tratado fitosanitario, también ofrecemos una amplia gama de productos de alta calidad. Desde <b>pallets</b> robustos y confiables hasta <b>tablas aserradas</b> duraderas, brindamos soluciones adaptadas a las necesidades específicas de nuestros clientes. <br />
            Explora nuestro sitio web para obtener más información sobre nuestros servicios, productos y cómo podemos ayudarte a cumplir con los requisitos fitosanitarios de manera efectiva.
          </p>
        </div>
        <button className={'botonBorder' + ' label'} style={{ maxWidth: "100px" }}>
          <a href='/contacto'>Contáctenos</a>
        </button>
      </div>
      <div className={style.imagenes} style={containerHeight ? { height: `${containerHeight}px` } : {}}>
        <picture>
          <img src='/PalletsMaquina.webp' alt='' />
        </picture>
        <div className={style.imagen1}></div>
        <div className={style.imagen2}></div>
      </div>
    </div>
  )
}

export default AboutUsContainer
