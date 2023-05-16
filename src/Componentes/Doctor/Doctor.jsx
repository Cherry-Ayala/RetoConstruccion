import React, {useState} from 'react';
import {Row, Col, Typography, Table, Space} from 'antd'
import { Pacientes } from './Pacientes';
import './Doctor.css'


const {Title} = Typography; 

function Cuentas() {
    const [query, setQuery] = useState(""); 
    //console.log(Users.filter(user=> user.nombre.toLocaleLowerCase()));
    return ( 
        <div className='Cuentas'>
            <input type="text" placeholder='Search...' className="search" onChange={e=> setQuery(e.target.value)}/> 
            <ul className='list'>
                {Pacientes.filter((user) =>
                    user.nombre.toLowerCase().includes(query)
                    ).map((user) => (
                    <li key={user.id} className='listItem'> {user.nombre} {user.apellido}</li>
                ))}
            </ul>
        </div> 
    ); 
}
 export default Cuentas; 