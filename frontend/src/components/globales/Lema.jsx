import style from "./Lema.module.css"

const Lema = () => {
  return (
    <div className={style.lema}>
      <h4 className={'title'}>Madera que inspira confianza</h4>
      <h2 className={'headline'}><span>E</span> Catem</h2>
      <div className={`${style.tarjeta} ${'label'}`}>Localización:</div>
      <div className={'body'}>
        Osvaldo Magnasco
        <br />
        Concordia, Entre Ríos, Argentina
      </div>
      <div className={style.mipalo}></div>
      <div className={'body'}>
        <p>¿Consultas? Llámenos </p>
        <p>+54 9 3454 24-4769 <td />+54 9 3454 48-9270</p>
      </div>
    </div>
  )
}

export default Lema
