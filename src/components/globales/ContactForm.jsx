import styles from './ContactForm.module.css';
import { useScreenSize } from '../../utils/useScreenSize';

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
    <form className={styles.contactForm}>
      <h2 className={headline}>Contáctenos</h2>
      <input className={`${styles.input} ${body}`} type='text' placeholder={"Nombre"} />
      <input className={`${styles.input} ${body}`} type='email' placeholder={"Email"} />
      <input className={`${styles.input} ${body}`} placeholder={"Título"} />
      <textarea
        className={`${styles.text} ${body}`}
        type='text'
        rows={4}
        placeholder={"Mensaje"}
      />
      <button
        className={`botonBorder ${label}`}
        type='submit'>Enviar Consulta</button>
    </form>
  )
}

export default ContactForm;


