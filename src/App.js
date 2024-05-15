import './App.css';
import Boton from './components/Boton';
import Link from './components/Link';
import Presentacion from './Views/Presentacion';
import presentacion from './Views/Presentacion'
import Navbar from '../src/Views/Navbar'

function App() {
  
  return (
    <div>
      <Navbar links = {["acerca de mi ", "a"]}/>
      <div class="presentacion">
        <Link class = "nombre" link = "#" texto = "Ian Levin"/>
        <Presentacion/>
      </div>
    </div>
    
  );
}

export default App;
