import imgbinker from '../img/binker.jpg'
import imgabajo from '../img/cosoabajo.PNG'
const Presentacion = (params) =>{
    return(
        <div>
            <img class="binker" src={imgbinker} alt="imagen" />
            <br/>
            <img class="abajo" src={imgabajo} alt="imagen" />
        </div>
    )
}
 
export default Presentacion; 
