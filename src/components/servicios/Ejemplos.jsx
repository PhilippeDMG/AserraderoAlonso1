import styles from "./Ejemplos.module.css"
import typography from "../../global.module.css"

const Ejemplos = () => {
  return (
    <div className={styles.ejemplos}>
      <div className={styles.carta}>
        <div className={styles.texto}>
          <div className={typography.headlineLarge}>
            Tratamiento fitosanitario de pallets
          </div>
          <div className={typography.bodyLarge}>
            Nuestro servicio de tratamiento fitosanitario de pallets es una
            etapa esencial en la cadena logística y comercial. Mediante un
            proceso cuidadoso de calentamiento controlado, eliminamos plagas y
            organismos dañinos que puedan estar presentes en la madera.
            Cumplimos con las normativas fitosanitarias internacionales,
            asegurando que los pallets tratados cumplan con los requisitos para
            el comercio internacional. Este proceso garantiza la bioseguridad,
            evitando la propagación de enfermedades y plagas forestales, y
            protegiendo la integridad de los productos transportados. Además,
            los pallets tratados son más resistentes al deterioro, prolongando
            su vida útil y asegurando un rendimiento confiable en el manejo y
            almacenamiento de mercancías.
          </div>
          <div className={typography.botonBorder}>Más</div>
        </div>
        <img src='../../../public/Pallets.png' />
      </div>
      <div className={styles.carta}>
        <img src='../../../public/Pallets2.png' />
        <div className={styles.texto}>
          <div className={typography.headlineLarge}>
            Tratamiento fitosanitario de tablas
          </div>
          <div className={typography.bodyLarge}>
            Nuestro servicio de tratamiento fitosanitario de tablas de madera es
            esencial para garantizar su calidad, durabilidad y cumplimiento
            fitosanitario. A través de un proceso de calentamiento controlado,
            eliminamos eficazmente plagas, insectos y organismos dañinos que
            puedan comprometer la integridad de las tablas. Esto asegura que las
            tablas estén libres de riesgos biológicos y sean aptas para su uso
            en diversos proyectos de construcción, mueblería y otras
            aplicaciones industriales. Con nuestro tratamiento fitosanitario,
            las tablas cumplen con los estándares internacionales, brindando
            tranquilidad a nuestros clientes y garantizando la conformidad con
            las regulaciones fitosanitarias.
          </div>
          <div className={typography.botonBorder}>Más</div>
        </div>
      </div>
      <div className={styles.carta}>
        <div className={styles.texto}>
          <div className={typography.headlineLarge}>
            Fabricación de pallets tratados
          </div>
          <div className={typography.bodyLarge}>
            Nuestro servicio de fabricación de pallets tratados es la solución
            perfecta para sus necesidades de transporte y almacenamiento
            seguros. Utilizando madera sometida a un riguroso proceso de
            tratamiento fitosanitario, construimos pallets duraderos y
            confiables que cumplen con los estándares de calidad y bioseguridad
            requeridos para el comercio internacional. Nuestro equipo de
            artesanos altamente capacitados se encarga de fabricar pallets a
            medida, adaptándolos a sus especificaciones y requisitos únicos. Con
            nuestra fabricación de pallets tratados, garantizamos la protección
            de sus productos y la eficiencia en su cadena de suministro,
            brindando soluciones confiables y seguras para su negocio.
          </div>
          <div className={typography.botonBorder}>Más</div>
        </div>
        <img src='../../../public/Pallets3.png' />
      </div>
    </div>
  )
}

export default Ejemplos
