import "./Direccion.css"

const Direccion = () => {
  return (
    <div className='imagen'>
      <div className='rectangulo'>
        <div className='eltexto'>
          <div className='headlineLarge'>Dónde encontrarnos</div>
          <div className='bodyLarge'>
            Nuestra empresa se encuentra en Concordia Entre Rios, ubicada en
            Osvaldo Magnasco.
          </div>
          <div className='lascols'>
            <div className='prim'>
              <div className='titleLarge'>Address</div>
              <div className='bodyMedium'>
                MWPW+9F
                <br />
                Osvaldo Magnasco
                <br />
                Entre Ríos
              </div>
            </div>
            <div className='seg'>
              <div className='titleLarge'>Telephone</div>
              <div className='bodyMedium'>+54 954 4814 485</div>
              <div className='titleLarge'>Email</div>
              <div className='bodyMedium'>pichipop@gmail.com</div>
            </div>
          </div>
        </div>
        <div className='botonBorder labelLarge'>Contáctenos</div>
      </div>
    </div>
  )
}
export default Direccion
