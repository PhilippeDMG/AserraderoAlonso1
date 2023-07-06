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
      // usar este codigo cuando se tenga el telefono definido
      // href={
      //   display === "displayMedium" | "displaySmall"
      //     ? "https://api.whatsapp.com/send?phone=54..."
      //     : "https://web.whatsapp.com/send?phone=54..."
      // }
      href=''
      className={styles.whatsapp}
    >
      <svg height='50' width='50'>
        <image href='/WhatsApp-Black-White.svg' width='100%' height='100%' />
      </svg>
    </a>
  )
}
export default WhatsAppIcon
