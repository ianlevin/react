import './App.css';
import Boton from './components/Boton';
import Link from './components/Link';
import Presentacion from './Views/Presentacion';
import presentacion from './Views/Presentacion'
import Navbar from '../src/Views/Navbar'
import Informacion from '../src/Views/Informacion'
import Conocimientos from '../src/Views/Conocimientos'

function App() {
  
  return (
    <div>
      <Navbar links = {["Acerca de mi ", "Conocimientos", "Experiencia", "Educación", "Certificaciones", "Contacto"]}/>
      <div className="presentacion">
        <Link class = "nombre" link = "#" texto = "Ian Levin"/>
        <Presentacion/>
      </div>
      <Informacion/>
      <Conocimientos/>
    </div>
    
  );
}

export default App;
