import { useState, useRef } from "react"
import styles from "./ContactForm.module.css"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [statusStyle, setStatusStyle] = useState(styles.statusSuccess)
  const [timeoutId, setTimeoutId] = useState(null)
  const [captchaValido, setCaptchaValido] = useState(null)

  const captcha = useRef(null)

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot")
      setCaptchaValido(true)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (captcha.current.getValue()) {
      axios
        .post("/send-email", { name, lastname, email, message })
        .then((response) => {
          console.log(response.data)
          setStatusStyle(styles.statusSuccess)
          setStatus("Email enviado con éxito")
          setMessage("")
          setName("")
          setLastName("")
          setEmail("")
          if (timeoutId) {
            clearTimeout(timeoutId)
          }
          const newTimeoutId = setTimeout(() => {
            setStatus("")
          }, 1000)
          setTimeoutId(newTimeoutId)
        })
        .catch((error) => {
          console.log(error.response.data)
          setStatus("Error enviando email")
          setStatusStyle(styles.statusError)
        })
    } else {
      setCaptchaValido(false)
      setStatusStyle(styles.statusError)
    }
  }

  return (
    <div className={styles.fromContainer}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2 className={'headline'}>Contáctenos</h2>
        <div className={styles.formGroup}>
          <input
            id='name'
            className={`${styles.input} ${'body'}`}
            type='text'
            autoComplete="name"
            placeholder={" "}
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor='name' className={styles.formLabel + " " + 'body'}>
            Nombre
          </label>
        </div>
        <div className={styles.formGroup}>
          <input
            id='lastname'
            className={`${styles.input} ${'body'}`}
            type='text'
            autoComplete="family-name"
            value={lastname}
            placeholder={" "}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
          <label htmlFor='name' className={styles.formLabel + " " + 'body'}>
            Apellido
          </label>
        </div>
        <div className={styles.formGroup}>
          <input
            id='mail'
            className={`${styles.input} ${'body'}`}
            type='email'
            autoComplete="email" 
            placeholder={" "}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor='mail' className={styles.formLabel + " " + 'body'}>
            Email
          </label>
        </div>
        <div className={styles.formGroup}>
          <textarea
            className={`${styles.text} ${'body'}`}
            id='text'
            type='text'
            rows={4}
            placeholder={" "}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <label htmlFor='text' className={styles.formLabel + " " + 'body'}>
            Mensaje
          </label>
        </div>
        <div>
          <ReCAPTCHA
            ref={captcha}
            sitekey='6LftVoAmAAAAAPuiV5A0T5jHRAPVA7wpR413cEsL'
            onChange={onChange}
          />
          {captchaValido === false && (
            <div className={statusStyle + " " + 'body'}>
              Por favor aceptá el captcha
            </div>
          )}
        </div>
        <div className={styles.buttonContainer}>
          <button className={`botonBorder ${'label'}`} type='submit'>
            Enviar Consulta
          </button>
          {status && <p className={statusStyle + " " + 'body'}>{status}</p>}
        </div>
      </form>
    </div>
  )
}

export default ContactForm
