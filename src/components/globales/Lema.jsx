import style from "./Lema.module.css"
const Lema = () => {
  return (
    <div className={style.lema}>
      <div className='titleLarge'>Madera que inspira confianza</div>
      <div className='headlineLarge'>Alonso TimberCraft</div>
      <div className={style.tarjeta}>LOCALIZACIÓN</div>
      <div className='bodyLarge'>
        Av. ejemplo 123
        <br />
        Provincia
        <br />
        Argentina
      </div>
      <div className={style.mipalo}></div>
      <div className='bodyMedium'>
        <p>¿CONSULTAS?</p>
        <p>LLÁMENOS +123 456 7890</p>
      </div>
    </div>
  )
}

export default Lema
