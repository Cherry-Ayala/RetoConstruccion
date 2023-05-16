import React, { useState } from 'react';
import axios from 'axios';
import './cuestionario.css';

function Cuestionario() {

        const[nombre, setNombre] = useState('');
        const[desayuno, setDesayuno] = useState('');
        const[comida, setComida] = useState('');
        const[cena, setCena] = useState('');
        const[snackManana, setSnackManana] = useState('');
        const[snackTarde, setSnackTarde] = useState('');
        const[snackNoche, setSnackNoche] = useState('');
        const[entrenamiento, setEntrenamiento] = useState('');
        const[duracionEntrenamiento, setDuracionEntrenamiento] = useState('');
        const[horasSueno, setHorasSueno] = useState('');
        const[calidadSueno, setCalidadSueno] = useState('');
        const[Medicamento, setMedicamento] = useState('');
        const[dosis, setDosis] = useState('');
        const[horario, setHorario] = useState('');

        const handleNombreChange = (event) => { setNombre(event.target.value);}
        const handleDesayunoChange = (event) => { setDesayuno(event.target.value);}
        const handleComidaChange = (event) => { setComida(event.target.value);}
        const handleCenaChange = (event) => { setCena(event.target.value);}
        const handleSnackMananaChange = (event) => { setSnackManana(event.target.value);}
        const handleSnackTardeChange = (event) => { setSnackTarde(event.target.value);}
        const handleSnackNocheChange = (event) => { setSnackNoche(event.target.value);}
        const handleEntrenamientoChange = (event) => { setEntrenamiento(event.target.value);}
        const handleDuracionEntrenamientoChange = (event) => { setDuracionEntrenamiento(event.target.value);}
        const handleHorasSuenoChange = (event) => { setHorasSueno(event.target.value);}
        const handleCalidadSuenoChange = (event) => { setCalidadSueno(event.target.value);}
        const handleMedicamentoChange = (event) => { setMedicamento(event.target.value);}
        const handleDosisChange = (event) => { setDosis(event.target.value);}
        const handleHorarioChange = (event) => { setHorario(event.target.value);}


        //conectar a la api

        const data = {nombre, desayuno, comida, cena, snackManana, snackTarde, snackNoche, entrenamiento, duracionEntrenamiento, horasSueno, calidadSueno, Medicamento, dosis, horario};
        const handleSubmit = (event) => {
            event.preventDefault();
            axios.post('api/cuestionario', data)
            .then(response => {console.log(response.data);})
            .catch(error => {console.log(error);});}

        return(
            <div className="cuestionario">
                <h1>Cuestionario</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="nombre" id="nombre" name="nombre" requiered value={nombre} onChange={handleNombreChange} />
    
                    <br />
    
                    <label htmlFor="desayuno">Desayuno:</label>
                    <input type="text" id="desayuno" name="desayuno" requiered value={desayuno} onChange={handleDesayunoChange} />

                    <br />

                    <label htmlFor="comida">Comida:</label>
                    <input type="text" id="comida" name="comida" requiered value={comida} onChange={handleComidaChange} />
    
                    <br />

                    <label htmlFor="cena">Cena:</label>
                    <input type="text" id="cena" name="cena" requiered value={cena} onChange={handleCenaChange} />
    
                    <br />

                    <label htmlFor="snack manana">Snack Manana:</label>
                    <input type="text" id="snack manana" name="snack manana" requiered value={snackManana} onChange={handleSnackMananaChange} />
    
                    <br />

                    <label htmlFor="snack tarde">Snack Tarde:</label>
                    <input type="text" id="snack tarde" name="snack tarde" requiered value={snackTarde} onChange={handleSnackTardeChange} />
    
                    <br />

                    <label htmlFor="snack noche">Snack Noche:</label>
                    <input type="text" id="snack noche" name="snack noche" requiered value={snackNoche} onChange={handleSnackNocheChange} />
    
                    <br />

                    <label htmlFor="entrenamiento">Entrenamiento:</label>
                    <input type="text" id="entrenamiento" name="entrenamiento" requiered value={entrenamiento} onChange={handleEntrenamientoChange} />
    
                    <br />
    
                    <label htmlFor="duracion entrenamiento">Duración de Entrenamiento:</label>
                    <select id="duracion Entrenamiento" name="duracion Entrenamiento" requiered value={duracionEntrenamiento} onChange={handleDuracionEntrenamientoChange} />
                    <option value="">seleccione una opción</option>
                    <option value="30min - 1 hora">30min - 1 hora</option>
                    <option value="1 hora - 2 hora">1 hora - 2 hora</option>
                    <option value="2 horas - 3 horas">2 horas - 3 horas</option>
                    <option value="3 horas +">3 horas +</option>
                    <select/>
    
                    <br />

                    <label htmlFor="Horas de sueño">Horas de Sueño:</label>
                    <input type="number" id="edad" name="horasSueno" requiered value={horasSueno} onChange={handleHorasSuenoChange} />

                    <br />
    
                    <label htmlFor="calidad de sueño">Calidad de Sueño:</label>
                    <select id="calidad de sueño" name="calidadSueno" requiered value={calidadSueno} onChange={handleCalidadSuenoChange} />
                    <option value="">seleccione una opción</option>
                    <option value="muy malo">muymalo</option>
                    <option value="malo">malo</option>
                    <option value="regular">regular</option>
                    <option value="bueno">bueno</option>
                    <option value="muy bueno">muy bueno</option>
                    <select/>
    
                    <br />

                    <label htmlFor="medicamento">Medicamento:</label>
                    <input type="text" id="medicamento" name="medicamento" requiered value={Medicamento} onChange={handleMedicamentoChange} />

                    <br />

                    <label htmlFor="dosis">Dosis:</label>
                    <input type="float" id="dosis" name="dosis" requiered value={dosis} onChange={handleDosisChange} />

                    <br />

                    <label htmlFor="horario">Horario:</label>
                    <input type="float" id="horario" name="horario" requiered value={horario} onChange={handleHorarioChange} />

                    <br />
    
                    <input type="submit" value="Enviar" />
    
                </form>
    
            </div>
        );
    }

    export default Cuestionario;