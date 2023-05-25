import React, {useState} from 'react';

import { Pacientes } from './Pacientes';
import './Doctor.css'




function Cuentas() {
    const [query, setQuery] = useState(""); 
    //console.log(Users.filter(user=> user.Nombre.toLocaleLowerCase()));
    return ( 
        <div className='Cuentas'>
            <input type="text" placeholder='Search...' className="search" onChange={e=> setQuery(e.target.value)}/> 
            <ul className='list'>
                {Pacientes.filter((user) =>
                    user.Nombre.toLowerCase().includes(query)
                    ).map((user) => (
                    <li key={user.Id_Paciente} className='listItem'> {user.Nombre} {user.Apellido_Paterno} {user.Apellido_Materno} </li>
                ))}
            </ul>
        </div> 
    ); 
}
 export default Cuentas; 