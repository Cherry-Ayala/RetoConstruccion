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
            const response = await axios.get('/api/getPaciente/:Id_Paciente')
            setPacientes(response.data)
        } catch (error){
            console.error('error', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const filteredPacientes = pacientes.filter((pacientes) => {
        const {id, nombre} = pacientes
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return id.toString().includes(lowerCaseSearchQuery) || nombre.toLowerCase().includes(lowerCaseSearchQuery);
    });

    return (
    <div className='Cuentas'>
        <input type="text" placeholder='Search...' className="search" onChange={handleSearchChange} />
        <ul className='list'>
            {filteredPacientes.map((pacientes) => (
            <li key={pacientes.id} className='listItem'>
                <Link to={`/patient-detail/${pacientes.id}`}>{pacientes.nombre} {pacientes.apellido}</Link>
                </li>
            ))}
        </ul>
    </div>
);
}

export default Cuentas; 