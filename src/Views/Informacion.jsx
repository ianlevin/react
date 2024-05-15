import fotoian from '../img/fotoian.png'

const Informacion = (params) =>{
return(
    <div className="informacion">
        <h1>Hola! Me llamo Ian Levin</h1>
        <p>Soy Licenciado en Sistemas recibido en la Universidad de Palermo. 
            Además, hace más de 9 años que trabajo en educación IT, 
            transmitiendo los conceptos de programación a cientos de 
            jóvenes de nivel secundario y terciario.</p>

            <img src={fotoian} alt="fotoian" />
    </div>
)
}

export default Informacion;