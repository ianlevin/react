import fotoian from '../images/yo.jpeg'

const Informacion = (params) =>{
return(
    <div className="informacion" id="Educacion"> 
        <div>
            <h1>Hola! Me llamo Ian Levin</h1>
            <p>Soy Estudiante de ORT Argentina de la especialidad de informática.
                Además estoy haciendo el Ciclo básico común para la facultad de
                ingemiería de Buenos Aires.
            </p>
            <br />
            <h5>Edad: 17 años</h5>
            <br />
            <h5>Email: ianlev1234567@gmail.com</h5>
            <br />
            <p>Mis conocimientos en educación me permiten comunicar mis pensamientos 
               e intenciones de una manera clara y eficiente. Además, cuento con muchas 
               ganas de participar en proyectos que exploren tecnologías emergentes e innovadoras.</p>
        </div>

        <div>
            <img src={fotoian} alt="fotoian" />
            <i class="fi fi-brands-linkedin"></i>
        </div>
    </div>
)
}

export default Informacion;