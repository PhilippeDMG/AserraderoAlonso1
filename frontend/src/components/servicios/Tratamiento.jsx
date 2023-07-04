import styles from './tratamiento.module.css'

const Tratamiento = () => {
  return(
    <article className={styles.tratContainer}>
      <div>
        <details open="">
          <summary className='title'>
            Proceso de Tratamiento Térmico con el Horno CATEM
          </summary>
          <div className={styles.texto} style={{'marginTop': '64px'}}>
            <p className="body">
              El Tratado Fitosanitario de Maderas y Pallets promueve la adopción de medidas eficaces para prevenir la propagación de plagas y enfermedades a través del comercio internacional de maderas. Una de las técnicas utilizadas para cumplir con estas regulaciones es el tratamiento térmico, y una de las herramientas más comunes para llevarlo a cabo es el horno CATEM (Controlled Atmosphere Timber Energy Method).
            </p>
            <p className="body">
              El horno CATEM utiliza calor controlado para eliminar plagas y enfermedades presentes en la madera y los pallets. A continuación, se detallan los pasos principales del proceso de tratamiento térmico:
            </p>
            <h2 className="title">
              Preparación de la carga: 
            </h2>
            <p className="body">
              Antes de introducir la madera o los pallets en el horno CATEM, es necesario preparar adecuadamente la carga. Esto implica verificar que los materiales estén limpios y libres de cualquier elemento extraño que pudiera afectar el tratamiento. Además, es importante asegurarse de que la carga esté correctamente dispuesta para permitir una distribución uniforme del calor.
            </p>
            <h2 className="title">
              Control de temperatura: 
            </h2>
            <p className="body">
              El horno CATEM cuenta con un sistema de control de temperatura preciso. Durante el tratamiento térmico, se alcanza una temperatura específica y sostenida en el interior del horno para garantizar la eliminación de plagas y enfermedades. La temperatura requerida puede variar según los estándares y regulaciones establecidos por el tratado fitosanitario.
            </p>
            <h2 className="title">
              Tiempo de exposición: 
            </h2>
            <p className="body">
              Una vez que se alcanza la temperatura adecuada, la carga de madera o pallets se mantiene en el horno durante un tiempo determinado. Este tiempo de exposición es crucial, ya que permite que el calor penetre en el material y elimine de manera efectiva las plagas y enfermedades presentes. La duración del tratamiento térmico también está sujeta a los requisitos específicos establecidos por el tratado fitosanitario.
            </p>
            <h2 className="title">
              Monitoreo y registro: 
            </h2>
            <p className="body">
              Durante todo el proceso de tratamiento térmico, se lleva a cabo un monitoreo constante para asegurar que se cumplan las condiciones necesarias. Esto implica el uso de instrumentos y sensores precisos para controlar la temperatura interna del horno y garantizar que se mantenga dentro de los parámetros requeridos. Además, se registra toda la información relevante sobre el tratamiento térmico, incluyendo la temperatura alcanzada, el tiempo de exposición y cualquier otra observación importante.
            </p>
            <p className="body" style={{'marginTop': '64px'}}>
              El uso del horno CATEM para el tratamiento térmico de maderas y pallets ofrece numerosos beneficios. Además de cumplir con las regulaciones fitosanitarias, este método es altamente eficaz para eliminar plagas y enfermedades, asegurando la calidad y la integridad de los materiales tratados. Asimismo, el proceso de tratamiento térmico con el horno CATEM es seguro, confiable y ampliamente reconocido a nivel internacional.
            </p>
            <p className="body">
              Recuerda que el cumplimiento adecuado de las regulaciones fitosanitarias es fundamental para el comercio internacional de maderas y pallets. El uso del horno CATEM y la aplicación del tratamiento térmico adecuado garantizan la protección de los ecosistemas forestales y contribuyen a un comercio sostenible y responsable.
            </p>
          </div>
        </details>
      </div>
    </article>
  )
}

export default Tratamiento