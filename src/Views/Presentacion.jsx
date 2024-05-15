import imgbinker from '../img/binker.png'
import imgabajo from '../img/cosoabajo.PNG'
import Boton from '../components/Boton'
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
                    <i class="fa fa-github"></i>
                    <Boton class="btn btn-warning" texto="Contactame!"/>
                </div>
            </div>
            <br/>
            <img className="abajo" src={imgabajo} alt="imagen" />
        </div>
        
    )
}
 
export default Presentacion; 
