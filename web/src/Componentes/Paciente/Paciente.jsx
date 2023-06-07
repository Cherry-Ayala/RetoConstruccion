import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Paciente.css'
import axios from 'axios'
import { wait } from '@testing-library/user-event/dist/utils';

function Paciente() {

  const {Id_Paciente} = useParams(); 
  const [Paciente, setPaciente] = useState(""); 

  useEffect(() => {
    fecthPaciente(); 
  }, []); 
  
  const fecthPaciente = async() => {
    try{
      const response = await axios.get('/api/getPaciente/:Id_Paciente'); 
      setPaciente(response.data);
    }catch(error){
      console.error('error', error);
    }
  }; 

  if(!Paciente){
    return <><div>erorr...</div></>
  }

  return (
    <>
      <div className="paciente container">
        <div className="paciente-header row rounded">
          <h3 className="m-0 text-grow-1">{Paciente.nombre}</h3>
          <span > {Paciente.edad} </span>
        </div>

        <div className="renglon1 row w-100">
          <div className="columna col-sm rounded d-flex align-items-center justify-content-center">
            <p className='m-0'>aqui va enfermedad</p>
          </div>
          <div className="columna col-sm rounded d-flex align-items-center justify-content-center">
            <p className='m-0'>aqui va medicamento </p>
          </div>
        </div>

        <div className='renglon2 row w-100'>
          <div className="columna col-sm rounded d-flex align-items-center justify-content-center">
              <p className='m-0'>aqui va aliimentacion</p>
            </div>
            <div className="columna  col-sm rounded d-flex align-items-center justify-content-center">
              <p className='m-0'>aqui va sueño</p>
            </div>
            <div className="columna col-sm rounded d-flex align-items-center justify-content-center">
              <p className='m-0'>aqui va ejercicio </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Paciente;
