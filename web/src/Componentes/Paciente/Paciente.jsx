import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Paciente.css'
import axios from 'axios'
//http://localhost:4000/api/getPaciente/1

function Paciente() {

  const PatientDetails = ({Id_Paciente}) => { 
  const [Paciente, setPaciente] = useState(null); 

  useEffect(() => {
  // Hacer la petición GET a la API usando Axios
  const fetchPatient = async () => {
    try {
      const response = axios.get("http://localhost:4000/api/getPaciente/:Id_Paciente"); // Replace with your API endpoint
      const data = await response.json();
      setPaciente(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fecthMed = async() => {
    try{
      const response = await axios.get("http://localhost:4000/api/getMed/:Id_CatMed"); //Pasa la id de paciente
      setPaciente(response.data);
    }catch(error){
      console.error('error', error);
    }
  }; 

  const fecthAlimento = async() => {
    try{
      const response = await axios.get("http://localhost:4000/api/getAlimento/:Id_Paciente"); //Pasa la id de paciente
      setPaciente(response.data);
    }catch(error){
      console.error('error', error);
    }
  };

  const fecthDescanso = async() => {
    try{
      const response = await axios.get("http://localhost:4000/api/getDescanso/:Id_Descanso"); //Pasa la id de paciente
      setPaciente(response.data);
    }catch(error){
      console.error('error', error);
    }
  }; 

  const fecthEjercicio = async() => {
    try{
      const response = await axios.get("http://localhost:4000/api/getEjercicio/:Id_Paciente"); //Pasa la id de paciente
      setPaciente(response.data);
    }catch(error){
      console.error('error', error);
    }
  }; 

  fetchPatient();
  fecthMed();
  fecthAlimento();
  fecthDescanso();
  fecthEjercicio();

}, [Id_Paciente]);
  
  const fecthMed = async() => {
    try{
      const response = await axios.get("http://localhost:4000/api/getMed/1"); //Pasa la id de paciente
      setPaciente(response.data);
    }catch(error){
      console.error('error', error);
    }
  }; 



   

  if(!Paciente){
    return <><div>error...</div></>
  }

  
 /* const filteredPacientes = ((Paciente) => { "http://localhost:4000/api/getPaciente/1"
    const {Nombre, Apellido_Paterno, Apellido_Materno, Edad} = Paciente
  return Nombre, Apellido_Paterno, Apellido_Materno, Edad});*/
  }
  return (
    <>
      
      <div className="paciente container">
        <div className="paciente-header row rounded">
        <ul>
        
          <h3 key={Paciente.Id_Paciente} className="m-0 text-grow-1">  {Paciente.Nombre}</h3>
           {Paciente.Edad} 
          </ul>
        </div>

        <div className="renglon1 row w-100">
          <div className="columna col-sm rounded d-flex align-items-center justify-content-center">
            <p className='m-0'> {"Gastritis"}</p>
          </div>
          <div className="columna col-sm rounded d-flex align-items-center justify-content-center">
            <p className='m-0'>aqui va medicamento: {Paciente.Nombre_Medicamento} </p>
          </div>
        </div>

        <div className='renglon2 row w-100'>
          <div className="columna col-sm rounded d-flex align-items-center justify-content-center">
              <p className='m-0'>aqui va aliimentacion: {Paciente.Descripcion}</p>
            </div>
            <div className="columna  col-sm rounded d-flex align-items-center justify-content-center">
              <p className='m-0'>aqui va sueño: {Paciente.Horas_Dormidas}</p>
            </div>
            <div className="columna col-sm rounded d-flex align-items-center justify-content-center">
              <p className='m-0'>aqui va ejercicio: {Paciente.Entrenamiento_realizado} {Paciente.Duracion_minutos} </p>
            </div>
        </div>
      </div>
    </>
  );

  
};

export default Paciente;
