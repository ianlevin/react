import imgbinker from '../img/binker.png'
import imgabajo from '../img/cosoabajo.PNG'
const Presentacion = (params) =>{
    return(
        <div>
            <div class="presentacionimagen" >
                <img class="binker" src={imgbinker} alt="imagen" />
                <div class="presentaciontexto" >
                    <p>HOLA!</p>
                    <h1>Soy Ian Levin!</h1>
                    <br/>
                    <h4>Licenciado en </h4>
                    <div class="fab">
                        <i class="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <br/>
            <img class="abajo" src={imgabajo} alt="imagen" />
        </div>
        
    )
}
 
export default Presentacion; 
