import sql from '../images/icons/sql.png'
import c from '../images/icons/c.png'
import codigo from '../images/icons/codigo.png'
import Iconolink from '../components/Iconolink'
import web from '../images/icons/web.png'


const Conocimientos = (props) =>{
    return(
        <div className='conocimientos'>
            <h2>Conocimientos</h2>
            <div className='iconosconocimiento'>
            <Iconolink icono = {codigo}/>
            <Iconolink icono = {c}/>
            <Iconolink icono = {sql}/>
            <Iconolink icono = {web}/>
            </div>
            
        </div>
    )
    
}

export default Conocimientos;