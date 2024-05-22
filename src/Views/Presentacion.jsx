import imgbinker from '../images/binker.png'
import imgabajo from '../images/cosoabajo.PNG'
import Boton from '../components/Boton'
import Iconolink from '../components/Iconolink'
import linkedin from '../images/icons/linkedin.png'
import github from '../images/icons/github.png'
const Presentacion = (params) =>{
    return(
        <div>
            <div className="presentacionimagen" >
                <img className="binker" src={imgbinker} alt="imagen" />
                <div className="presentaciontexto" >
                    <p>HOLA!</p>
                    <h1>Soy Ian Levin!</h1>
                    <br/>
                    <h4>Licenciado en sistemas</h4>
                    <div>
                        <Iconolink icono = {linkedin}/>
                        <Iconolink icono = {github}/>
                    </div>
                    <Boton class="btn btn-warning" texto="Contactame!"/>
                </div>
            </div>
            <br/>
            <img className="abajo" src={imgabajo} alt="imagen" />
        </div>
        
    )
}
 
export default Presentacion; 
