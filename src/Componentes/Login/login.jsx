import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

function Login () {
    const [ user, setUser ] = useState('a00833419@tec.mx');
    const [ password, setPassword ] = useState('A00833419');

    const handleUserChange = (event) => { setUser(event.target.value);}
    const handlePasswordChange = (event) => { setPassword(event.target.value);}
    const handleSubmit = (event) => {
        event.preventDefault();

        //conectar a la api de la base de datos
        window.location.href = '/cuestionario';
        axios.post('api/login', {user, password})
        .then(response => {
            if(response.data.success){  
                window.location.href = '/cuestionario';
            }
            else{
                console.log(response.data.message)
            }
        })

        .catch(error => {console.log(error);});
    }
    return (
    <div className='card '>
      <h1>Login</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">User:</label>
          <input type="email" id="user" value={user} onChange={handleUserChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
        <button type="submit">Log In</button>
        </div>
      </form>
    </div>
    
    );

}

export default Login;