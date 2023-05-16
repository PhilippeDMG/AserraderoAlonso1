import style from "./MisionVision.module.css"

const MisionVision = () => {
  return (
    <div className={style.misionVision}>
      <div className={style.contenedor}>
        <div className={style.texto}>
          <div className='headlineLarge'>Mision</div>
          <div className='bodyLarge'>
            Nuestra misión es ser líderes en la industria como proveedores
            confiables de servicios de tratamiento fitosanitario, aserrado de
            madera y fabricación de pallets. Nos comprometemos a ofrecer
            soluciones seguras y de alta calidad, cumpliendo con los estándares
            internacionales y las regulaciones fitosanitarias. Buscamos
            proporcionar valor a nuestros clientes, garantizando la protección
            de sus productos y facilitando el flujo eficiente de la cadena de
            suministro. Nos esforzamos por mantener relaciones sólidas y
            duraderas con nuestros clientes, basadas en la confianza, el
            profesionalismo y la satisfacción mutua.
          </div>
        </div>
        <img src='../../../public/Mision.png' />
      </div>
      <div className={style.contenedor}>
        <img src='../../../public/Vision.png' />
        <div className={style.texto}>
          <div className='headlineLarge'>Vision</div>
          <div className='bodyLarge'>
            Nuestra visión es ser reconocidos como referentes en la industria,
            destacando por nuestra excelencia en el tratamiento fitosanitario,
            aserrado de madera y fabricación de pallets. Buscamos expandir
            nuestro alcance a nivel global, siendo la elección preferida de
            empresas que valoran la calidad, la seguridad y la eficiencia en el
            manejo de sus productos. Nos esforzamos por innovar y mejorar
            continuamente nuestros procesos, adoptando prácticas sostenibles y
            tecnologías de vanguardia. Como empresa familiar, nos enorgullece
            mantener los valores tradicionales de honestidad, compromiso y
            servicio personalizado, brindando soluciones adaptadas a las
            necesidades únicas de cada cliente.
          </div>
        </div>
      </div>
    </div>
  )
}
export default MisionVision
