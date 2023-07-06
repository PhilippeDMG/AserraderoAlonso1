/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"
import "./global.css"
import Portada from "./components/globales/Portada"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portada
      titulo={"Contáctenos"}
      cuerpo={
        "Estamos para ayudarlo. Contáctenos y descubra cómo podemos cumplir sus necesidades"
      }
      nombreImagen={"IMG_6496.webp"}
    />
  </React.StrictMode>
)
