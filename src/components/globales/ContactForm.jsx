import styles from './ContactForm.module.css';

const ContactForm = () => {
  const headline = useScreenSize({
    small: 'headlineSmall',
    medium: 'headlineMedium',
    large: 'headlineLarge'
  });

  const body = useScreenSize({
    small: 'bodySmall',
    medium: 'bodyMedium',
    large: 'bodyLarge'
  });

  const label = useScreenSize({
    small: 'labelSmall',
    medium: 'labelMedium',
    large: 'labelLarge'
  });

  return (
    <div className={styles.contactForm}>
      <div className='displayLarge'>Contáctenos</div>
      <input className={`${styles.input} labelLarge`} type='text' placeholder={"Nombre"} />
      <input className={`${styles.input} labelLarge`} type='text' placeholder={"Email"} />
      <input className={`${styles.input} labelLarge`} placeholder={"Título"} />
      <textarea
        className={`${styles.text} labelLarge`} 
        type='text'
        placeholder={"Mensaje"}
      />
      <div className='botonBorder labelLarge'>Enviar Consulta</div>
    </div>
  )
}

export default ContactForm
