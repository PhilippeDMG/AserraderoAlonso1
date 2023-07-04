/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"
import "./global.css"
import Inicio from './pages/inicio/Inicio'
import Servicios from './pages/servicios/Servicios'
import Contactenos from './pages/contactenos/Contactenos'
import SobreNosotros from './pages/sobreNosotros/SobreNosotros'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Servicios />
  </React.StrictMode>
)
