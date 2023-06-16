import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Doctor.css'



function Cuentas(){
    const [pacientes, setPacientes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchPacientes();
    }, []);

    const fetchPacientes = async () => {
        try{            
            const response = await axios.get('http://localhost:4000/api/getPacientes') //Mostrar pacientes
            console.log("Holamundo")
            console.log(response.data)
            setPacientes(response.data)

        } catch (error){
            console.error('error', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredPacientes = pacientes.filter((pacientes) => {
        const {Id_Paciente, Nombre, Apellido_Paterno, Apellido_Materno} = pacientes
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return Id_Paciente.toString().includes(lowerCaseSearchQuery) || Nombre.toLowerCase().includes(lowerCaseSearchQuery)|| Apellido_Paterno.toLowerCase().includes(lowerCaseSearchQuery)|| Apellido_Materno.toLowerCase().includes(lowerCaseSearchQuery);
    });

    return (
    <div className='Cuentas'>
        <input type="text" placeholder='Search...' className="search" onChange={handleSearchChange} />
        <ul className='list'>
            {filteredPacientes.map((pacientes) => (
            <li key={pacientes.Id_Paciente} className='listItem'>
                <Link to={`/patient-detail/${pacientes.Id_Paciente}`}>{pacientes.Nombre} {pacientes.Apellido_Paterno} {pacientes.Apellido_Materno} {pacientes.Edad + " años"}</Link>
                </li>
            ))}
        </ul>
    </div>
);
}

export default Cuentas; 