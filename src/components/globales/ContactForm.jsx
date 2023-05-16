import styles from './ContactForm.module.css';

const ContactForm = () => {
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
