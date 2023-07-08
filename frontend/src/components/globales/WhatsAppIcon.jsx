/* eslint-disable no-unused-vars */
import styles from "./WhatsAppIcon.module.css"
import { useScreenSize } from "../../utils/useScreenSize"
const WhatsAppIcon = () => {
  let display = useScreenSize({
    small: "displaySmall",
    medium: "displayMedium",
    large: "displayLarge",
  })
  return (
    <a
      href={
        (display === "displayMedium") | "displaySmall"
          ? "https://api.whatsapp.com/send?phone=5493454489270"
          : "https://web.whatsapp.com/send?phone=5493454489270"
      }
      className={styles.whatsapp}
    >
      <svg height='50' width='50'>
        <image href='/WhatsApp-Black-White.svg' width='100%' height='100%' />
      </svg>
    </a>
  )
}
export default WhatsAppIcon
