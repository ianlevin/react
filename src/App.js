import './App.css';
import Boton from './components/Boton';
import Link from './components/Link';
import Presentacion from './Views/Presentacion';
import presentacion from './Views/Presentacion'

function App() {
  return (
    <div>
      <Link class = "nombre" link = "#" texto = "Ian Levin"/>
      <Presentacion/>
    </div>
  );
}

export default App;
