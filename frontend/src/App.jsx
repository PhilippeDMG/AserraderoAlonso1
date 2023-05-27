/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio"
import Servicios from "./pages/servicios/Servicios"
import SobreNosotros from "./pages/sobreNosotros/SobreNosotros"
import Contactenos from "./pages/contactenos/Contactenos"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Inicio usarMapa={true} />} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/contacto" component={Contactenos} />
        <Route exact path="/sobre-nosotros" component={SobreNosotros} />
      </Switch>
    </Router>
  );
};

export default App;