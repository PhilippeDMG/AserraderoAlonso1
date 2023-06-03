import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useScreenSize } from '../../utils/useScreenSize';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [statusStyle, setStatusStyle] = useState(styles.statusSuccess);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/send-email', { name, email, message })
      .then(response => {
        console.log(response.data);
        setStatus('Email sent successfully');
        setMessage(''); setName(''); setEmail('');
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
          setStatus('');
        }, 1000);
        setTimeoutId(newTimeoutId);
      })
      .catch(error => {
        console.log(error.response.data);
        setStatus('Error sending email');
        setStatusStyle(styles.statusError)
      })
  };
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
    <div className={styles.fromContainer}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2 className={headline}>Contáctenos</h2>
        <div className={styles.formGroup}>
          <input id='name' className={`${styles.input} ${body}`} type='text' placeholder={" "} value={name} onChange={(event) => setName(event.target.value)} required/>
          <label htmlFor="name" className={styles.formLabel+' '+ body}>Nombre</label>
        </div>
        <div className={styles.formGroup}>
          <input id='mail' className={`${styles.input} ${body}`} type='email' placeholder={" "} value={email} onChange={(event) => setEmail(event.target.value)} required/>
          <label htmlFor="mail" className={styles.formLabel+' '+ body}>Email</label>
        </div>
        <div className={styles.formGroup}>
          <textarea
            className={`${styles.text} ${body}`}
            id='text'
            type='text'
            rows={4}
            placeholder={" "}
            value={message}
            onChange={(event) => setMessage(event.target.value)} 
            required
            />
          <label htmlFor="text" className={styles.formLabel+' '+ body}>Mensaje</label>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={`botonBorder ${label}`}
            type='submit'>Enviar Consulta
          </button>
          {status && <p className={statusStyle +' '+body}>{status}</p>}
        </div>
      </form>
    </div>
  )
}

export default ContactForm;


