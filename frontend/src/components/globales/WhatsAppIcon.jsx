import styles from "./WhatsAppIcon.module.css"
const WhatsAppIcon = () => {
  return (
    <a
      href='https://web.whatsapp.com/send?phone=543624225651'
      className={styles.whatsapp}
    >
      <svg height='50' width='50'>
        <image href='/WhatsAppIcon.svg' width='100%' height='100%' />
      </svg>
    </a>
  )
}
export default WhatsAppIcon
